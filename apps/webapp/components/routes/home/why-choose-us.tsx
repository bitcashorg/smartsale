import { Card } from '@/components/ui/card'
import * as Icons from 'lucide-react'
import { Section } from '@/components/shared/section'

export function WhyChooseUs() {
  return (
    <Section
      heading="Why Choose Us"
      subheading="Discover the unique features that set us apart from the rest."
    >
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {features.map(feature => {
          const IconComponent = Icons[feature.icon] as React.ElementType
          return (
            <Card className="flex flex-col items-center justify-center p-6 space-y-4">
              <IconComponent className="w-12 h-12 text-gray-900 dark:text-gray-50" />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-center text-gray-500 parragraph dark:text-gray-400">
                {feature.description}
              </p>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

const features: Feature[] = [
  {
    icon: 'ShoppingBasket',
    title: 'Batch Auction for Fair Price Discovery',
    description:
      'Our unique batch auction system ensures fair and transparent price discovery for all participants.'
  },
  {
    icon: 'Group',
    title: 'DAO Tools for Community-Driven Organization',
    description:
      'Empower your community with our suite of DAO tools for decentralized decision-making and governance.'
  },
  {
    icon: 'Check',
    title: 'Cash-Flow Based Project Evaluation',
    description:
      'Our innovative cash-flow based project evaluation model helps you make informed investment decisions.'
  },
  {
    icon: 'Flame',
    title: 'Unique Burn & Mint Tokenomics',
    description:
      'Our custom token model with built-in burn and mint mechanisms ensures sustainable growth and value appreciation.'
  },
  {
    icon: 'Globe',
    title: 'AI and Global-First Strategy',
    description:
      'Leveraging the power of AI and a global-first approach, we deliver unparalleled insights and opportunities.'
  }
]

interface Feature {
  icon: keyof typeof Icons
  title: string
  description: string
}
