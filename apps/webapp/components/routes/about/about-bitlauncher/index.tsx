import { Features } from '@/components/routes/home/features'
import { WhyChooseUs } from '@/components/routes/home/why-choose-us'
import { Banner } from '@/components/shared/banner'
import { CommunityCard } from '@/components/shared/community-card'
import { HeroContent } from '@/components/shared/hero-content'
import { getDictionary } from '@/dictionaries'
import { Lang } from '@/dictionaries/locales'
import Image from 'next/image'

export async function AboutBitlauncherPageLanding({
  content,
  params
}: AboutBitlauncherPageProps): Promise<JSX.Element> {
  const lang = params.lang
  const dict = await getDictionary(lang)
  const paragraphs = [
    {
      segments: [
        { text: 'Bitlauncher is a ' },
        { text: 'pioneering launchpad', isBold: true },
        { text: ' dedicated to transforming the landscape of artificial intelligence (AI) and cryptocurrency. We are on a mission to empower the next wave of AI innovation by providing open-source AI projects with equitable fundraising opportunities and decentralized organization through the use of blockchain technology.' }
      ]
    },
    {
      segments: [
        { text: 'At Bitlauncher, we ' },
        { text: 'combine the transformative powers of AI and cryptocurrency', isBold: true },
        { text: ' to address the unique challenges faced by AI startups. By integrating tokenization and decentralized autonomous organizations (DAOs), we create a seamless synergy that enables these startups to overcome funding barriers, accelerate their growth, and harness global resources.' }
      ]
    },
    {
      segments: [
        { text: 'Our platform is built on a foundation of ' },
        { text: 'transparency, inclusivity, and community-driven progress', isBold: true },
        { text: '. We foster a collaborative environment where developers, investors, and AI enthusiasts can come together to share resources, exchange ideas, and shape the future of technology.' }
      ]
    }
  ]

  return (
    <>
      <section className="w-full py-12 narrow-container md:py-24 lg:py-32">
        <div className="container px-0 md:px-6">
          <div className="grid items-center gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-['Futura PT'] text-7xl tracking-tighter">
                {content.title}
              </h2>
              <HeroContent paragraphs={paragraphs} />
            </div>
            <div className="infopages-background infopages-background--about">
              <div className="absolute bottom-0 m-4">
                <CommunityCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <div className="narrow-container">
        <Features lang={params.lang} dict={dict} />
        <WhyChooseUs lang={params.lang} dict={dict} />
      </div>
    </>
  )
}

interface Image {
  alt: string
  src: string
  width: number
  height: number
}

export interface AboutBitlauncherPageContent {
  title: string
  description: string
  image: Image
}

interface AboutBitlauncherPageProps {
  content: AboutBitlauncherPageContent
  params: { lang: Lang }
}