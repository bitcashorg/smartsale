import { info } from 'console'
import { random, times } from 'lodash'
import { Address } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

//TODO: add cofig validation
export const appenv = {
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
  },
}

// Viem/AbiType/Wagmi is the toolset

// MINIMAL

// Patterns

// Abis
// - On EVM you need to get ABIs type at dev type, there's no standard rpc endpoint for that
// - you also need to know the address and chainId of an asset
//  - with ERC20 you can get symbol and decimals, but you can optimize at build time some times

// Objects
// Chain:
//  chain_id:
//  chain_type: evm | eos

// Contract
// - getContract with Viem gives functions and types (autogenerates like abitype)?

// Tokens

// random:
// - create visualization of types and utils
