import { ReactNode } from 'react';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {  Chain, configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';


const eosEvmTestnet : Chain = {
  network: 'eos',
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

const { chains, publicClient } = configureChains(
  [eosEvmTestnet], [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Bitcash USDT Faucet',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


export function Providers({children}:{children: ReactNode}) {

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
