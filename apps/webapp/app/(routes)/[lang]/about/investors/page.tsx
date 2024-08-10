import { LandingPage, LandingPageContent } from '@/components/_wip/landing-page'
import { getDictionary } from '@/dictionaries'
import { CommonPageProps } from '@/types/routing.type'
import { Metadata } from 'next'

export default async function InvestorsPage({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="!py-10 px-7 md:px-3 md:py-24">
      <LandingPage content={content} />
    </div>
  )
}

const content: LandingPageContent = {
  title: 'Robust Vetting Process',
  header: 'Invest with Confidence',
  description:
    'Our rigorous vetting process ensures only the most promising web3 and AI projects make it onto the Bitlauncher platform. This gives investors peace of mind and helps them capitalize on the best opportunities.',
  sections: [
    {
      subHeader: 'Thorough Audits',
      text: "We conduct comprehensive technical, legal, and financial audits to validate each project's viability."
    },
    {
      subHeader: 'Experienced Team',
      text: 'Our team of industry experts carefully evaluates each project to ensure it meets our high standards.'
    },
    {
      subHeader: 'Contributor Protection',
      text: 'Rigorous vetting protects investors from scams and low-quality projects, giving them confidence in their investments.'
    },
    {
      subHeader: 'Curated Opportunities',
      text: 'Our platform showcases only the most promising web3 and AI projects, saving investors time and effort.'
    },
    {
      subHeader: 'Transparent Reporting',
      text: 'We provide detailed and transparent reporting on all projects, ensuring investors have all the information they need.'
    },
    {
      subHeader: 'Community Feedback Integration',
      text: 'We incorporate feedback from our contributor community to continuously improve the projects and the platform.'
    }
  ]
}

export const metadata: Metadata = {
  title: 'Investors | Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!'
}
