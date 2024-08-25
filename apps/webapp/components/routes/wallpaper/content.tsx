import React, { useEffect, useRef } from 'react'
import { WITHE_PAPER } from '@/dictionaries/en/whitepaperv2'
import Balancer from 'react-wrap-balancer'
import { cn } from '@/lib/utils'
import { NavigationContainer } from './navigator'

interface WhitepaperContentProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function WhitepaperContent({ activeSection, onSectionChange }: WhitepaperContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      const offset = 64 // 64px offset
      const topPosition = contentRef.current.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: topPosition, behavior: 'smooth' })
    }
  }, [activeSection])

  function renderContent(content: { type: string, text: string }) {
    switch (content.type) {
      case 'p':
        return <p className="text-center font-futura text-[15px] font-normal leading-[145%] text-gray-500 dark:text-gray-400 mb-[27px]">{content.text}</p>
      case 'h2':
        return <div className="max-w-[500px] mx-auto">
          <h2 className="text-center text-[#FAFAFA] font-futura text-[26px] font-normal leading-[121%] mb-[37px]">{content.text.replaceAll('.', '')}</h2>
        </div>
      default:
        return null
    }
  }

  const activeSectionContentIndex = WITHE_PAPER.sections.findIndex(section => section.title === activeSection)
  const activeSectionContent = WITHE_PAPER.sections[activeSectionContentIndex]
  const prevTitle = WITHE_PAPER.sections[activeSectionContentIndex - 1]?.title
  const nextTitle = WITHE_PAPER.sections[activeSectionContentIndex + 1]?.title

  function handlePrevClick() {
    if (activeSectionContentIndex > 0) {
      onSectionChange(WITHE_PAPER.sections[activeSectionContentIndex - 1].title)
    }
  }

  function handleNextClick() {
    if (activeSectionContentIndex < WITHE_PAPER.sections.length - 1) {
      onSectionChange(WITHE_PAPER.sections[activeSectionContentIndex + 1].title)
    }
  }

  return (
    <div className="p-8" ref={contentRef}>
      {activeSectionContent && (
        <div>
          <h2 className='heading2 text-center'>
            <Balancer>{activeSectionContent.title}
              <div className="w-full h-[2.37px] bg-[#ff51ed] my-4" />
            </Balancer>
          </h2>

          {activeSectionContent.content.map((content, idx) => (
            <div key={idx}>
              {renderContent(content)}
            </div>
          ))}

          <NavigationContainer prevTitle={prevTitle} nextTitle={nextTitle} onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
        </div>
      )}
    </div>
  )
}