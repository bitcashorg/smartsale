import { stringify } from 'viem'
import { client } from './evm-client'
import { TestnetEasyAuction } from 'smartsale-abis'

export async function startIndexer(){
  console.log('indexing starting')
  
  // Get historical event logs
  const blockNumber = await client.getBlockNumber()
  const logs = await client.getLogs({
    events: TestnetEasyAuction.getEvents(),
    fromBlock: BigInt(TestnetEasyAuction.indexFromBlock),
    toBlock: blockNumber,
  })
  console.log(stringify(logs))

  // Watch for new event logs
  client.watchEvent({
    events: TestnetEasyAuction.getEvents(),
    onLogs: (logs) => {
      console.log(stringify(logs))
    },
  })
}


