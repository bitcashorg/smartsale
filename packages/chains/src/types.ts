import type { Chain as ViemChain } from 'viem'

export type ChainType = 'evm' | 'antelope' | 'solana' | 'cosmos'

export type EVMChain = ViemChain

// NOTE: work in progress to support all chains
export type AnyChain = EVMChain | AntelopeChain | SolanaChain

export type SolanaChain = {
  network: string
  name: string
  rpcUrl: string
  explorerUrl: string
}

export type CosmosChain = {
  chainId: string
  name: string
  rpcUrl: string
  explorerUrl: string
}

export type AntelopeChain = {
  chainId: string
  name: string
  rpcUrl: string
  explorerUrl: string
}
