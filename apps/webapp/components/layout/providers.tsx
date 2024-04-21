'use client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { TooltipProvider } from '@/components/ui/tooltip'
import { SessionProvider } from '@/hooks/use-session'
import {
  RainbowKitProvider,
  Theme,
  getDefaultConfig,
  lightTheme
} from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { useEffect } from 'react'
import { useLocation } from 'react-use'
import { eosEvmTestnet } from 'smartsale-env'
import { WagmiProvider } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { UseSigningRequestProvider } from '@/hooks/use-signing-request'
import { merge } from 'lodash'

const queryClient = new QueryClient()

export const wagmiConfig = getDefaultConfig({
  appName: 'Bitlauncher',
  projectId: '25a868c834c1003aa0f0b69aba0ae056',
  // @ts-ignore
  chains: [{ ...eosEvmTestnet, fees: undefined }, sepolia]
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
  const location = useLocation()

  // part of bitcash app explorer feature
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

  // vconsole for debugging in preview envs
  useEffect(() => {
    const isProd = process.env.NEXT_PUBLIC_APP_ENV === 'prod'
    async function loadVConsoleModule() {
      await import('@/lib/devtools')
    }

    !isProd && loadVConsoleModule()
  }, [])

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
                  <GoogleReCaptchaProvider
                    reCaptchaKey={
                      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''
                    }
                    // language="[optional_language]"
                    container={{
                      parameters: {
                        badge: 'inline', //'[inline|bottomright|bottomleft]', // optional, default undefined
                        theme: 'dark' // optional, default undefined
                      }
                    }}
                  >
                    {children}
                  </GoogleReCaptchaProvider>
                </UseSigningRequestProvider>
              </SessionProvider>
            </RainbowKitProvider>
          </WagmiProvider>
        </QueryClientProvider>
      </TooltipProvider>
    </NextThemesProvider>
  )
}
