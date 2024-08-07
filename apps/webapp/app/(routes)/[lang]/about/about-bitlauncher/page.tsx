import {
  AboutBitlauncherPageContent,
  AboutBitlauncherPageLanding
} from '@/components/routes/about/about-bitlauncher'
import { getDictionary } from '@/dictionaries'
import { CommonPageProps } from '@/types/routing.type'
import { Metadata } from 'next'

export default async function AboutBitlauncher({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="!py-10 sm:px-6 md:px-3 md:py-24">
      <AboutBitlauncherPageLanding
        content={content}
        params={{
          lang: 'en'
        }}
      />
    </div>
  )
}

const content: AboutBitlauncherPageContent = {
  title: 'About',
  description: `Bitlauncher is a pioneering launchpad dedicated to transforming the landscape of artificial intelligence 
  (AI) and cryptocurrency. We are on a mission to empower the next wave of AI innovation by providing
  open-source AI projects with equitable fundraising opportunities and decentralized organization through the use of 
  blockchain technology.

  At Bitlauncher, we combine the transformative powers of AI and cryptocurrency to address the unique challenges faced
  by AI startups. By integrating tokenization and decentralized autonomous organizations (DAOs), we create a seamless 
  synergy that enables these startups to overcome funding barriers, accelerate their growth, and harness global resources.

  Our platform is built on a foundation of transparency, inclusivity, and community-driven progress. We foster a collaborative
  environment where developers, investors, and AI enthusiasts can come together to share resources, exchange ideas, and shape 
  the future of technology.`,
  image: {
    alt: 'dBoard',
    src: '/images/about-bg.svg',
    width: 610,
    height: 468
  }
}

export const metadata: Metadata = {
  title: 'Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!'
}
