import { Section } from '@/components/shared/section'
import React from 'react'
import Image from 'next/image'

export function Features() {
  return (
    <Section
      heading="Features"
      subheading="Discover the key capabilities that make Bitlauncher the premier
            platform for decentralized finance."
    >
      {featuresContent.map((content, index) => (
        <div
          key={index}
          className="grid items-center gap-6 mx-auto lg:grid-cols-2 lg:gap-12"
        >
          <div
            className={`flex flex-col justify-center space-y-4 ${index % 2 === 1 ? 'lg:order-last' : ''}`}
          >
            <div className="space-y-2">
              <div className="inline-flex items-center px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200">
                {content.label}
              </div>
              <h3 className="text-2xl font-bold">{content.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {content.description}
              </p>
            </div>
          </div>
          <div className="relative h-full min-h-[350px] w-full overflow-hidden">
            <Image
              src={content.imgSrc}
              alt={content.imgAlt}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="rounded-xl"
            />
          </div>
        </div>
      ))}
    </Section>
  )
}

const featuresContent: FeatureContent[] = [
  {
    title: 'Batch Auctions for Equitable Price Discovery',
    description:
      'Our platform revolutionizes startup funding by implementing a batch auction system for token sales, ensuring fair and transparent price discovery. This method allows all participants to bid within a fixed period, with tokens allocated at a uniform clearing price. This approach prevents price manipulation and ensures that all investors have equal access to investment opportunities, making it a fair marketplace for both startups and investors.',
    label: 'Batch Auctions',
    imgSrc: '/images/home/wallet.png',
    imgAlt: 'Batch Auctions'
  },
  {
    title: 'Decentralized Autonomous Organization (DAO) Tools',
    description:
      'Bitlauncher is equipped with advanced DAO tools that empower our community to partake directly in governance and decision-making processes. These tools facilitate seamless interaction and collaboration, allowing token holders to propose, vote on, and implement changes within the platform. This level of engagement ensures that every member has a voice in the direction of the project, enhancing transparency and aligning with our commitment to community-driven innovation.',
    label: 'DAO Tools',
    imgSrc: '/images/home/dboard.png',
    imgAlt: 'DAO Tools'
  }
]

interface FeatureContent {
  title: string
  description: string
  label: string
  imgSrc: string
  imgAlt: string
}
