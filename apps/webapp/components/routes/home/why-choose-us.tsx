import { Section } from '@/components/shared/section'
import { Card } from '@/components/ui/card'
import { Lang } from '@/dictionaries/locales'
import { Feature } from '@/types/home'
import * as Icons from 'lucide-react'

export function WhyChooseUs({ lang, dict }: WhyChooseUsProps) {
  const content = dict.whyChooseUs
  return (
    <Section heading={content.title} subheading={content.description}>
      <div className="grid w-full grid-cols-1 gap-[27px] lg:grid-cols-5">
        {content.features.map((feature: Feature) => {
          const IconComponent = Icons[feature.icon] as React.ElementType
          return (
            <Card className="flex flex-col items-center px-3 py-6 text-center border-card/30 bg-card backdrop-blur-lg">
              <IconComponent className="w-12 h-12 mb-5 text-gray-50" />
              <h3 className="mb-5 text-lg font-bold min-h-20">
                {feature.title}
              </h3>
              <p className="text-gray-500 parragraph dark:text-gray-400">
                {feature.description}
              </p>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

export interface WhyChooseUsProps {
  dict: any
  lang: Lang
}
