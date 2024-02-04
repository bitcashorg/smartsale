import { Chain } from "viem";

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
};

export const smartsaleChainsTestnet = [eosEvmTestnet]
export const smartsaleChainsMainnet = []