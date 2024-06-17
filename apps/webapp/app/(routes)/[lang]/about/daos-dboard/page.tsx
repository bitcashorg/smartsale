import React from 'react'
import { Metadata } from 'next'
import { CommonPageProps } from '@/types/routing.type'
import { getDictionary } from '@/dictionaries'
import { FileTextIcon, MessageCircleIcon, VoteIcon } from 'lucide-react'
import {
  LandingPage2,
  LandingPageContent2
} from '@/components/shared/landing-page2'

export default async function BitcashAppPage({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="!py-10 px-7 md:px-3 md:py-24">
      <LandingPage2 content={content} />
    </div>
  )
}

const content: LandingPageContent2 = {
  title: 'Introducing dBoard',
  heading: 'Streamline Decision-Making for Your Community',
  description: `dBoard is a comprehensive platform designed to facilitate
  decision-making and community management for DAOs, companies, and
  non-profits. With its intuitive features, dBoard empowers your
  organization to engage in meaningful discussions, propose and
  amend ideas, and make informed decisions through a structured
  voting process.`,
  features: [
    {
      icon: MessageCircleIcon,
      text: 'Engage in detailed discussions and debates'
    },
    { icon: FileTextIcon, text: 'Propose and amend ideas collaboratively' },
    { icon: VoteIcon, text: 'Conduct pre-votes and final voting phases' }
  ],
  links: [
    {
      href: '#',
      text: 'Get Started',
      className:
        'inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
    },
    {
      href: '#',
      text: 'Learn More',
      className:
        'inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
    }
  ],
  image: {
    alt: 'dBoard',
    src: '/images/placeholder.svg',
    width: 500,
    height: 500
  }
}

export const metadata: Metadata = {
  title: 'Bitcash App | Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!'
}
