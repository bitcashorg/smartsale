import { Toaster } from 'react-hot-toast'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import '@/app/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { cn } from '@/lib/utils'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Toaster />
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen bg-muted/50">
            <Header />
            <main className="container flex flex-col flex-1 py-5">
              {children}
            </main>
          </div>
          {/* <TailwindIndicator /> */}
        </Providers>
      </body>
    </html>
  )
}

export const metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    default: 'smartevm',
    template: `%s - smartevm`
  },
  description: 'Specialized AI chatbots',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}
