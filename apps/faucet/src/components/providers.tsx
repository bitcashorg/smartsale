import { ReactNode } from 'react';

import { createConfig, WagmiProvider } from 'wagmi';
import { eosEvmTestnet } from 'smartsale-chains'
import { walletConnect } from 'wagmi/connectors'
import { http } from 'viem';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const wagmiConfig = createConfig({
  chains: [eosEvmTestnet],
  connectors: [
    walletConnect({ 
      projectId: "25a868c834c1003aa0f0b69aba0ae056",   
      // metadata: { 
      //   name: 'SmartSale Faucet', 
      //   description: 'SmartSale Faucet'
      // }
    }),
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
