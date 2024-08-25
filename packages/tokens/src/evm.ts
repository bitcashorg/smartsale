import type { EVMToken } from './types'

const baseTokens = [
  {
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    chainId: 1,
    symbol: 'USDT',
    chainName: 'Ethereum',
  },
  {
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    chainId: 1,
    symbol: 'USDC',
    chainName: 'Ethereum',
  },
  {
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    chainId: 137,
    symbol: 'USDT',
    chainName: 'Polygon',
  },
  {
    address: '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359',
    chainId: 137,
    symbol: 'USDC',
    chainName: 'Polygon',
  },
  {
    address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    chainId: 42161,
    symbol: 'USDT',
    chainName: 'Arbitrum',
  },
  {
    address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    chainId: 42161,
    symbol: 'USDC',
    chainName: 'Arbitrum',
  },
  {
    address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    chainId: 10,
    symbol: 'USDT',
    chainName: 'Optimism',
  },
  {
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    chainId: 10,
    symbol: 'USDC',
    chainName: 'Optimism',
  },
  {
    address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
    chainId: 8453,
    symbol: 'USDT',
    chainName: 'Base',
  },
  {
    address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    chainId: 8453,
    symbol: 'USDC',
    chainName: 'Base',
  },
  {
    address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
    chainId: 43114,
    symbol: 'USDT',
    chainName: 'Avalanche',
  },
  {
    address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    chainId: 43114,
    symbol: 'USDC',
    chainName: 'Avalanche',
  },
  {
    address: '0x55d398326f99059fF775485246999027B3197955',
    chainId: 56,
    symbol: 'USDT',
    chainName: 'BNB Chain',
  },
  {
    address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    chainId: 56,
    symbol: 'USDC',
    chainName: 'BNB Chain',
  },
]

export const evmTokens: EVMToken[] = baseTokens.map((token) => ({
  ...token,
  chainType: 'evm',
  // On BNB Chain (chainId 56), both USDT and USDC are implemented with 18 decimal places instead of the usual 6.
  decimals: token.chainId === 56 ? 18 : 6,
  isStable: true,
}))
