import { Section } from '@/components/shared/section'

import { Tag } from '@/components/shared/tag'
import { Card, CardContent } from '@/components/ui/card'
import { Lang } from '@/dictionaries/locales'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

export function Features({ lang, dict }: FeaturesProps) {
  return (
    <Section
      heading={dict.featuresContent[0].title}
      subheading={dict.featuresContent[0].description}
    >
      {dict.featuresContent.slice(1).map((content: any, index: number) => (
        <div
          key={index}
          className={cn(
            'mx-auto grid items-center gap-6 lg:grid-cols-2 lg:gap-20',
            index === 0 ? 'border-b border-muted pb-20' : 'pt-20'
          )}
        >
          <div
            className={`flex flex-col justify-center space-y-4  ${index % 2 === 1 ? 'lg:order-last' : ''}`}
          >
            <div className="space-y-2">
              <Tag title={content.label} />
              <h3 className="text-2xl font-bold text-left">
                <Balancer>{content.title}</Balancer>
              </h3>
              <p className="text-left text-[18px] text-gray-500 dark:text-gray-400">
                {content.description}
              </p>
            </div>
          </div>

          {index === 0 ? (
            <Card>
              <CardContent className="pt-5">
                <div className="relative h-full min-h-[350px] w-full overflow-hidden">
                  <Image
                    src={content.imgSrc}
                    alt={content.imgAlt}
                    fill
                    objectPosition="top"
                    className="bg-transparent rounded-xl"
                  />
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="relative h-full min-h-[350px] w-full overflow-hidden">
              <Image
                src={content.imgSrc}
                alt={content.imgAlt}
                fill
                objectPosition="top"
                className="bg-transparent rounded-xl"
              />
            </div>
          )}
        </div>
      ))}
    </Section>
  )
}

interface FeaturesProps {
  dict: any
  lang: Lang
}
