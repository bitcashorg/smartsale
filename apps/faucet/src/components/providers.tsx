import { ReactNode } from 'react';

import { WagmiProvider } from 'wagmi';
import { eosEvmTestnet } from 'smartsale-chains'
import { http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { HttpTransport } from 'viem';

const queryClient = new QueryClient()

export const wagmiConfig = getDefaultConfig({
  appName: 'Bitcash Launchpad',
  projectId: 'YOUR_PROJECT_ID',
  chains: [{ ...eosEvmTestnet, fees: undefined }],
  transports: {
    [eosEvmTestnet.id]: http() as HttpTransport
  }
})

export function Providers({children}:{children: ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
          <RainbowKitProvider>{children}</RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  )
}
