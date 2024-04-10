'use client'

import { ErrorModal } from "@/components/dialogs/error-dialog"
import { Header } from "@/components/layout/header"
import { Newsletter } from "@/components/pages/home/newsletter"
import Participate from "@/components/pages/home/participate"
import { BackgroundMovingGradient } from "@/components/ui/background-moving-gradient"
import { cn } from "@/lib/utils"
import { useRef } from "react"
import { Toaster } from "react-hot-toast"

export function LayoutContainer({ children, projectHeader }: { children: React.ReactNode, projectHeader?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <BackgroundMovingGradient>
      <Header containerRef={containerRef} />
      <Toaster />
      <div
        className={cn(
          'absolute scrollbar pt-[80px] inset-0 z-50 flex size-full min-h-screen flex-col items-center justify-start overflow-x-hidden',
          {
            'pt-0': Boolean(projectHeader)
          }
        )}
        ref={containerRef}
      >
        {projectHeader ? (
          <main className="flex flex-col">
            <header className="relative bg-black/20 w-screen py-40 min-h-[calc(83vh-4rem)]">
              {projectHeader}
            </header>

            <div className="container py-24">
              {children}
            </div>
          </main>
        ) : (
          <main className="flex flex-1 flex-col py-5 container">
            {children}
          </main>
        )}
        <footer className="container flex flex-1 w-full flex-col px-4 py-32 gap-32">
          <Participate />
          <Newsletter />
        </footer>
        <ErrorModal />
        {/* <TailwindIndicator /> */}
      </div>
    </BackgroundMovingGradient>
  )
}