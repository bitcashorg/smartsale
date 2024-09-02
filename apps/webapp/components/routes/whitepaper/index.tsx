"use client"
import React, { useState } from 'react'
import { CommunityCard } from '@/components/shared/community-card'
import { HeroWhitepaper } from './hero'
import { Lang } from '@/dictionaries/locales'
import { WhitepaperSidebar } from './sidebar'
import { WHITE_PAPER_HERO_CONTENT } from './static-content'
import { WhitepaperContent } from './content'

export function WhitepaperPageLanding({ params: { lang } }: WhitepaperPageProps) {
  const [activeSection, setActiveSection] = useState<string>('Introduction')

  return (
    <>
      <section className="narrow-container">
        <div className="grid items-center justify-between gap-4 px-0 pb-[80px] md:px-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="sectionsHeading">
              Whitepaper
            </h2>
            <HeroWhitepaper paragraphs={WHITE_PAPER_HERO_CONTENT} />
          </div>
          <div className="infopages-background infopages-background--whitepaper">
            <div className="absolute bottom-0 m-4">
              <CommunityCard />
            </div>
          </div>
        </div>
      </section>
      <div className="container px-0 md:px-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1">
          <WhitepaperSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
        <div className="lg:col-span-3">
          <WhitepaperContent activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>
      </div>
    </>
  )
}

interface WhitepaperPageProps {
  params: { lang: Lang }
}