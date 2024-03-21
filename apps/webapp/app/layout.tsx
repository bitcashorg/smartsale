import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Toaster } from 'react-hot-toast'

import '@/app/globals.css'
import { ErrorModal } from '@/components/pages/dialogs/error-dialog'
import { Header } from '@/components/layout/header'
import { Newsletter } from '@/components/pages/home/newletter'
import { Providers } from '@/components/providers'
import { cn } from '@/lib/utils'
import '@rainbow-me/rainbowkit/styles.css'
import React from 'react'

export default function RootLayout({ children, ...props }: RootLayoutProps) {
  // const pathname = headers().get('referer') ? new URL(headers().get('referer') || '')?.pathname || 'home' : ''

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex size-full min-h-screen flex-col items-center justify-start overflow-x-hidden bg-muted/20 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
            <div className="max-w-1/2 pointer-events-none fixed inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle_at_center,transparent_83%,#0002)] dark:bg-black" />
            {/* Radial gradient for the container to give a faded look */}
            <Toaster />
            <Header />
            <main className="flex flex-1 flex-col py-5">
              <div className="container">{children}</div>
              <Newsletter />
            </main>
            <ErrorModal />
            {/* <TailwindIndicator /> */}
          </div>
        </Providers>
      </body>
    </html>
  )
}

interface RootLayoutProps {
  children: React.ReactNode
}
