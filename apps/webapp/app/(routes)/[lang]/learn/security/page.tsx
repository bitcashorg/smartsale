import { WhyChooseUs } from '@/components/routes/home/why-choose-us'
import { BgHeader } from '@/components/shared/bg-header'
import { PageContent } from '@/components/shared/content'
import { getDictionary } from '@/dictionaries'
import type { CommonPageProps } from '@/types/routing.type'
import type { Metadata } from 'next'
import React from 'react'

export default async function SecurityTips({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  const content = dict.security.content.slice(1)
  const heading = dict.security.content[0].text

  return (
    <>
      <BgHeader
        heading={heading}
        subheading={'Be Part of the Intelligent Future'}
        imageSrc={''}
      />
      <div className="content-container z-30 bg-background text-center !py-10 px-7 md:px-3 md:py-24">
        <PageContent data={content} />
      </div>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Security Tips | Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!',
}
