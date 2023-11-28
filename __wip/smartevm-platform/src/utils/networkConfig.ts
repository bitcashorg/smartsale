import {
  Chain,
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  gnosis,
  goerli,
  mainnet,
  polygon,
  polygonMumbai,
  sepolia,
} from 'wagmi/chains'

const eosevmTestnet = {
  id: 15557,
  name: 'EOS EVM Testnet',
  network: 'eosnetwork',
  nativeCurrency: {
    decimals: 4,
    name: 'EOS',
    symbol: 'EOS',
  },
  rpcUrls: {
    public: { http: ['https://api.testnet.evm.eosnetwork.com	'] },
    default: { http: ['https://api.testnet.evm.eosnetwork.com	'] },
  },
  blockExplorers: {
    etherscan: { name: 'EOS EVM Scan', url: 'https://explorer.testnet.evm.eosnetwork.com/' },
    default: { name: 'EOS EVM Scan', url: 'https://explorer.testnet.evm.eosnetwork.com/' },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      // blockCreated: 11_907_934,
    },
  },
} as const satisfies Chain

export {
  gnosis,
  goerli,
  mainnet,
  polygon,
  polygonMumbai,
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  sepolia,
  eosevmTestnet,
}
export type { Chain }

export enum ChainId {
  MAINNET = 1,
  GÖRLI = 5,
  BSC = 56,
  BSCTESTNET = 97,
  XDAI = 100,
  MATIC = 137,
  MUMBAI = 80001,
  AVALANCHE = 43114,
  FUJI = 43113,
  EOSEVM_TESTNET = 15557,
}

export const NETWORK_CONFIGS: {
  [chainId in ChainId]: Chain
} = {
  [mainnet.id]: mainnet,
  [goerli.id]: goerli,
  [gnosis.id]: gnosis,
  [polygon.id]: polygon,
  [polygonMumbai.id]: polygonMumbai,
  [bsc.id]: bsc,
  [bscTestnet.id]: bscTestnet,
  [avalanche.id]: avalanche,
  [avalancheFuji.id]: avalancheFuji,
  [eosevmTestnet.id]: eosevmTestnet,
}
