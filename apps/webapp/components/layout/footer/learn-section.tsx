import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Section } from '../../shared/section'
import Image from 'next/image'
import Link from 'next/link'

export function LearnSection() {
  return (
    <Section heading={content.sectionTitle}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Link href="/blog/bitcash/how-to-register-and-kyc-to-bitcash ">
          <Card className="relative overflow-hidden min-h-96">
            <Image
              src={'/images/home/kyc-bitcash.webp'}
              alt={content.cards[0].title}
              loading="lazy"
              className="inset-0 z-0 object-cover transition-all ease-in-out bg-zoom"
              fill
            />

            <div className="absolute inset-0 bottom-0 z-30 flex flex-col justify-end w-auto shadow-md bg-gradient-to-t from-black/65 to-transparent">
              <CardHeader className="z-30 text-center">
                <CardTitle className="mx-auto max-w-[70%] text-4xl">
                  {content.cards[0].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="z-30 text-center">
                <p className="text">{content.cards[0].paragraphs[0]}</p>
                {/* {content.cards[0].paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-400">
                  {paragraph}
                </p>
              ))} */}
              </CardContent>
            </div>
          </Card>
        </Link>

        <div className="grid grid-cols-1 gap-8">
          <Link href="/blog/bitcash/how-to-register-and-kyc-to-bitcash ">
            <Card className="relative min-h-44">
              <Image
                src={'/images/home/bc-tokens.webp'}
                alt="BC Tokens"
                loading="lazy"
                className="inset-0 z-0 object-cover transition-all ease-in-out bg-zoom"
                fill
              />
              <div className="absolute inset-0 bottom-0 z-30 flex flex-col justify-center w-auto shadow-md bg-black/50">
                <CardHeader className="text-center">
                  <CardTitle className="w-2/3 mx-auto text-3xl text-center">
                    {content.cards[1].title}
                  </CardTitle>
                </CardHeader>
              </div>
            </Card>
          </Link>
          <Link href="/blog/bitcash/how-to-register-and-kyc-to-bitcash ">
            <Card className="relative min-h-44">
              <Image
                src={'/images/home/ido.webp'}
                alt={content.cards[1].title}
                loading="lazy"
                className="inset-0 z-0 object-cover transition-all ease-in-out bg-zoom"
                fill
              />
              <div className="absolute inset-0 bottom-0 z-30 flex flex-col justify-center w-auto shadow-md bg-black/40">
                <CardHeader className="text-center">
                  <CardTitle className="w-2/3 mx-auto text-3xl text-center">
                    {content.cards[2].title}
                  </CardTitle>
                </CardHeader>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </Section>
  )
}

const content = {
  sectionTitle: 'Learn about Bitlauncher',
  cards: [
    {
      title: 'How to Participate in a Bitlauncher IDO?',
      paragraphs: [
        "A good place to start is: what is Bitlauncher? (We'll give you the brief version). Bitlauncher is a platform that connects young projects with early community members through initial decentralized offerings (IDOs). It provides a unique opportunity for investors to engage with up-and-coming tech innovations.",
        'By participating in an IDO on Bitlauncher, users can gain early access to tokens from new blockchain projects. This early access can potentially lead to significant benefits if the projects grow in value and popularity. Bitlauncher aims to democratize the investment process, making it accessible to a broader audience.'
      ]
    },
    {
      title: 'How to buy the Bitlauncher $BC token?',
      paragraphs: []
    },
    {
      title: 'What is an IDO (Initial Decentralized Offering)?',
      paragraphs: []
    }
  ]
}
