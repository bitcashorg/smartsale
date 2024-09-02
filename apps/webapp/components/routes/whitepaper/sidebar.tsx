import React, { useState, SVGProps, useEffect } from 'react'
    import { WITHE_PAPER } from '@/dictionaries/en/whitepaper'

export function WhitepaperSidebar({ activeSection, onSectionChange }: WhitepaperSidebarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  function handleSectionClick(sectionTitle: string) {
    onSectionChange(sectionTitle)
    setIsModalOpen(false)
    setIsMobileNavOpen(false)
  }

  function toggleMobileNav() {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  useEffect(() => {
    if (isModalOpen || isMobileNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isModalOpen, isMobileNavOpen])

  return (
    <div className="w-64 p-4 md:h-screen">
      <h2 className="text-xl font-bold mb-4 hidden md:block">Bitlauncher Whitepaper</h2>
      {/* <div className="block md:hidden">
        <NavigationBtn className="mb-4" onClick={toggleMobileNav} />
        <AnimatePresence>
          {isMobileNavOpen && (
            <Transition duration={0.3}>
              <div className="mobile-nav bg-gray-800 p-4 rounded-lg relative left-0 w-full">
                <div className="mb-4 self-start">
                  <button
                    className="text-[#e728a9]"
                    onClick={toggleMobileNav}
                  >
                    ✕
                  </button>
                  <h2 className="text-xl font-bold text-white">Bitlauncher Whitepaper</h2>
                </div>
                {WITHE_PAPER.sections.map((section: Section) => (
                  <div
                    key={section.title}
                    className={`self-start inline-flex flex-col items-start justify-start relative flex-[0_0_auto] ${activeSection === section.title ? 'text-white' : 'text-[#9395af]'}`}
                    onClick={() => handleSectionClick(section.title)}
                  >
                    <div className="relative w-fit mt-[-1.00px] font-normal text-xl tracking-[0] leading-[24.2px] whitespace-nowrap text-left">
                      {section.title}
                    </div>
                    {activeSection === section.title && (
                      <div className="absolute w-[69px] h-0.5 top-6 left-0 bg-[#ff51ed]" />
                    )}
                  </div>
                ))}
              </div>
            </Transition>
          )}
        </AnimatePresence>
      </div> */}
      <nav className="hidden md:block">
        {WITHE_PAPER.sections.map((section: Section) => (
          <div
            key={section.title}
            className={`block py-2 cursor-pointer ${activeSection === section.title ? 'border-b-2 border-accent-400 inline-block text-white' : 'paragraph'}`}
            onClick={() => onSectionChange(section.title)}
          >
            {section.title}
          </div>
        ))}
      </nav>
    </div>
  )
}

const NavigationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    fill="none"
    viewBox="0 0 32 33"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.333 16.921h21.334M5.333 8.921h21.334M5.333 24.921h21.334"
    />
  </svg>
)

const NavigationBtn = ({ className, onClick }: { className: string, onClick: () => void }) => {
  return (
    <div
      className={`flex items-center justify-center w-13 h-13 rounded-full bg-[#e728a9] ${className} w-[52px] h-[52px]`}
      onClick={onClick}
    >
      <NavigationIcon className="w-8 h-8" />
    </div>
  )
}

interface Section {
  type: string
  title: string
  content: Array<{
    type: string
    text?: string | Array<{ text: string; bold?: boolean }>
  }>
}

interface WhitepaperSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}