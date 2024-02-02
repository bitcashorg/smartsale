import { stringify } from 'viem'
import { client } from './evm-client'
import { TestnetEasyAuction } from 'smartsale-abis'

export async function startIndexer(){
  console.log('indexing starting')

  // await writeToFile(stringify(TestnetEasyAuction.getEvents(), null, 2), './events.json')
  // Get historical event logs
  const blockNumber = await client.getBlockNumber()
  const logs = await client.getLogs({
    events: TestnetEasyAuction.getEvents(),
    fromBlock: BigInt(TestnetEasyAuction.indexFromBlock),
    toBlock: blockNumber,
  })
  // console.log(stringify(logs, null, 2))
  // await writeToFile(stringify(logs.filter((log) => log.eventName !== 'OwnershipTransferred'), null, 2), './logs.json')

  // Watch for new event logs
  client.watchEvent({
    events: TestnetEasyAuction.getEvents(),
    onLogs: (logs) => {
      console.log(stringify(logs, null, 2))
    }
  })
}



