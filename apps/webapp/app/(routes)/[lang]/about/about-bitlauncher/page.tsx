import React from 'react'
import { Metadata } from 'next'
import { CommonPageProps } from '@/types/routing.type'
import { getDictionary } from '@/dictionaries'
import {
  LandingPage3,
  LandingPageContent3
} from '@/components/_wip/landing-page3'

export default async function AboutBitlauncher({ params }: CommonPageProps) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="!py-10 px-7 md:px-3 md:py-24">
      <LandingPage3 content={content} />
    </div>
  )
}

const content: LandingPageContent3 = {
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
    width: 500,
    height: 500
  }
}

export const metadata: Metadata = {
  title: 'Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!'
}
