'use client'

import { ErrorModal } from '@/components/dialogs/error-dialog'
import { Header } from '@/components/layout/header'
import Participate from '@/components/pages/home/participate'
import { BackgroundMovingGradient } from '@/components/ui/background-moving-gradient'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { Toaster } from 'react-hot-toast'

const DynamicNewsletter = dynamic(
  () => import('../pages/home/newsletter') as any,
  {
    ssr: false
  }
)

export function LayoutContainer({
  children,
  projectHeader
}: {
  children: React.ReactNode
  projectHeader?: React.ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <BackgroundMovingGradient>
      <Header containerRef={containerRef} />
      <Toaster />
      <div
        className={cn(
          'scrollbar absolute inset-0 z-50 flex size-full min-h-screen flex-col items-center justify-start overflow-x-hidden pt-[80px]',
          {
            'pt-0': Boolean(projectHeader)
          }
        )}
        ref={containerRef}
      >
        {projectHeader ? (
          <main className="flex flex-col">
            <header className="relative min-h-[calc(83vh-4rem)] w-screen bg-muted/10 py-40 backdrop-blur-[2.5px]">
              {projectHeader}
            </header>

            <div className="container py-24">{children}</div>
          </main>
        ) : (
          <main className="container flex flex-col flex-1 py-5">
            {children}
          </main>
        )}
        <footer className="container flex flex-col flex-1 w-full gap-32 px-4 py-32">
          <Participate />
          <DynamicNewsletter />
        </footer>
        <ErrorModal />
        {/* <TailwindIndicator /> */}
      </div>
    </BackgroundMovingGradient>
  )
}
