import React from 'react'
import { Metadata } from 'next'
import { PageContent } from '@/components/shared/content'
import { CommonPageProps } from '@/types/routing.type'
import { getDictionary } from '@/dictionaries'
import { BgHeader } from '@/components/shared/bg-header'

export default async function SecurityTips({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  const content = dict.security.content.slice(1)
  const heading = dict.security.content[0].text
  // const subheading = dict.about.content[1].text

  return (
    <>
      <BgHeader
        heading={heading}
        subheading={'Be Part of the Intelligent Future'}
        imageSrc="/images/blog/temp-bg-concept.webp"
      />

      <div className="content-container z-30 bg-background !py-10 px-7 md:px-3 md:py-24">
        <PageContent data={content} />
      </div>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Security Tips | Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!'
}
