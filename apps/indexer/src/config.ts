import { smartsaleEnv } from 'app-env'
import type { Address } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

export const appConfig = {
  sentry: {
    dsn: process.env.SENTRY_DSN || '',
  },
  eos: {
    dfuseKey: process.env.DFUSE_API_KEY || '',
  },
  evm: {
    eosApi: 'https://api.testnet.evm.eosnetwork.com',
    sepoliaApi: process.env.SEPOLIA_RPC || '',
    issuerKey: process.env.ISSUER_KEY || '',
    issuerAddress: (process.env.ISSUER_ADDRESS || '') as Address,
    issuerAccount: privateKeyToAccount(`0x${process.env.ISSUER_KEY}`),
    alchemy: {
      activitySigningKey: process.env.ALCHEMY_ACTIVITY_SIGNING_KEY || '',
    },
  },
  ...smartsaleEnv.test,
}
