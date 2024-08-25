
export interface BaseToken {
  symbol: string
  chainName: string
  image?: string
  decimals: number
  isStable: boolean
}

export interface EVMToken extends BaseToken {
  address: string
  chainId: number
  chainType: 'evm'
}

export interface AntelopeToken extends BaseToken {
  address: string
  chainId: string
  chainType: 'antelope'
}

export interface SolanaToken extends BaseToken {
  address: string // Solana uses public key as address
  chainType: 'solana'
}

export interface CosmosToken extends BaseToken {
  denom: string // Cosmos uses denom instead of address
  chainId: string
  chainType: 'cosmos'
}

export type Token = EVMToken | AntelopeToken | SolanaToken | CosmosToken

export type ChainType = 'evm' | 'antelope' | 'solana' | 'cosmos'