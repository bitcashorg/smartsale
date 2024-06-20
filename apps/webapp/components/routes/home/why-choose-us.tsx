import { Card } from '@/components/ui/card'
import * as Icons from 'lucide-react'
import { Section } from '@/components/shared/section'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { Feature } from '@/types/home'

export function WhyChooseUs({ lang, dict }: WhyChooseUsProps) {
  return (
    <Section
      heading={dict.whyChooseUs[0].title}
      subheading={dict.whyChooseUs[0].description}
    >
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {dict.whyChooseUs.slice(1).map((feature: Feature) => {
          const IconComponent = Icons[feature.icon] as React.ElementType
          return (
            <Card className="flex flex-col items-center justify-center space-y-4 border-card/30 bg-card p-6 backdrop-blur-lg">
              <IconComponent className="h-12 w-12 text-gray-900 dark:text-gray-50" />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="parragraph text-center text-sm text-gray-500 dark:text-gray-400">
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
  lang: SiteLocale
}
