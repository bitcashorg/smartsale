import { LayoutContainer } from '@/components/layout/layout-container'
import { Metadata } from 'next'
import React from 'react'

export default function WalletLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <LayoutContainer>{children}</LayoutContainer>
}

export const metadata: Metadata = {
  title: 'wallet | bitlauncher',
  description:
    'Invest in the intelligent future and join the Ai/Web3 revolution now!'
}
