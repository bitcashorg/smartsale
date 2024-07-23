import { ReactNode } from "react";

import { WagmiProvider } from "wagmi";
import { eosEvmTestnet } from "app-env";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { sepolia } from "wagmi/chains";

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'

const queryClient = new QueryClient()

export const wagmiConfig = defaultWagmiConfig({
  metadata: {
    name: 'Bitlauncher',
    description: 'A platform for launching blockchain projects',
    url: 'https://bitlauncher.com',
    icons: ['https://bitlauncher.com/icon.png']
  },
  projectId: '25a868c834c1003aa0f0b69aba0ae056',
  chains: [{ ...eosEvmTestnet, fees: undefined }, sepolia]
})

createWeb3Modal({
  wagmiConfig,
  projectId: '25a868c834c1003aa0f0b69aba0ae056'
})

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        {children}
      </WagmiProvider>
    </QueryClientProvider>
  );
}
