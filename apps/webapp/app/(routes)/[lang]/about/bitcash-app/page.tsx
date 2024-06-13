import React from 'react'
import { Metadata } from 'next'
import { CommonPageProps } from '@/types/routing.type'
import { getDictionary } from '@/dictionaries'

export default async function BitcashAppPage({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="content-container !py-10 px-7 md:px-3 md:py-24">
      <h1 className="heading">Bitcash App Page</h1>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Bitcash App | Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!'
}
