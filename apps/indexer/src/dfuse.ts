import { createDfuseClient, GraphqlStreamMessage, DfuseClient } from '@dfuse/client'
import { appenv } from './config'
;(global as any).fetch = require('node-fetch')
;(global as any).WebSocket = require('ws')

const dfuse: DfuseClient = createDfuseClient({
  apiKey: appenv.eos.dfuseKey,
  network: 'mainnet.eos.dfuse.io',
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
