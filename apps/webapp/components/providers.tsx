'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { TooltipProvider } from '@/components/ui/tooltip'
import { WagmiProvider } from 'wagmi'
import { eosEvmTestnet } from 'smartsale-chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { GlobalDataProvider } from '@/hooks/use-global-data'
const queryClient = new QueryClient()

export const wagmiConfig = getDefaultConfig({
  appName: 'Bitcash Launchpad',
  projectId: 'YOUR_PROJECT_ID',
  chains: [{ ...eosEvmTestnet, fees: undefined }]
})

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <GlobalDataProvider>
        <TooltipProvider>
          <QueryClientProvider client={queryClient}>
            <WagmiProvider config={wagmiConfig}>
              <RainbowKitProvider>{children}</RainbowKitProvider>
            </WagmiProvider>
          </QueryClientProvider>
        </TooltipProvider>
      </GlobalDataProvider>
    </NextThemesProvider>
  )
}
