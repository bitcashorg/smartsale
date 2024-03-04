import { Address } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

//TODO: add cofig validation
export const appenv = {
  sentry: {
    dsn: process.env.SENTRY_DSN || '',
  },
  evm: {
    eosApi: 'https://api.testnet.evm.eosnetwork.com',
    sepoliaApi: process.env.SEPOLIA_RPC || '',
    issuerKey: process.env.ISSUER_KEY || '',
    issuerAddress: (process.env.ISSUER_ADDRESS || '') as Address,
    issuerAccount: privateKeyToAccount(`0x${process.env.ISSUER_KEY}`),
  },
}
