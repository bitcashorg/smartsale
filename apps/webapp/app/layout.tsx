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
import { cookies } from 'next/headers'
import React from 'react'
// import { Toaster } from 'react-hot-toast'

const openSans = Open_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800']
})

export default async function RootLayout({ children }: RootLayoutProps) {
  // TODO: check if this techniche impacts perf or next cache
  const { viewport } = await getCookieData()
  return (
    <html
      lang="en"
      className={cn('antialiased', openSans.className)}
      suppressHydrationWarning
    >
      <body>
        <GlobalStoreProvider viewport={viewport}>
          <Providers
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {/* <Toaster /> */}
            <main className="flex flex-1 flex-col overflow-hidden">
              {children}
            </main>
            <Footer />
            <DynamicSessionDialog />
          </Providers>
        </GlobalStoreProvider>

        <GoogleAnalytics gaId="G-78N0Z7NPQJ" />
      </body>
    </html>
  )
}

async function getCookieData(): Promise<{
  viewport: string | null
}> {
  const viewport = cookies().get('viewport')?.value || null
  return new Promise(resolve =>
    setTimeout(() => {
      resolve({ viewport })
    }, 1000)
  )
}

const DynamicSessionDialog = dynamic(
  () =>
    import('../components/layout/session/session-dialog').then(
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
    absolute: 'Bitlaucher',
    template: '%s | Bitlauncher'
  },
  description:
    'Invest in the intelligent future and join the Ai/Web3 revolution now!',
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
      'Invest in the intelligent future and join the Ai/Web3 revolution now!',
    images: [
      {
        url: 'https://bitlauncher.ai/images/og-image.jpeg',
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
        url: 'https://bitlauncher.ai/images/og-image.jpeg',
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
