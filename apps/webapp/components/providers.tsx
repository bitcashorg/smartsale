'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { TooltipProvider } from '@/components/ui/tooltip'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { GlobalDataProvider } from '@/hooks/use-global-data'
import { SessionProvider } from '@/hooks/use-session'
import { sepolia } from 'wagmi/chains'
import { eosEvmTestnet } from 'smartsale-env'
import { SignatureRequestProvider } from './esr-dialog'
import { useLocation } from 'react-use'
import { useEffect } from 'react'

const queryClient = new QueryClient()

export const wagmiConfig = getDefaultConfig({
  appName: 'bitLauncher',
  projectId: 'YOUR_PROJECT_ID',
  chains: [{ ...eosEvmTestnet, fees: undefined }, sepolia]
})

export function Providers({ children, ...props }: ThemeProviderProps) {
  const location = useLocation()

  useEffect(() => {
    window.parent &&
      window.parent.postMessage(
        {
          eventType: 'url_change',
          pathname: location.pathname,
          search: location.search
        },
        '*' //TODO: restrict to app.bitcash.org
      )
  }, [location])

  return (
    <SessionProvider>
      <NextThemesProvider {...props}>
        <GlobalDataProvider>
          <TooltipProvider>
            <QueryClientProvider client={queryClient}>
              <SignatureRequestProvider>
                <WagmiProvider config={wagmiConfig}>
                  <RainbowKitProvider>{children}</RainbowKitProvider>
                </WagmiProvider>
              </SignatureRequestProvider>
            </QueryClientProvider>
          </TooltipProvider>
        </GlobalDataProvider>
      </NextThemesProvider>
    </SessionProvider>
  )
}
