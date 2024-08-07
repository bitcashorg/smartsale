'use client'

import { useState } from 'react'
import Link from 'next/link'
import { WITHE_PAPER } from '@/dictionaries/en/whitepaperv2'


interface Section {
  type: string
  title: string
  content: Array<{ type: string; text: string }>
}

export function WhitepaperSidebar() {
  const [activeSection, setActiveSection] = useState<string>('Introduction')

  return (
    <div className="w-64 h-screen p-4">
    <h2 className="text-xl font-bold mb-4">Bitlauncher Whitepaper</h2>
    <nav>
      {WITHE_PAPER.sections.map((section: Section) => (
        <Link key={section.title} href={`#${section.title.toLowerCase().replace(/ /g, '-')}`}>
          <div
            className={`block py-2 px-4 rounded cursor-pointer ${
              activeSection === section.title ? 'bg-gray-700' : 'hover:bg-gray-800'
            }`}
            onClick={() => setActiveSection(section.title)}
          >
            {section.title}
          </div>
        </Link>
      ))}
    </nav>
  </div>
  )
}