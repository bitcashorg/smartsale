import '@/app/globals.css'
import { Footer } from '@/components/layout/footer/footer'
import { Header } from '@/components/layout/header'
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
// import { Toaster } from 'react-hot-toast'

const openSans = Open_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800']
})

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
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
            <Header />
            {/* <Toaster /> */}
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
            <DynamicSessionDialog />
          </Providers>
        </GlobalStoreProvider>

        <GoogleAnalytics gaId="G-78N0Z7NPQJ" />
        <SpeedInsights />
      </body>
    </html>
  )
}

const DynamicSessionDialog = dynamic(
  () =>
    import('../../components/layout/session/session-dialog').then(
      mod => mod.SessionDialog
    ),
  {
    ssr: false
  }
)

interface RootLayoutProps {
  children: React.ReactNode
  params: { project: string }
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
