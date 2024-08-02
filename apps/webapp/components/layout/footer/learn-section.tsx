import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Section } from '../../shared/section'
import Image from 'next/image'
import Link from 'next/link'

export function LearnSection() {
  return (
    <Section heading={content.sectionTitle}>
      <div className="h-[2px] bg-[#FF52EE] w-28 mx-auto mb-9"></div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Link href="/blog/bitcash/how-to-register-and-kyc-to-bitcash ">
          <Card className="relative overflow-hidden min-h-96 bg-[#0F113E] rounded-[48px]">
            <div className="flex flex-col justify-end w-auto shadow-md bg-[linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent_40%)]">
              <picture>
                <source srcSet={content.cards[0].images[0]} type="image/webp"/>
                <source srcSet={content.cards[0].images[1]} type="image/png"/>
                <Image
                  src={content.cards[0].images[0]}
                  alt={content.cards[0].title}
                  loading="lazy"
                  width={311}
                  height={309}
                  className="mx-auto bg-[radial-gradient(#7D81D96E,transparent_43%)]"
                />
              </picture>
              <CardHeader className="z-30 text-center px-3 lg:px-16 gap-y-3">
                <CardTitle className="mx-auto text-3xl lg:text-4xl font-medium text-left">
                  {content.cards[0].title}
                </CardTitle>
                <div className="w-28 h-[2px] bg-[#5361FF] mb-7" />
              </CardHeader>
              <CardContent className="z-30 text-left px-3 md:px-16 pb-14">
                <div className="flex flex-col justify-center items-start gap-y-5">
                  {
                    content.cards[0].paragraphs.map((p) => (
                      <p key={p} className="text-base font-medium text-[#7A7CA8]">{p}</p>
                    ))
                  }
                </div>
              </CardContent>
            </div>
          </Card>
        </Link>

        <div className="grid grid-cols-1 gap-8 grid-rows-2 h-full">
          <Link href="/blog/bitcash/how-to-register-and-kyc-to-bitcash ">
            <Card className="relative min-h-44 bg-[#0F113E] rounded-[48px] h-full flex jutify-center items-center">

              <div className="shadow-md bg-[linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent_40%)] grid grid-cols-[60%_40%] gap-2 items-center justify-center h-full">
                <CardHeader className="text-center px-3 lg:px-20 lg:pr-0 py-16 pr-0 gap-y-3 lg:gap-y-14">
                  <CardTitle className="mx-auto text-3xl lg:text-4xl text-left font-medium">
                    {content.cards[1].title}
                  </CardTitle>
                  <div className="w-28 h-[2px] bg-[#9A9EFC] mt-7" />
                </CardHeader>
                <picture>
                  <source srcSet={content.cards[1].images[0]} type="image/webp"/>
                  <source srcSet={content.cards[1].images[1]} type="image/png"/>
                  <Image
                    src={content.cards[1].images[0]}
                    alt={content.cards[1].title}
                    loading="lazy"
                    width={230}
                    height={275}
                    className="mx-auto bg-[radial-gradient(#7D81D96E,transparent_60%)]"
                  />
                </picture>
              </div>
            </Card>
          </Link>
          <Link href="/blog/bitcash/how-to-register-and-kyc-to-bitcash ">
            <Card className="relative min-h-44 bg-[#0F113E] rounded-[48px] h-full flex jutify-center items-center">

              <div className="shadow-md bg-[linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent_40%)] grid grid-cols-[60%_40%] gap-2 items-center justify-center h-full">
                <CardHeader className="text-center px-3 lg:px-20 lg:pr-0 py-16 pr-0 gap-y-3 lg:gap-y-14">
                  <CardTitle className="mx-auto text-3xl lg:text-4xl text-left font-medium">
                    {content.cards[2].title}
                  </CardTitle>
                  <div className="w-28 h-[2px] bg-[#D7F987] mt-7" />
                </CardHeader>
                <picture>
                  <source srcSet={content.cards[2].images[0]} type="image/webp"/>
                  <source srcSet={content.cards[2].images[1]} type="image/png"/>
                  <Image
                    src={content.cards[2].images[0]}
                    alt={content.cards[2].title}
                    loading="lazy"
                    width={205}
                    height={261}
                    className="mx-auto bg-[radial-gradient(#7D81D96E,transparent_70%)]"
                  />
                </picture>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </Section>
  )
}

const content = {
  sectionTitle: 'Learn more about Bitlauncher',
  cards: [
    {
      title: 'How to Participate in a Bitlauncher IDO?',
      paragraphs: [
        "A good place to start is: what is Bitlauncher? (We'll give you the brief version). Bitlauncher is a platform that connects young projects with early community members through initial decentralized offerings (IDOS). It provides a unique opportunity for investors to engage with up-and-coming tech innovations.",
        "By participating in an IDO on Bitlauncher, users can gain early access to tokens from new blockchain projects. This early access can potentially lead to significant benefits if the projects grow in value and popularity. Bitlauncher aims to democratize the investment process, making it accessible to a broader audience."
      ],
      images: [
        "/images/home/platform-circles.webp",
        "/images/home/platform-circles.png",
      ]
    },
    {
      title: 'How to buy the Bitlauncher $BC token?',
      paragraphs: [],
      images: [
        "/images/home/bc-coins.webp",
        "/images/home/bc-coins.png",
      ]
    },
    {
      title: 'What is an IDO (Initial Decentralized Offering)?',
      paragraphs: [],
      images: [
        "/images/home/glass.webp",
        "/images/home/glass.png",
      ]
    }
  ]
}
