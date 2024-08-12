"use client"
import React, { useState } from 'react'
import { CommunityCard } from '@/components/shared/community-card'
import { HeroContent } from '@/components/shared/hero-content'
import { Lang } from '@/dictionaries/locales'
import { WhitepaperSidebar } from './sidebar'
import { whitepaperParagraphs } from './static'
import { WhitepaperContent } from './content'

export function WhitepaperPageLanding({ params: { lang } }: WhitepaperPageProps) {
  const [activeSection, setActiveSection] = useState<string>('Introduction')

  return (
    <>
      <section className="w-full py-12 narrow-container md:py-24 lg:py-32">
        <div className="container px-0 md:px-6">
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-['Futura PT'] text-7xl tracking-tighter">
                Whitepaper
              </h2>
              <HeroContent paragraphs={whitepaperParagraphs} />
            </div>
            <div className="relative flex items-center justify-center">
              <div className="infopages-background infopages-background--whitepaper">
                <div className="absolute bottom-0 m-4">
                  <CommunityCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container px-0 md:px-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1">
          <WhitepaperSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
        <div className="lg:col-span-3">
          <WhitepaperContent activeSection={activeSection} />
        </div>
      </div>
    </>
  )
}

interface WhitepaperPageProps {
  params: { lang: Lang }
}