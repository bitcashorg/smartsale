import { ReactNode } from 'react';

import { createConfig, WagmiProvider } from 'wagmi';
import { eosEvmTestnet } from 'smartsale-chains'
import { injected, safe, walletConnect } from 'wagmi/connectors'
import { http } from 'viem';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getSiteUrl } from '@/lib/utils';

const queryClient = new QueryClient()

const wagmiConfig = createConfig({
  chains: [{network: "eosevmtestnet",...eosEvmTestnet}],
  connectors: [
    walletConnect({ 
      projectId: "25a868c834c1003aa0f0b69aba0ae056",
      metadata:{
      name: 'Bitcash Launchpad Faucet',
      description: 'Bitcash Launchpad Faucet',
      url: getSiteUrl(), // origin must match your domain & subdomain
      icons: ['https://avatars.githubusercontent.com/u/37784886']
    }
    }),
    injected(),
    safe(),
  ],
   transports: {
    [eosEvmTestnet.id]: http(),
  },
})

export function Providers({children}:{children: ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
          {children}
      </WagmiProvider>
    </QueryClientProvider>
  )
}
