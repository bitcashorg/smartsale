import React, { useEffect, useRef } from 'react'
import { WITHE_PAPER } from '@/dictionaries/en/whitepaperv2'
import Balancer from 'react-wrap-balancer'
import { cn } from '@/lib/utils'
import { NavigationContainer } from './navigator'

interface WhitepaperContentProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

interface Content {
  type: string
  text: string | { text: string, bold?: boolean }[]
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

  function renderContent(content: Content) {
    switch (content.type) {
      case 'p':
        return (
          <p className="text-center font-futura text-[15px] font-normal leading-[145%] text-gray-500 dark:text-gray-400 mb-[27px]">
            {typeof content.text === 'string' ? (
              content.text
            ) : (
              content.text.map((part, idx) => (
                <span key={idx} className={part.bold ? 'font-bold' : ''}>
                  {part.text}
                </span>
              ))
            )}
          </p>
        )
      case 'h2':
        return (
          <div className="max-w-[500px] mx-auto">
            <h2 className="text-center text-[#FAFAFA] font-futura text-[26px] font-normal leading-[121%] mb-[37px]">
              {typeof content.text === 'string' ? content.text : content.text.map(part => part.text).join('')}
            </h2>
          </div>
        )
      case 'h3':
        return (
          <div className="max-w-[500px] mx-auto">
            <h3 className="text-center text-[#FAFAFA] font-futura text-[20px] font-normal leading-[121%] mb-[30px]">
              {typeof content.text === 'string' ? content.text : content.text.map(part => part.text).join('')}
            </h3>
          </div>
        )
      case 'list':
        return (
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-[27px] text-[15px]">
            {typeof content.text === 'string' ? content.text.split('\n').map((item, idx) => {
              const [title, content] = item.split(':')
              return (
                <li key={idx} className="mb-2">
                  {content && <span className="font-bold">{title}:</span>} {content || title}
                </li>
              )
            }) : null}
          </ul>
        )
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