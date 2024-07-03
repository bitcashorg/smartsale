import { Section } from '@/components/shared/section'

import { FeatureContent } from '@/types/home'
import React from 'react'
import Image from 'next/image'
import { Lang } from '@/dictionaries/locales'

export function Features({ lang, dict }: FeaturesProps) {
  return (
    <Section
      heading={dict.featuresContent[0].title}
      subheading={dict.featuresContent[0].description}
    >
      {dict.featuresContent.slice(1).map((content: any, index: number) => (
        <div
          key={index}
          className="grid items-center gap-6 mx-auto lg:grid-cols-2 lg:gap-12"
        >
          <div
            className={`flex flex-col justify-center space-y-4 ${index % 2 === 1 ? 'lg:order-last' : ''}`}
          >
            <div className="space-y-2">
              {/* <div className="inline-flex items-center px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200">
                {content.label}
              </div> */}
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

interface FeaturesProps {
  dict: any
  lang: Lang
}
