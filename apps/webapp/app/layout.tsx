import '@/app/globals.css'
import { ErrorModal } from '@/components/dialogs/error-dialog'
import { Header } from '@/components/layout/header'
import { Newsletter } from '@/components/pages/home/newsletter'
import Participate from '@/components/pages/home/participate'
import { Providers } from '@/components/providers'
import { BackgroundMovingGradient } from '@/components/ui/background-moving-gradient'
import { cn } from '@/lib/utils'
import { GoogleAnalytics } from '@next/third-parties/google'
import '@rainbow-me/rainbowkit/styles.css'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'
import { Toaster } from 'react-hot-toast'

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
          <BackgroundMovingGradient>
            {/* <div className="absolute z-50 flex size-full min-h-screen flex-col items-center justify-start overflow-x-hidden bg-muted/20 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"> */}
            {/* <div className="max-w-1/2 pointer-events-none fixed inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle_at_center,transparent_83%,#0002)] dark:bg-black" /> */}
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute inset-0 z-50 flex size-full min-h-screen flex-col items-center justify-start overflow-x-hidden bg-dot-black/[0.1] dark:bg-dot-white/[0.1]">
              <Toaster />
              <Header />
              <main className="flex flex-1 flex-col py-5">
                <div className="container">{children}</div>
              </main>
              <footer className="flex flex-1 flex-col px-4 pb-72 pt-32">
                <Participate />
                <Newsletter />
              </footer>
              <ErrorModal />
              {/* <TailwindIndicator /> */}
            </div>
          </BackgroundMovingGradient>
        </Providers>
        <GoogleAnalytics gaId="G-78N0Z7NPQJ" />
      </body>
    </html>
  )
}

interface RootLayoutProps {
  children: React.ReactNode
}
