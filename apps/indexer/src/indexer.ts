import { stringify, parseEventLogs } from 'viem'
import { client } from './evm-client'
import { TestnetEasyAuction } from 'smartsale-abis'
import { runPromisesInSeries } from './lib'

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
  processLogs(logs)

  // const filteredlogs = logs.filter((log) => log.eventName !== 'OwnershipTransferred')

  // console.log(
  //   stringify(parseEventLogs({ abi: TestnetEasyAuction.abi, logs: filteredlogs }), null, 2),
  // )
  // await writeToFile(stringify(, null, 2), './logs.json')

  // Watch for new event logs
  client.watchEvent({
    events: TestnetEasyAuction.getEvents(),
    onLogs: (logs) => {
      const filteredlogs = logs.filter((log) => log.eventName !== 'OwnershipTransferred')
      console.log(
        stringify(parseEventLogs({ abi: TestnetEasyAuction.abi, logs: filteredlogs }), null, 2),
      )
      processLogs(logs)
    },
  })
}

async function processLogs(logs: any) {
  const actions = logs.map((log: any) => {
    const eventName = log.eventName.toString()
    if (!isKeyOfEventHandlers(eventName)) return null
    return async () => eventHandlers[eventName](log)
  })

  runPromisesInSeries(actions)
}

function isKeyOfEventHandlers(key: string) {
  return key in eventHandlers
}

const eventHandlers: { [key: string]: (log: any) => void } = {
  AuctionCleared: handleAuctionCleared,
  CancellationSellOrder: handleCancellationSellOrder,
  ClaimedFromOrder: handleClaimedFromOrder,
  NewAuction: handleNewAuction,
  NewSellOrder: handleNewSellOrder,
  NewUser: handleNewUser,
  OwnershipTransferred: handleOwnershipTransferred,
  UserRegistration: handleUserRegistration,
}

function handleAuctionCleared(log: any) {
  console.log('handleAuctionCleared', log)
}

function handleCancellationSellOrder(log: any) {
  console.log('handleCancellationSellOrder', log)
}

function handleClaimedFromOrder(log: any) {
  console.log('handleClaimedFromOrder', log)
}

function handleNewAuction(log: any) {
  console.log('handleNewAuction', log)
}

function handleNewSellOrder(log: any) {
  console.log('handleNewSellOrder', log)
}

function handleNewUser(log: any) {
  console.log('handleNewUser', log)
}

function handleOwnershipTransferred(log: any) {
  console.log('handleOwnershipTransferred', log)
}

function handleUserRegistration(log: any) {
  console.log('handleUserRegistration', log)
}
