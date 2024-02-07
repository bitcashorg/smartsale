import { ReactNode } from 'react';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {  configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {eosEvmTestnet} from 'smartsale-chains'

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
