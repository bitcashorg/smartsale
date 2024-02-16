
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
  users: 'users'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/gaboesquivel/Code/smartevm/apps/indexer/prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQogIGRpcmVjdFVybCA9IGVudigiRElSRUNUX1VSTCIpCn0KCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIHJvdyBsZXZlbCBzZWN1cml0eSBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2Qvcm93LWxldmVsLXNlY3VyaXR5IGZvciBtb3JlIGluZm8uCm1vZGVsIGF1Y3Rpb25fZGV0YWlscyB7CiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQogIGV4YWN0X29yZGVyX2lkICAgICAgICAgICAgICAgICAgICAgQmlnSW50CiAgc3ltYm9sX2F1Y3Rpb25pbmdfdG9rZW4gICAgICAgICAgICBTdHJpbmc/CiAgc3ltYm9sX2JpZGRpbmdfdG9rZW4gICAgICAgICAgICAgICBTdHJpbmc/CiAgYWRkcmVzc19hdWN0aW9uaW5nX3Rva2VuICAgICAgICAgICBTdHJpbmc/CiAgYWRkcmVzc19iaWRkaW5nX3Rva2VuICAgICAgICAgICAgICBTdHJpbmc/CiAgZGVjaW1hbHNfYXVjdGlvbmluZ190b2tlbiAgICAgICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50CiAgZGVjaW1hbHNfYmlkZGluZ190b2tlbiAgICAgICAgICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50CiAgZW5kX3RpbWVfdGltZXN0YW1wICAgICAgICAgICAgICAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcCg2KQogIG9yZGVyX2NhbmNlbGxhdGlvbl9lbmRfZGF0ZSAgICAgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoNikKICBzdGFydGluZ190aW1lX3N0YW1wICAgICAgICAgICAgICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDYpCiAgbWluaW11bV9iaWRkaW5nX2Ftb3VudF9wZXJfb3JkZXIgICBCaWdJbnQ/CiAgbWluX2Z1bmRpbmdfdGhyZXNob2xkICAgICAgICAgICAgICBCaWdJbnQ/CiAgYWxsb3dfbGlzdF9tYW5hZ2VyICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgYWxsb3dfbGlzdF9zaWduZXIgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgY3VycmVudF92b2x1bWUgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgY3VycmVudF9jbGVhcmluZ19vcmRlcl9zZWxsX2Ftb3VudCBCaWdJbnQ/CiAgY3VycmVudF9jbGVhcmluZ19vcmRlcl9idXlfYW1vdW50ICBCaWdJbnQ/CiAgY3VycmVudF9jbGVhcmluZ19wcmljZSAgICAgICAgICAgICBJbnQ/CiAgY3VycmVudF9iaWRkaW5nX2Ftb3VudCAgICAgICAgICAgICBCaWdJbnQ/CiAgaXNfYXRvbWljX2Nsb3N1cmVfYWxsb3dlZCAgICAgICAgICBCb29sZWFuPwogIGlzX3ByaXZhdGVfYXVjdGlvbiAgICAgICAgICAgICAgICAgQm9vbGVhbj8KICBpbnRlcmVzdF9zY29yZSAgICAgICAgICAgICAgICAgICAgIEludD8KICB1c2RfYW1vdW50X3RyYWRlZCAgICAgICAgICAgICAgICAgIEludD8KICBjaGFpbl9pZCAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZ0ludAoKICBAQGlkKFtleGFjdF9vcmRlcl9pZCwgY2hhaW5faWRdKQp9CgovLy8gVGhpcyBtb2RlbCBjb250YWlucyByb3cgbGV2ZWwgc2VjdXJpdHkgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL3Jvdy1sZXZlbC1zZWN1cml0eSBmb3IgbW9yZSBpbmZvLgptb2RlbCBvcmRlcnMgewogIGNyZWF0ZWRfYXQgICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQogIGF1Y3Rpb25faWQgICAgICBCaWdJbnQKICBzZWxsX2Ftb3VudCAgICAgQmlnSW50CiAgYnV5X2Ftb3VudCAgICAgIEJpZ0ludAogIHVzZXJfaWQgICAgICAgICBCaWdJbnQKICBwcmljZSAgICAgICAgICAgSW50PwogIHZvbHVtZSAgICAgICAgICBCaWdJbnQ/CiAgdGltZXN0YW1wICAgICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDYpCiAgdHJhbnNhY3Rpb25IYXNoIFN0cmluZyAgICBAaWQKfQoKLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgcm93IGxldmVsIHNlY3VyaXR5IGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9yb3ctbGV2ZWwtc2VjdXJpdHkgZm9yIG1vcmUgaW5mby4KbW9kZWwgdXNlcnMgewogIGlkICAgICAgICAgQmlnSW50CiAgY3JlYXRlZF9hdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpCiAgYWRkcmVzcyAgICBTdHJpbmcKCiAgQEBpZChbaWQsIGNyZWF0ZWRfYXRdKQp9Cg==",
  "inlineSchemaHash": "edba0371c13e35bfddb6bcd2a063b7cac02c2ecfd832ce42bc0bdf20d8bc7b4b",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"auction_details\":{\"dbName\":null,\"fields\":[{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exact_order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol_auctioning_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol_bidding_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_auctioning_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_bidding_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"decimals_auctioning_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"decimals_bidding_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_time_timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_cancellation_end_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"starting_time_stamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minimum_bidding_amount_per_order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min_funding_threshold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allow_list_manager\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allow_list_signer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_clearing_order_sell_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_clearing_order_buy_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_clearing_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_bidding_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_atomic_closure_allowed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_private_auction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interest_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usd_amount_traded\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"exact_order_id\",\"chain_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.\"},\"orders\":{\"dbName\":null,\"fields\":[{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auction_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sell_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buy_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.\"},\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id\",\"created_at\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

