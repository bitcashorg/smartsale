import React from 'react'
import { PageContent, PageContentData } from '@/components/shared/content'
import { CommonPageProps } from '@/types/routing.type'
import { getDictionary } from '@/dictionaries'

export default async function BitlauncherWhitePaper({
  params
}: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="content-container !py-10 px-7 md:px-3 md:py-24">
      <PageContent data={dict.whitepaper.content} />
    </div>
  )
}
