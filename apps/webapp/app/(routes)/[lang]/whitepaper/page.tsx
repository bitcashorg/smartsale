import React from 'react'
import { PageContent } from '@/components/shared/content'
import { CommonPageProps } from '@/types/routing.type'
import { getDictionary } from '@/dictionaries'
import { BgHeader } from '@/components/shared/bg-header'

export default async function BitlauncherWhitePaper({
  params
}: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <>
      <BgHeader
        heading={'Whitepaper'}
        subheading={''}
        imageSrc="/images/blog/temp-bg-concept.webp"
      />

      <div className="content-container z-30 bg-background !py-10 px-7 md:px-3 md:py-24">
        <PageContent data={dict.whitepaper.content.slice(1)} />
      </div>
    </>
  )
}
