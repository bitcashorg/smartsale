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

export default async function RootLayout({ children }: RootLayoutProps) {
  const { viewport } = await getCookieData()
  console.log('RootLayout', { viewport })
  return (
    <html lang="en" className={cn('antialiased', openSans.className)}>
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
            <main className="flex flex-col flex-1">{children}</main>
            <Footer />
          </Providers>
          <DynamicLoginDialog />
        </GlobalStoreProvider>

        <GoogleAnalytics gaId="G-78N0Z7NPQJ" />
      </body>
    </html>
  )
}

const openSans = Open_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800']
})

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

const DynamicLoginDialog = dynamic(
  () =>
    import('../components/layout/session/login-dialog').then(
      mod => mod.LoginDialog
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
