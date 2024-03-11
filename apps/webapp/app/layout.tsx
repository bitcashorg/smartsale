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
        <div className="relative min-h-screen h-full w-full bg-muted/20 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center">
          <div className="max-w-1/2 fixed pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(circle_at_center,transparent_83%,#0002)]" />
          {/* Radial gradient for the container to give a faded look */}
          <Toaster />
          <Providers
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col h-full">
              <Header />
              <main className="container flex flex-col flex-1 py-5">
                {children}
              </main>
            </div>
            <ErrorModal />
            {/* <TailwindIndicator /> */}
          </Providers>
        </div>
      </body>
    </html>
  )
}

interface RootLayoutProps {
  children: React.ReactNode
}
