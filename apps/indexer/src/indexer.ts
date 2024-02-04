import { stringify, parseEventLogs } from 'viem'
import { client } from './evm-client'
import { TestnetEasyAuction } from 'smartsale-abis'

export async function startIndexer() {
  console.log('indexing starting')

  // await writeToFile(stringify(TestnetEasyAuction.getEvents(), null, 2), './events.json')
  // Get historical event logs
  const blockNumber = await client.getBlockNumber()
  const logs = await client.getLogs({
    events: TestnetEasyAuction.getEvents(),
    fromBlock: BigInt(TestnetEasyAuction.indexFromBlock),
    toBlock: blockNumber,
  })
  const filteredlogs = logs.filter((log) => log.eventName !== 'OwnershipTransferred')
  console.log(
    stringify(parseEventLogs({ abi: TestnetEasyAuction.abi, logs: filteredlogs }), null, 2),
  )
  // await writeToFile(stringify(, null, 2), './logs.json')

  // Watch for new event logs
  client.watchEvent({
    events: TestnetEasyAuction.getEvents(),
    onLogs: (logs) => {
      const filteredlogs = logs.filter((log) => log.eventName !== 'OwnershipTransferred')
      console.log(
        stringify(parseEventLogs({ abi: TestnetEasyAuction.abi, logs: filteredlogs }), null, 2),
      )
    },
  })
}
