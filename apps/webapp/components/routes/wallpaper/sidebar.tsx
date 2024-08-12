import React from 'react'
import { WITHE_PAPER } from '@/dictionaries/en/whitepaperv2'

interface Section {
  type: string
  title: string
  content: Array<{ type: string; text: string }>
}

interface WhitepaperSidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function WhitepaperSidebar({ activeSection, setActiveSection }: WhitepaperSidebarProps) {
  return (
    <div className="w-64 h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Bitlauncher Whitepaper</h2>
      <nav>
        {WITHE_PAPER.sections.map((section: Section) => (
          <div
            key={section.title}
            className={`block py-2 px-4 rounded cursor-pointer ${
              activeSection === section.title ? 'bg-gray-700 text-white' : 'hover:bg-gray-800'
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