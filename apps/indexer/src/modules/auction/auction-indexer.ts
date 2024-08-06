import {Log, stringify, http, createPublicClient} from 'viem';
import { TestnetEasyAuction } from 'app-contracts'
import {
  bigintToPostgresTimestamp,
  getEvents,
  getTokenDetails,
  runPromisesInSeries,
} from '~/lib/utils'
import { NewAuctionEvent, NewSellOrderEvent, NewUserEvent } from './auction.type'
import BN from 'bn.js'
import { eosEvmTestnet } from 'app-env'
import { upsertAuctionDetail, upsertOrder } from '~/lib/supabase-client'

export async function startAuctionIndexer() {
  console.log('indexing starting')

  // TODO: create client for 
  const client = createPublicClient({
    chain: eosEvmTestnet,
    transport: http(),
  })

  // await writeToFile(stringify(TestnetEasyAuction.getEvents(), null, 2), './events.json')
  // Get historical event logs
  const blockNumber = await client.getBlockNumber()
  const events = getEvents(TestnetEasyAuction.abi)
  const logs = await client.getLogs({
    events,
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
    events,
    onLogs: (logs) => {
      const filteredlogs = logs.filter((log) => log.eventName !== 'OwnershipTransferred')
      console.log('real time', stringify(filteredlogs, null, 2))
      processLogs(logs)
    },
  })
}

// takes the generic logs and if the eventName matches one of the eventHandlers keys
// it passes the log to corresponding hanlder function
async function processLogs(logs: Log[]) {
  const actions = logs
    .map((log) => {
      const eventName = (log as any).eventName.toString()
      if (!(eventName in eventHandlers)) return null
      return async () => {
        try {
          eventHandlers[eventName] && eventHandlers[eventName](log)
        } catch (error) {
          //TODO: sent sentry reports
          console.error(error)
        }
      }
    })
    .filter((action): action is () => Promise<void> => action !== null)

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

async function handleNewAuction(log: NewAuctionEvent) {
  // console.log('handleNewAuction', log.args, typeof log.args)

  const auctioningToken = await getTokenDetails({ address: log.args._auctioningToken })
  const biddingToken = await getTokenDetails({ address: log.args._biddingToken })

  const data = {
    // id bigint generated by default as identity,
    // created_at timestamp with time zone not null default now(),
    exact_order_id: new BN(log.args.auctionId.toString()).toNumber(),
    chain_id: eosEvmTestnet.id,
    symbol_auctioning_token: auctioningToken.symbol,
    symbol_bidding_token: biddingToken.symbol,
    address_auctioning_token: auctioningToken.address,
    address_bidding_token: biddingToken.address,
    decimals_auctioning_token: auctioningToken.decimals,
    decimals_bidding_token: biddingToken.decimals,
    end_time_timestamp: bigintToPostgresTimestamp(log.args.auctionEndDate),
    order_cancellation_end_date: bigintToPostgresTimestamp(log.args.orderCancellationEndDate),
    // starting_time_stamp timestamp without time zone null,
    // minimum_bidding_amount_per_order: new BN(
    //   log.args.minimumBiddingAmountPerOrder.toString(),
    // ).toNumber(),
    // min_funding_threshold: new BN(log.args.minFundingThreshold.toString()).toNumber(),

    // review this values.
    // allow_list_manager: log.args.allowListContract,
    // allow_list_signer: log.args.allowListData,

    // current_volume integer null,
    // current_clearing_order_sell_amount bigint null,
    // current_clearing_order_buy_amount bigint null,
    // current_clearing_price integer null,
    // current_bidding_amount bigint null,
    // is_atomic_closure_allowed boolean null,
    // is_private_auction boolean null,
    // interest_score integer null,

    // TODO: add this to schema
    // _auctionedSellAmount: 100000n,
    // _minBuyAmount: 50000000n,
  }

  // console.log('handleNewAuction:: data for postgres db', data)
  try {
    const result = await upsertAuctionDetail(data)
    console.log('result', result)
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
}

async function handleNewSellOrder(log: NewSellOrderEvent) {
  console.log('handleNewSellOrder', log)

  if (!log.transactionHash) return

  const data = {
    auction_id: Number(log.args.auctionId),
    sell_amount: Number(log.args.sellAmount),
    buy_amount: Number(log.args.buyAmount),
    user_id: Number(log.args.userId),
    transactionHash: log.transactionHash,
  }
  const result = await upsertOrder(data)

  console.log(result)
}

function handleNewUser({ args }: NewUserEvent) {
  // console.log('handleNewUser', args)
  // const result = db.users.upsert({
  //   where: {
  //     id: { equals: args.userId },
  //   },
  //   update: args,
  //   create: args,
  // })
}

function handleOwnershipTransferred(log: any) {
  // console.log('handleOwnershipTransferred', log)
}

function handleUserRegistration(log: any) {
  // console.log('handleUserRegistration', log)
}
