import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Toaster } from 'react-hot-toast'

import '@/app/globals.css'
import { ErrorModal } from '@/components/error-modal'
import { Header } from '@/components/header'
import { Providers } from '@/components/providers'
import { cn } from '@/lib/utils'
import '@rainbow-me/rainbowkit/styles.css'
import React from 'react'

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
          <ErrorModal />
          {/* <TailwindIndicator /> */}
        </Providers>
      </body>
    </html>
  )
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
