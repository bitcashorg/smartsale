import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Section } from '../shared/section'

export function LearnSection() {
  return (
    <Section heading={content.sectionTitle}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="relative p-8">
          <div className="relative w-full h-64 mb-4">
            <Image
              src={content.cards[0].imageSrc}
              alt={content.cards[0].imageAlt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <CardHeader className="text-center">
            <CardTitle>{content.cards[0].title}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            {content.cards[0].paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-400">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-8">
          <Card className="relative p-8">
            <div className="relative w-full h-64 mb-4">
              <Image
                src={content.cards[1].imageSrc}
                alt={content.cards[1].imageAlt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <CardHeader className="text-center">
              <CardTitle>{content.cards[1].title}</CardTitle>
            </CardHeader>
          </Card>

          <Card className="relative p-8">
            <div className="relative w-full h-64 mb-4">
              <Image
                src={content.cards[2].imageSrc}
                alt={content.cards[2].imageAlt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <CardHeader className="text-center">
              <CardTitle>{content.cards[2].title}</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </Section>
  )
}

const content = {
  sectionTitle: 'Learn about Bitlauncher',
  cards: [
    {
      imageSrc: '/images/placeholder.svg',
      imageAlt: 'Illustration',
      title: 'How to Participate in a Bitlauncher IDO?',
      paragraphs: [
        "A good place to start is: what is Bitlauncher? (We'll give you the brief version). Bitlauncher is a platform that connects young projects with early community members through initial decentralized offerings (IDOs). It provides a unique opportunity for investors to engage with up-and-coming tech innovations.",
        'By participating in an IDO on Bitlauncher, users can gain early access to tokens from new blockchain projects. This early access can potentially lead to significant benefits if the projects grow in value and popularity. Bitlauncher aims to democratize the investment process, making it accessible to a broader audience.'
      ]
    },
    {
      imageSrc: '/images/placeholder.svg',
      imageAlt: 'Illustration',
      title: 'How to buy the Bitlauncher $BC token?',
      paragraphs: []
    },
    {
      imageSrc: '/images/placeholder.svg',
      imageAlt: 'Illustration',
      title: 'What is an IDO (Initial Decentralized Offering)?',
      paragraphs: []
    }
  ]
}
