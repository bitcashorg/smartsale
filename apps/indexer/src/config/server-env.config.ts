import { BitcashEnv } from "bitcash-env";

export const serverEnv = {
  env: process.env.ENVIRONMENT as BitcashEnv || 'local',
  port: process.env.PORT || '',
  hostname: process.env.HOSTNAME || '',
  dfuse: {
    apiKey: process.env.DFUSE_API_KEY || '',
    rpc: process.env.DFUSE_API_RPC || '',
  },
  contracts: {
    all: (process.env.WHITELIST_CONTRACTS || '').split(',') || [],
    development: (process.env.WHITELIST_DEV_CONTRACTS || '').split(',') || [],
    production: (process.env.WHITELIST_PROD_CONTRACTS || '').split(',') || [],
  },
  actions: (process.env.WHITELIST_ACTIONS || '').split(',') || [],
  db: {
    connectionString: process.env.INDEXER_DB_CONNECTION_STRING || '',
    adminSecret: process.env.BITCASH_DB_ADMIN_SECRET || '',
  },
  features: {
    sentry: process.env.SENTRY_DSN || '',
    cancelP2P: {
      prod: {
        keys: ((process.env.WORKER_PROD_P2P_KEYS || '').split(',') || []) as string[],
        account: process.env.WORKER_PROD_P2P_ACCOUNT || '',
        permission: process.env.WORKER_PROD_P2P_PERMISSION || '',
      },
      test: {
        keys: ((process.env.WORKER_TEST_P2P_KEYS || '').split(',') || []) as string[],
        account: process.env.WORKER_TEST_P2P_ACCOUNT || '',
        permission: process.env.WORKER_TEST_P2P_PERMISSION || '',
      },
      local: {
        keys: ((process.env.WORKER_TEST_P2P_KEYS || '').split(',') || []) as string[],
        account: process.env.WORKER_TEST_P2P_ACCOUNT || '',
        permission: process.env.WORKER_TEST_P2P_PERMISSION || '',
      },
    },
  }
}