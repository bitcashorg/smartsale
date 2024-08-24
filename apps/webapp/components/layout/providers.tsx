'use client'

import { TooltipProvider } from '@/components/ui/tooltip'
import { MobileNavProvider } from '@/hooks/use-mobile-navigation'
import { SessionProvider } from '@/hooks/use-session'
import { UseSigningRequestProvider } from '@/hooks/use-signing-request'
import { appConfig } from '@/lib/config'
import {
  RainbowKitProvider,
  type Theme,
  getDefaultConfig,
  lightTheme,
} from '@rainbow-me/rainbowkit'
import type { _chains } from '@rainbow-me/rainbowkit/dist/config/getDefaultConfig'
import {
  metaMaskWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { eosEvmTestnet } from 'app-env'
import { merge } from 'lodash'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import { WagmiProvider } from 'wagmi'
import {
  arbitrum,
  aurora,
  avalanche,
  base,
  bsc,
  celo,
  cronos,
  fantom,
  gnosis,
  harmonyOne,
  kava,
  mainnet,
  metis,
  moonbeam,
  optimism,
  polygon,
  sepolia,
  zkSync,
} from 'wagmi/chains'
import multibase, { MultibaseProvider } from "@multibase/js"

const queryClient = new QueryClient()

const prodChains: _chains = [
  arbitrum,
  avalanche,
  base,
  celo,
  mainnet,
  optimism,
  polygon,
  zkSync,
  bsc,
  fantom,
  moonbeam,
  cronos,
  kava,
  metis,
  gnosis,
  aurora,
  harmonyOne,
]
const devChains: _chains = [eosEvmTestnet, sepolia]

export const wagmiConfig = getDefaultConfig({
  appName: 'Bitlauncher',
  projectId: '25a868c834c1003aa0f0b69aba0ae056',
  wallets: [
    {
      groupName: 'Popular',
      wallets: [metaMaskWallet, trustWallet, walletConnectWallet],
    },
  ],
  chains: [...prodChains, ...devChains],
})

const customRainbowKitTheme = merge(lightTheme(), {
  colors: {
    connectButtonBackground: '#fff',
    connectButtonInnerBackground: '#fff',
    connectButtonText: '#000',
  },
  radii: {
    actionButton: '9999px', // Custom radius for action buttons,
    connectButton: '9999px', // Custom radius for action buttons
  },
  // fonts: {
  //   body: '...'
  // }
} as Theme)

if (typeof window !== 'undefined') {
  const multibaseKey = appConfig.multibase.key

  if (!multibaseKey) {
    console.error('Missing MULTIBASE_API_KEY')
  } else {
    multibase.init(multibaseKey)
    console.info('Multibase Initialized')
  }
}

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>
        <QueryClientProvider client={queryClient}>
          <WagmiProvider config={wagmiConfig}>
            <RainbowKitProvider
              theme={customRainbowKitTheme}
              modalSize="compact"
              showRecentTransactions={true}
              appInfo={{
                appName: 'Bitlauncher',
              }}
            >
              <MultibaseProvider client={multibase}>
                <SessionProvider>
                  <UseSigningRequestProvider>
                    <MobileNavProvider>{children}</MobileNavProvider>
                  </UseSigningRequestProvider>
                </SessionProvider>
              </MultibaseProvider>
            </RainbowKitProvider>
          </WagmiProvider>
        </QueryClientProvider>
      </TooltipProvider>
    </NextThemesProvider>
  )
}
