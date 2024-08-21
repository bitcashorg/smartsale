import { Address } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { smartsaleEnv } from 'app-env'

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
    alchemySecretKey: process.env.ALCHEMY_SECRET_KEY || '',
  },
  ...smartsaleEnv.test,
}
