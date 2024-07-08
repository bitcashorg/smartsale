import { Card } from '@/components/ui/card'
import * as Icons from 'lucide-react'
import { Section } from '@/components/shared/section'
import { Feature } from '@/types/home'
import { Lang } from '@/dictionaries/locales'

export function WhyChooseUs({ lang, dict }: WhyChooseUsProps) {
  const content = dict.whyChooseUs
  return (
    <Section heading={content.title} subheading={content.description}>
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-5">
        {content.features.map((feature: Feature) => {
          const IconComponent = Icons[feature.icon] as React.ElementType
          return (
            <Card className="flex flex-col items-center p-6 space-y-4 border-card/30 bg-card backdrop-blur-lg">
              <IconComponent className="w-12 h-12 mb-5 text-gray-50" />

              <h3 className="mb-5 text-lg font-semibold min-h-20">
                {feature.title}
              </h3>
              <p className="text-sm text-center text-gray-500 parragraph dark:text-gray-400">
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
