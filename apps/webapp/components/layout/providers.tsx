'use client'

import { TooltipProvider } from '@/components/ui/tooltip'
import { SessionProvider } from '@/hooks/use-session'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { eosEvmTestnet } from 'app-env'
import { WagmiProvider } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { UseSigningRequestProvider } from '@/hooks/use-signing-request'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'
import { cookieStorage, createStorage } from 'wagmi'
import { ReactNode } from 'react'

const queryClient = new QueryClient()

export const wagmiConfig = defaultWagmiConfig({
  metadata: {
    name: 'Bitlauncher',
    description: 'Get early access to global ai unicorns.',
    url: 'https://bitlauncher.ai',
    icons: ['https://bitlauncher.ai/favicon-16x16.png']
  },
  projectId: '25a868c834c1003aa0f0b69aba0ae056',
  chains: [{ ...eosEvmTestnet, fees: undefined }, sepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
})

createWeb3Modal({
  wagmiConfig,
  projectId: '25a868c834c1003aa0f0b69aba0ae056'
})

export function Providers({
  children,
  initialState,
  ...props
}: ProvidersProps) {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>
        <QueryClientProvider client={queryClient}>
          <WagmiProvider config={wagmiConfig} initialState={initialState}>
            <SessionProvider>
              <UseSigningRequestProvider>{children}</UseSigningRequestProvider>
            </SessionProvider>
          </WagmiProvider>
        </QueryClientProvider>
      </TooltipProvider>
    </NextThemesProvider>
  )
}

interface ProvidersProps {
  children: ReactNode
  initialState: any
  [key: string]: any
}
