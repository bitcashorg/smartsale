import { createDfuseClient, GraphqlStreamMessage, WebSocketFactory } from '@dfuse/client'
import { appenv } from '~/config'
import { IncomingMessage } from 'http'
import nodeFetch from 'node-fetch'
import WebSocketClient from 'ws'
import { smartsaleEnv } from 'smartsale-env'
import { EventEmitter } from 'events'

// required by dfuse/client
import { issueTokens } from './evm-deposits'
import { stringify } from 'viem/utils'
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

function getSeatchTxBackwardQuery(query: string) {
  return `
    subscription {
      searchTransactionsBackward(query: "${query}", lowBlockNum:363344907, irreversibleOnly:true ) { 
        isIrreversible
        irreversibleBlockNum
        cursor
        block {
          id
          num
        }
        trace {
          id
          status
          matchingActions {
            account
            name
            data
          }
          block {
            id
            num
            confirmed
            timestamp
            producer
          }
        }
      }
    }
  `
}

export async function readEosHistory(env: 'test' | 'prod' = 'test') {
  const queries = getFirehoseQueries(env)
  console.log('queries.usdt', queries.usdt)
  const streamTransfers = getSeatchTxBackwardQuery(queries.usdt)

  const stream = await dfuse.graphql(streamTransfers, (message: GraphqlStreamMessage<any>) => {
    if (message.type === 'data') {
      console.log('WE GOT DATA')
      const transfer = message.data.searchTransactionsBackwards.trace
      const data = {
        trxId: transfer.id,
        actions: transfer.matchingActions.map(({ json }: any) => json),
        undo: message.data.searchTransactionsBackwards.undo, // Indicates if this is an undo operation
      }
      console.log('History Token Transfer:', JSON.stringify(data))
    }

    if (message.type === 'error') {
      console.error('An error occurred:', message.errors, message.terminal)
    }

    if (message.type === 'complete') {
      console.log('History Stream completed')
    }
  })

  console.log('Reading historical token transfers...')
}

function getFirehoseQueries(env: 'test' | 'prod' = 'test') {
  const usdt = smartsaleEnv[env].usdt.find((t) => (t.chainType = 'antelope'))?.address
  const bank = smartsaleEnv[env].bitcash.bank
  const launchpad = smartsaleEnv[env].smartsale.bk

  return {
    bitusd: `receiver:${bank} action:stbtransfer data.to:${launchpad}`,
    usdt: `receiver:${usdt} action:transfer data.to:${launchpad}`,
  }
}

export async function listenToEos(env: 'test' | 'prod' = 'test') {
  const queries = getFirehoseQueries(env)
  // https://docs.dfuse.eosnation.io/platform/public-apis/search-query-language/
  // https://docs.dfuse.eosnation.io/eosio/public-apis/reference/search/terms/
  // receiver: means the account with code that has executed the action.
  const usdtDeposits = await createFirehoseSubscription(queries.usdt)
  const bitusdDeposits = await createFirehoseSubscription(queries.bitusd)

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

export async function createFirehoseSubscription(query: string) {
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

  const stream = await dfuse.graphql(streamTransfers, (message: GraphqlStreamMessage<any>) => {
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

  return { on: eventEmitter.on, stream }
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
