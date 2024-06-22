import React from 'react'
import { Metadata } from 'next'
import { CommonPageProps } from '@/types/routing.type'
import { getDictionary } from '@/dictionaries'
import { TokenizationLanding } from '@/components/_wip/tokenization-landing'

export default async function TokenizationPage({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="!py-10 px-7 md:px-3 md:py-24">
      <TokenizationLanding />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Tokenization | Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!'
}
