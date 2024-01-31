'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { TooltipProvider } from '@/components/ui/tooltip'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { smartsaleChainsTestnet } from 'smartsale-chains'

const { chains, publicClient } = configureChains(
  smartsaleChainsTestnet,
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Bitcash USDT Faucet',
  projectId: '25a868c834c1003aa0f0b69aba0ae056',
  chains
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
        </WagmiConfig>
      </TooltipProvider>
    </NextThemesProvider>
  )
}
