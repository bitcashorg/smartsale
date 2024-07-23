import '@/app/globals.css'
import Footer from '@/components/layout/footer/footer'
import { Header } from '@/components/layout/header'
import { Providers, wagmiConfig } from '@/components/layout/providers'
import { cn } from '@/lib/utils'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { locales } from '@/dictionaries/locales'
import { Analytics } from '@vercel/analytics/react'
import { CommonPageParams } from '@/types/routing.type'
import { getDictionary } from '@/dictionaries'
import type { Viewport } from 'next'
import { isMobile } from 'react-device-detect'
import { Toaster } from 'react-hot-toast'
import '../../globals.css'
import { cookieToInitialState } from 'wagmi'
import { headers } from 'next/headers'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {
  const dict = await getDictionary(params.lang)
  const initialState = cookieToInitialState(
    wagmiConfig,
    headers().get('cookie')
  )
  return (
    <html
      lang={params.lang || 'en'}
      className={cn('tk-futura-pt max-w-full text-lg antialiased')}
      suppressHydrationWarning
      style={{ width: '100vw', maxWidth: '100vw' }}
    >
      <body style={{ width: '100vw', maxWidth: '100vw' }}>
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          initialState={initialState}
        >
          <Header lang={params.lang} dict={dict} />
          <Toaster />
          <main
            className={cn(
              'flex w-full max-w-[100vw] flex-1 flex-col',
              isMobile && 'overflow-hidden'
            )}
          >
            {children}
          </main>
          <Footer params={params} />
          <DynamicSessionDialog />
        </Providers>

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
