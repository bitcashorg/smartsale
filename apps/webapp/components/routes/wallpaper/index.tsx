import { CommunityCard } from '@/components/shared/community-card'
import { HeroContent } from '@/components/shared/hero-content'
import { getDictionary } from '@/dictionaries'
import { Lang } from '@/dictionaries/locales'

export async function WhitepaperPageLanding({
  params: { lang }
}: WhitepaperPageProps) {
  const dict = await getDictionary(lang)
  const paragraphs = [
    {
      segments: [
        { text: 'Our platform stands at the exciting crossroads of ' },
        { text: 'artificial intelligence (AI)', isBold: true },
        { text: ' and ' },
        { text: 'cryptocurrency', isBold: true },
        { text: ', aiming to revolutionize how ' },
        { text: 'open-source AI startups', isBold: true },
        { text: ' secure funding and organize. We\'re creating a ' },
        { text: 'launchpad', isBold: true },
        { text: ' that combines the power of ' },
        { text: 'tokenization', isBold: true },
        { text: ' with the innovative structure of ' },
        { text: 'decentralized autonomous organizations (DAOs)', isBold: true },
        { text: '. This approach isn\'t just about technology—it\'s about ' },
        { text: 'democratizing AI development', isBold: true },
        { text: ' and ensuring everyone can be part of this tech revolution.' }
      ]
    },
    {
      segments: [
        { text: 'Many AI projects today struggle to find the ' },
        { text: 'funds', isBold: true },
        { text: ' they need to grow, and too often, crypto\'s potential is boxed into narrow financial uses. We\'re changing that by using cryptocurrency to create a ' },
        { text: 'dynamic funding ecosystem', isBold: true },
        { text: ' that supports AI development with tools like ' },
        { text: 'batch auctions', isBold: true },
        { text: ', which ensure ' },
        { text: 'fair', isBold: true },
        { text: ' and ' },
        { text: 'transparent', isBold: true },
        { text: ' funding rounds, and DAOs, which allow for ' },
        { text: 'agile', isBold: true },
        { text: ' and ' },
        { text: 'democratic', isBold: true },
        { text: ' project management.' }
      ]
    },
    {
      segments: [
        { text: 'Our economic model is as forward-thinking as our technology. With a ' },
        { text: 'mint-and-burn tokenomics strategy', isBold: true },
        { text: ', we ensure our platform remains ' },
        { text: 'economically viable', isBold: true },
        { text: ' and ' },
        { text: 'rewarding for contributors', isBold: true },
        { text: '. This model ' },
        { text: 'aligns everyone\'s interests', isBold: true },
        { text: ' and supports the growth of our ' },
        { text: 'utility token\'s value', isBold: true },
        { text: ' alongside our platform.' }
      ]
    },
    {
      segments: [
        { text: 'Join us as we pave the way for a future where AI and cryptocurrency work hand in hand to foster ' },
        { text: 'transparent', isBold: true },
        { text: ', ' },
        { text: 'decentralized', isBold: true },
        { text: ', and ' },
        { text: 'community-driven innovation', isBold: true },
        { text: '. Dive into our launchpad and be part of building the next generation of ' },
        { text: 'global tech pioneers', isBold: true },
        { text: '.' }
      ]
    }
  ]

  return (
    <>
      <section className="w-full py-12 narrow-container md:py-24 lg:py-32">
        <div className="container px-0 md:px-6">
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-['Futura PT'] text-7xl tracking-tighter">
                Whitepaper
              </h2>
              <HeroContent paragraphs={paragraphs} />
            </div>
            <div className="relative flex items-center justify-center">
              <div className="infopages-background infopages-background--whitepaper">
                <div className="absolute bottom-0 m-4">
                  <CommunityCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

interface WhitepaperPageProps {
  params: { lang: Lang }
}