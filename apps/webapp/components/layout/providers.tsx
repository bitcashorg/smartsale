'use client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { TooltipProvider } from '@/components/ui/tooltip'
import { SessionProvider } from '@/hooks/use-session'
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { useEffect } from 'react'
import { useLocation } from 'react-use'
import { eosEvmTestnet } from 'smartsale-env'
import { WagmiProvider } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { Transition } from '../shared/transition'
import { UseSigningRequestProvider } from '@/hooks/use-signing-request'

const queryClient = new QueryClient()

export const wagmiConfig = getDefaultConfig({
  appName: 'Bitlauncher',
  projectId: 'YOUR_PROJECT_ID',
  // @ts-ignore
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
          <SessionProvider>
            <WagmiProvider config={wagmiConfig}>
              <RainbowKitProvider>
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
                    <Transition> {children}</Transition>
                  </GoogleReCaptchaProvider>
                </UseSigningRequestProvider>
              </RainbowKitProvider>
            </WagmiProvider>
          </SessionProvider>
        </QueryClientProvider>
      </TooltipProvider>
    </NextThemesProvider>
  )
}
