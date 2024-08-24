import { BgHeader } from '@/components/shared/bg-header'
import { PageContent, PageContentData } from '@/components/shared/content'
import { getDictionary } from '@/dictionaries'
import type { CommonPageProps } from '@/types/routing.type'
import React from 'react'

export default async function BitlauncherWhitePaper({
  params,
}: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <>
      <section className="pt-[80]">
        <BgHeader
          heading={'Bitlauncher Whitepaper'}
          subheading={'Be Part of the Intelligent Future'}
          imageSrc="/images/blog/temp-bg-concept.webp"
        />

        <div className="content-container z-30 bg-background !py-10 px-7 md:px-3 md:py-24">
          <PageContent data={dict.whitepaper.content.slice(1)} />
        </div>
      </section>
    </>
  )
}
