import { devContracts, prodContracts } from "app-contracts";
import { Chain } from "viem";

export const eosEvmTestnet: Chain = {
  nativeCurrency: {
    name: "EOS",
    symbol: "EOS",
    decimals: 18,
  },
  id: 15557,
  name: "EOS EVM Testnet",
  rpcUrls: {
    default: { http: ["https://api.testnet.evm.eosnetwork.com/"] },
    public: { http: ["https://api.testnet.evm.eosnetwork.com/"] },
  },
  blockExplorers: {
    default: {
      name: "EOS EVM Testnet Explorer",
      url: "https://explorer.testnet.evm.eosnetwork.com/",
    },
  },
  testnet: true,
};

const prodChains: Chain[] = prodContracts.tokens.evm.map(t => t.chain)
const testChains: Chain[] = devContracts.tokens.evm.map(t => t.chain).concat([eosEvmTestnet])

export const appChains = {
  dev: createMapFromId(prodChains),
  prod: createMapFromId(testChains),
} as const;

function createMapFromId(items: Chain[]): Map<number, Chain> {
  return new Map<number, Chain>(items.map(item => [item.id, item]));
}
