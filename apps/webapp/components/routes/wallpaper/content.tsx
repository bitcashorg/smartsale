import React from 'react'
import { WITHE_PAPER } from '@/dictionaries/en/whitepaperv2'
import { PageContent, PageContentData } from '@/components/shared/content'

interface WhitepaperContentProps {
  activeSection: string
}

export function WhitepaperContent({ activeSection }: WhitepaperContentProps) {
  const activeSectionContent = WITHE_PAPER.sections.find(section => section.title === activeSection)

  return (
    <div className="p-8">
      {activeSectionContent && (
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{activeSectionContent.title}</h1>
          <PageContent data={activeSectionContent.content as PageContentData} />
        </div>
      )}
    </div>
  )
}