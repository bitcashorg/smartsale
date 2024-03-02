
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Auction_detailsScalarFieldEnum = {
  created_at: 'created_at',
  exact_order_id: 'exact_order_id',
  symbol_auctioning_token: 'symbol_auctioning_token',
  symbol_bidding_token: 'symbol_bidding_token',
  address_auctioning_token: 'address_auctioning_token',
  address_bidding_token: 'address_bidding_token',
  decimals_auctioning_token: 'decimals_auctioning_token',
  decimals_bidding_token: 'decimals_bidding_token',
  end_time_timestamp: 'end_time_timestamp',
  order_cancellation_end_date: 'order_cancellation_end_date',
  starting_time_stamp: 'starting_time_stamp',
  minimum_bidding_amount_per_order: 'minimum_bidding_amount_per_order',
  min_funding_threshold: 'min_funding_threshold',
  allow_list_manager: 'allow_list_manager',
  allow_list_signer: 'allow_list_signer',
  current_volume: 'current_volume',
  current_clearing_order_sell_amount: 'current_clearing_order_sell_amount',
  current_clearing_order_buy_amount: 'current_clearing_order_buy_amount',
  current_clearing_price: 'current_clearing_price',
  current_bidding_amount: 'current_bidding_amount',
  is_atomic_closure_allowed: 'is_atomic_closure_allowed',
  is_private_auction: 'is_private_auction',
  interest_score: 'interest_score',
  usd_amount_traded: 'usd_amount_traded',
  chain_id: 'chain_id'
};

exports.Prisma.OrdersScalarFieldEnum = {
  created_at: 'created_at',
  auction_id: 'auction_id',
  sell_amount: 'sell_amount',
  buy_amount: 'buy_amount',
  user_id: 'user_id',
  price: 'price',
  volume: 'volume',
  timestamp: 'timestamp',
  transactionHash: 'transactionHash'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  address: 'address'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  tx: 'tx',
  account: 'account'
};

exports.Prisma.TransfersScalarFieldEnum = {
  trx_hash: 'trx_hash',
  created_at: 'created_at',
  chain_id: 'chain_id',
  token: 'token',
  from: 'from',
  to: 'to',
  type: 'type',
  amount: 'amount'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  auction_details: 'auction_details',
  orders: 'orders',
  users: 'users',
  session: 'session',
  transfers: 'transfers'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
