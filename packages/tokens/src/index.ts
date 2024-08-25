import type { Token } from './types'
export * from './types'
export * from './eos'
export * from './evm'
export * from './solana'

import { antelopeTokens } from './eos'
import { evmTokens } from './evm'
import { solanaTokens } from './solana'

export const tokens: Token[] = [
  ...antelopeTokens,
  ...evmTokens,
  ...solanaTokens,
]
