'use client'

import { ErrorModal } from "@/components/dialogs/error-dialog"
import { Header } from "@/components/layout/header"
import { Newsletter } from "@/components/pages/home/newsletter"
import Participate from "@/components/pages/home/participate"
import { BackgroundMovingGradient } from "@/components/ui/background-moving-gradient"
import { useRef } from "react"
import { Toaster } from "react-hot-toast"

export function LayoutContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <BackgroundMovingGradient>
      <Header containerRef={containerRef} />
      <Toaster />
      <div
        className="absolute scrollbar pt-[64px] inset-0 z-50 flex size-full min-h-screen flex-col items-center justify-start overflow-x-hidden"
        ref={containerRef}
      >
        <main className="flex flex-1 flex-col py-5 container">
          {children}
        </main>
        <footer className="flex flex-1 flex-col px-4 pb-72 pt-32">
          <Participate />
          <Newsletter />
        </footer>
        <ErrorModal />
        {/* <TailwindIndicator /> */}
      </div>
    </BackgroundMovingGradient>
  )
}