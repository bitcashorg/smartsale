'use client'

import { TooltipProvider } from '@/components/ui/tooltip'
import { SessionProvider } from '@/hooks/use-session'
import {
  RainbowKitProvider,
  Theme,
  getDefaultConfig,
  lightTheme
} from '@rainbow-me/rainbowkit'
import {
  metaMaskWallet,
  trustWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { WagmiProvider } from 'wagmi'
import { UseSigningRequestProvider } from '@/hooks/use-signing-request'
import { merge } from 'lodash'
import { MobileNavProvider } from '@/hooks/use-mobile-navigation'
import { _chains } from '@rainbow-me/rainbowkit/dist/config/getDefaultConfig'
import {
  sepolia,
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
  harmonyOne
} from 'wagmi/chains'
import { eosEvmTestnet } from 'app-env'
import { appConfig } from '@/lib/config'

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
  harmonyOne
]
const devChains: _chains = [eosEvmTestnet, sepolia]

export const wagmiConfig = getDefaultConfig({
  appName: 'Bitlauncher',
  projectId: '25a868c834c1003aa0f0b69aba0ae056',
  wallets: [
    {
      groupName: 'Popular',
      wallets: [metaMaskWallet, trustWallet, walletConnectWallet]
    }
  ],
  chains: [...prodChains, ...devChains]
})

const customRainbowKitTheme = merge(lightTheme(), {
  colors: {
    connectButtonBackground: '#fff',
    connectButtonInnerBackground: '#fff',
    connectButtonText: '#000'
  },
  radii: {
    actionButton: '9999px', // Custom radius for action buttons,
    connectButton: '9999px' // Custom radius for action buttons
  }
  // fonts: {
  //   body: '...'
  // }
} as Theme)

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
                appName: 'Bitlauncher'
              }}
            >
              <SessionProvider>
                <UseSigningRequestProvider>
                  <MobileNavProvider>{children}</MobileNavProvider>
                </UseSigningRequestProvider>
              </SessionProvider>
            </RainbowKitProvider>
          </WagmiProvider>
        </QueryClientProvider>
      </TooltipProvider>
    </NextThemesProvider>
  )
}
