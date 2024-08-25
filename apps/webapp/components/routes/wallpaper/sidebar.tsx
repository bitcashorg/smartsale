import React, { useState, SVGProps, useEffect } from 'react'
import { WITHE_PAPER } from '@/dictionaries/en/whitepaperv2'
import * as Dialog from '@radix-ui/react-dialog'
import { Transition } from '@/components/shared/transition'
import { AnimatePresence } from 'framer-motion'
import UseAnimations from 'react-useanimations'
import menu4 from 'react-useanimations/lib/menu4'

// Exported Function component
export function WhitepaperSidebar({ activeSection, setActiveSection }: WhitepaperSidebarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  function handleSectionClick(sectionTitle: string) {
    setActiveSection(sectionTitle)
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
      <div className="block md:hidden">
        <NavigationBtn className="mb-4" onClick={toggleMobileNav} />
        <AnimatePresence>
          {isMobileNavOpen && (
            <Transition duration={0.3}>
              <div className="mobile-nav bg-gray-800 p-4 rounded-lg relative left-0 w-full">
                <button
                  className="absolute top-4 left-4 text-white"
                  onClick={toggleMobileNav}
                >
                  ✕
                </button>

                {WITHE_PAPER.sections.map((section: Section) => (
                  <div
                    key={section.title}
                    className={`block py-2 px-4 rounded cursor-pointer ${activeSection === section.title ? 'bg-gray-700 text-white' : 'hover:bg-gray-800'
                      }`}
                    onClick={() => handleSectionClick(section.title)}
                  >
                    {section.title}
                  </div>
                ))}
              </div>
            </Transition>
          )}
        </AnimatePresence>
      </div>
      <nav className="hidden md:block">
        {WITHE_PAPER.sections.map((section: Section) => (
          <div
            key={section.title}
            className={`block py-2 px-4 rounded cursor-pointer ${activeSection === section.title ? 'bg-gray-700 text-white' : 'hover:bg-gray-800'
              }`}
            onClick={() => setActiveSection(section.title)}
          >
            {section.title}
          </div>
        ))}
      </nav>
    </div>
  )
}

// Subcomponents
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

// TypeScript types
interface Section {
  type: string
  title: string
  content: Array<{ type: string; text: string }>
}

interface WhitepaperSidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}