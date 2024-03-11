import { createDfuseClient, GraphqlStreamMessage, WebSocketFactory } from '@dfuse/client'
import { appenv } from './config'
import { IncomingMessage } from 'http'
import nodeFetch from 'node-fetch'
import WebSocketClient from 'ws'
import { smartsaleEnv } from 'smartsale-env'
import { EventEmitter } from 'events'

// required by dfuse/client
import { issueTokens } from './issuer'
import { stringify } from 'viem'
;(global as any).fetch = nodeFetch
;(global as any).WebSocket = WebSocketClient

const dfuse = createDfuseClient({
  apiKey: appenv.eos.dfuseKey,
  network: 'eos.dfuse.eosnation.io',
  // authentication: true,
  httpClientOptions: {
    fetch: nodeFetch,
  },
  graphqlStreamClientOptions: {
    socketOptions: {
      // @ts-ignore
      webSocketFactory: (url) => webSocketFactory(url, ['graphql-ws']),
    },
  },
  streamClientOptions: {
    socketOptions: {
      // @ts-ignore
      webSocketFactory,
    },
  },
})

export function listenToEos(env: 'test' | 'prod' = 'test') {
  const usdt = smartsaleEnv[env].usdt.find((t) => (t.chainType = 'antelope'))?.address
  const bank = smartsaleEnv[env].bitcash.bank
  // https://docs.dfuse.eosnation.io/platform/public-apis/search-query-language/
  // https://docs.dfuse.eosnation.io/eosio/public-apis/reference/search/terms/
  // receiver: means the account with code that has executed the action.
  const usdtDeposits = createFirehoseSubscription(`"receiver:${usdt} action:transfer"`)
  const bitusdDeposits = createFirehoseSubscription(`"receiver:${bank} action:stbtransfer"`)

  // only first action for now
  usdtDeposits.on('data', ({ trxId, actions }) =>
    handleDeposit({ trxId, from: actions[0].from, quantity: actions[0].quantity }),
  )
  bitusdDeposits.on('data', ({ trxId, actions }) =>
    handleDeposit({ trxId, from: actions[0].from, quantity: actions[0].quantity.quantity }),
  )
}

async function handleDeposit(data: { trxId: string; from: string; quantity: string }) {
  console.log('handle deposit', data)

  const response = await issueTokens(
    '0x7472312e4e1a373df751f84bd871a4c7a16128fa',
    BigInt(100000000),
  )
  console.log('tokens issued', stringify(response))
}

export function createFirehoseSubscription(query: string) {
  const eventEmitter = new EventEmitter()

  console.log('query:', query)
  const streamTransfers: string = `subscription {
    searchTransactionsForward(query: ${query}) {
      undo cursor
      trace {
        id
        matchingActions {
          json
        }
      }
    }
  }`

  dfuse.graphql(streamTransfers, (message: GraphqlStreamMessage<any>) => {
    if (message.type === 'data') {
      const transfer = message.data.searchTransactionsForward.trace
      const data = {
        trxId: transfer.id,
        actions: transfer.matchingActions.map(({ json }: any) => json),
      }
      eventEmitter.emit('data', data)
      console.log('Token Transfer:', JSON.stringify(data))
    }

    if (message.type === 'error') {
      console.error('An error occurred:', message.errors, message.terminal)
    }

    if (message.type === 'complete') {
      console.log('Stream completed')
    }
  })

  console.log('Listening to token transfers...')
  return eventEmitter
}

async function webSocketFactory(url: string, protocols: string[] = []): Promise<WebSocketFactory> {
  const webSocket = new WebSocketClient(url, protocols, {
    handshakeTimeout: 30 * 1000, // 30s
    maxPayload: 100 * 1024 * 100, // 100Mb
  })
  const onUpgrade = (response: IncomingMessage) => {
    // Removing the listener at this point since this factory
    // is called at each reconnection with the remote endpoint!
    webSocket.removeListener('upgrade', onUpgrade)
  }

  webSocket.on('upgrade', onUpgrade)

  // @ts-ignore
  return webSocket
}
