import { stringify, parseEventLogs } from 'viem'
import { client } from './evm-client'
import { TestnetEasyAuction } from 'smartsale-abis'
import { runPromisesInSeries } from './lib'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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
    if (!(eventName in eventHandlers)) return null
    return async () => {
      try {
        eventHandlers[eventName](log)
      } catch (error) {
        //TODO: sent sentry reports
        console.error(error)
      }
    }
  })

  runPromisesInSeries(actions)
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
  // console.log('handleAuctionCleared', log)
}

function handleCancellationSellOrder(log: any) {
  // console.log('handleCancellationSellOrder', log)
}

function handleClaimedFromOrder(log: any) {
  // console.log('handleClaimedFromOrder', log)
}

async function handleNewAuction(log: any) {
  console.log('handleNewAuction', log)
  // auctionId: 5n,
  // _auctioningToken: '0x5EdB28FBa146371A5f4A1C5812111C887EC9Ae73',
  // _biddingToken: '0x5b148580635E8B67184bCb496741e423F2c326bF',
  // orderCancellationEndDate: 0n,
  // auctionEndDate: 1711349042n,
  // userId: 4n,
  // _auctionedSellAmount: 100000n,
  // _minBuyAmount: 50000000n,
  // minimumBiddingAmountPerOrder: 10000n,
  // minFundingThreshold: 0n,
  // allowListContract: '0x0000000000000000000000000000000000000000',
  // allowListData: '0x'
  
  // return prisma.auction_details.create({
    
  // })
}

function handleNewSellOrder(log: any) {
  // console.log('handleNewSellOrder', log)
}

function handleNewUser(log: any) {
  // console.log('handleNewUser', log)
}

function handleOwnershipTransferred(log: any) {
  // console.log('handleOwnershipTransferred', log)
}

function handleUserRegistration(log: any) {
  // console.log('handleUserRegistration', log)
}
