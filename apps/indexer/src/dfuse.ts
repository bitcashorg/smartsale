import { createDfuseClient, GraphqlStreamMessage, WebSocketFactory } from '@dfuse/client'
import { appenv } from './config'
import { IncomingMessage } from 'http'
import nodeFetch from 'node-fetch'
import WebSocketClient from 'ws'

// required by dfuse/client
;(global as any).fetch = nodeFetch
;(global as any).WebSocket = WebSocketClient

const dfuse = createDfuseClient({
  apiKey: appenv.eos.dfuseKey,
  network: 'mainnet.eos.dfuse.io',
  authentication: true,
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

export async function listenToEos(): Promise<void> {
  const streamTransfers: string = `subscription {
  searchTransactionsForward(query: "((account:tethertether data.quantity:'USDT') OR (account:token.bk data.quantity:'BITUSD')) AND action:transfer") {
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
      const transfer = message.data.searchTransactionsForward
      console.log('Token Transfer:', transfer.trace.matchingActions[0].json)
    }

    if (message.type === 'error') {
      console.error('An error occurred:', message.errors, message.terminal)
    }

    if (message.type === 'complete') {
      console.log('Stream completed')
    }
  })

  console.log('Listening to token transfers...')
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
