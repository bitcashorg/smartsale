import type { Address } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

export const appenv = {
  eosEvmApi: 'https://api.testnet.evm.eosnetwork.com',
  issuerKey: process.env.ISSUER_KEY || '',
  issuerAddress: (process.env.ISSUER_ADDRESS || '') as Address,
  issuerAccount: privateKeyToAccount(`0x${process.env.ISSUER_KEY}`),
}
