import { LayoutContainer } from '@/components/layout-container'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'how it works | bitlauncher',
  description: 'Invest in the intelligent future and join the Ai/Web3 revolution now!',
}

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  )
}
