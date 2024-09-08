export * from './types'
export * from './antelope'
export * from './evm'
export * from './solana'
export * from './cosmos'

import { antelopeChains } from './antelope'
import { cosmosChains } from './cosmos'
import { evmChains } from './evm'
import { solanaChains } from './solana'
import type { AnyChain } from './types'

export const allChains: AnyChain[] = [
  ...antelopeChains,
  ...evmChains,
  ...solanaChains,
  ...cosmosChains,
]
