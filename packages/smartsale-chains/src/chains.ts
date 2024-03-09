import { Chain } from "viem";
import {sepolia} from 'viem/chains'

export const eosEvmTestnet: Chain = {
  nativeCurrency: {
    name: 'EOS',
    symbol: 'EOS',
    decimals: 18,
  },
  id: 15557,
  name: 'EOS EVM Testnet',
  rpcUrls: {
    default: {http: ['https://api.testnet.evm.eosnetwork.com/']} ,
    public: {http: ['https://api.testnet.evm.eosnetwork.com/']},
  },
  blockExplorers: {
    default: { name: 'EOS EVM Testnet Explorer', url: 'https://explorer.testnet.evm.eosnetwork.com/' },
  },
  testnet: true,
} as const

export const smartsaleChainsTestnet = [eosEvmTestnet, sepolia]
export const smartsaleChainsMainnet = []

export const smartsaleChains ={
  testnet : createMapFromId(smartsaleChainsTestnet),
  mainnet : createMapFromId(smartsaleChainsMainnet),
} as const

function createMapFromId(items: Chain[]): Map<number, Chain> {
    const mapFromId = new Map<number, Chain>();

    items.forEach(item => {
        mapFromId.set(item.id, item);
    });

    return mapFromId;
}
