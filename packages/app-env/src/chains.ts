import type { Chain } from 'viem'
import {
  arbitrum,
  aurora,
  avalanche,
  base,
  bsc,
  celo,
  cronos,
  fantom,
  gnosis,
  harmonyOne,
  kava,
  mainnet,
  metis,
  moonbeam,
  optimism,
  polygon,
  sepolia,
  zkSync,
} from 'viem/chains'

export const eosEvmTestnet: Chain = {
  nativeCurrency: {
    name: 'EOS',
    symbol: 'EOS',
    decimals: 18,
  },
  id: 15557,
  name: 'EOS EVM Testnet',
  rpcUrls: {
    default: { http: ['https://api.testnet.evm.eosnetwork.com/'] },
    public: { http: ['https://api.testnet.evm.eosnetwork.com/'] },
  },
  blockExplorers: {
    default: {
      name: 'EOS EVM Testnet Explorer',
      url: 'https://explorer.testnet.evm.eosnetwork.com/',
    },
  },
  testnet: true,
}

const prodChains: Chain[] = [
  arbitrum,
  avalanche,
  base,
  celo,
  mainnet,
  optimism,
  polygon,
  zkSync,
  bsc,
  fantom,
  moonbeam,
  cronos,
  kava,
  metis,
  gnosis,
  aurora,
  harmonyOne,
]
const devChains: Chain[] = [eosEvmTestnet, sepolia]

// note: use .entries() to get an array
export const appChains = {
  dev: createMapFromId(devChains),
  prod: createMapFromId(prodChains),
} as const

function createMapFromId(items: Chain[]): Map<number, Chain> {
  const mapFromId = new Map<number, Chain>()

  items.forEach((item) => mapFromId.set(item.id, item))

  return mapFromId
}
