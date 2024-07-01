import '@/app/globals.css'
import Footer from '@/components/layout/footer/footer'
import { Header } from '@/components/layout/header/header'
import { Providers } from '@/components/layout/providers'
import { GlobalStoreProvider } from '@/hooks/use-global-store'
import { cn } from '@/lib/utils'
import { GoogleAnalytics } from '@next/third-parties/google'
import '@rainbow-me/rainbowkit/styles.css'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Open_Sans } from 'next/font/google'
import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { locales } from '@/dictionaries/locales'
import { Analytics } from '@vercel/analytics/react'
import { CommonPageParams } from '@/types/routing.type'
import { getDictionary } from '@/dictionaries'

const openSans = Open_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800']
})

export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {
  const dict = await getDictionary(params.lang)
  return (
    <html
      lang={params.lang || 'en'}
      className={cn('antialiased', openSans.className)}
      suppressHydrationWarning
    >
      <body>
        <GlobalStoreProvider>
          <Providers
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header lang={params.lang} dict={dict} />
            {/* <Toaster /> */}
            <main className="flex flex-col flex-1">{children}</main>
            <Footer params={params} />
            <DynamicSessionDialog />
          </Providers>
        </GlobalStoreProvider>

        <GoogleAnalytics gaId="G-78N0Z7NPQJ" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

// generate static routes for a given set of locales,
export async function generateStaticParams() {
  return locales.map(lang => ({ lang }))
}

const DynamicSessionDialog = dynamic(
  () =>
    import('../../../components/layout/session/session-dialog').then(
      mod => mod.SessionDialog
    ),
  {
    ssr: false
  }
)

interface RootLayoutProps {
  children: React.ReactNode
  params: CommonPageParams
}

export const metadata: Metadata = {
  title: {
    absolute: 'Bitlauncher',
    template: '%s | Bitlauncher'
  },
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!',
  metadataBase: new URL('https://bitlauncher.ai'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/'
    }
  },
  openGraph: {
    type: 'website',
    url: 'https://bitlauncher.ai',
    title: 'bitlauncher',
    description:
      'Be part of the intelligent future and join the Ai/Web3 revolution now!',
    images: [
      {
        url: 'https://bitlauncher.ai/images/og-image.webp',
        alt: 'bitlauncher'
      }
    ]
  },
  twitter: {
    creator: 'bitlauncher',
    site: '@bitlauncher',
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bitlauncher.ai/images/og-image.webp',
        alt: 'bitlauncher'
      }
    ]
  },
  robots: 'index, search',
  keywords: [
    'bitlauncher',
    'smartsale',
    'ai',
    'web3',
    'crypto',
    'investment',
    'auction',
    'marketplace',
    'platform',
    'launchpad',
    'launch',
    'pad',
    'launching',
    'launching'
  ]
}
