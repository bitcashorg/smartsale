import { Banner } from '@/components/shared/banner'
import { CommunityCard } from '@/components/shared/community-card'
import { getDictionary } from '@/dictionaries'
import { Lang } from '@/dictionaries/locales'
import Image from 'next/image'

export async function AboutBitlauncherPageLanding({
  content,
  params
}: AboutBitlauncherPageProps): Promise<JSX.Element> {
  const lang = params.lang
  const dict = await getDictionary(lang)
  return (
    <>
      <section className="w-full py-12 narrow-container md:py-24 lg:py-32">
        <div className="px-0 md:px-6 grid items-center justify-between gap-4 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-7xl">
              {content.title}
            </h2>
            <section className="leading-snug text-[#9395af]">
              Bitlauncher is a{' '}
              <b>pioneering launchpad</b>
              {' '}
              dedicated to transforming the landscape of artificial
              intelligence (AI) and cryptocurrency. We are on a mission to
              empower the next wave of AI innovation by providing
              open-source AI projects with equitable fundraising
              opportunities and decentralized organization through the use
              of blockchain technology.
              <br />
              <br />
              At Bitlauncher, we{' '}
              <b>
                combine the transformative powers of AI and cryptocurrency
              </b>
              {' '}
              to address the unique challenges faced by AI startups. By
              integrating tokenization and decentralized autonomous
              organizations (DAOs), we create a seamless synergy that
              enables these startups to overcome funding barriers,
              accelerate their growth, and harness global resources.
              <br />
              <br />
              Our platform is built on a foundation of{' '}
              <b className="leading-snug">
                transparency, inclusivity, and community-driven progress
              </b>
              . We foster a collaborative environment where developers,
              investors, and AI enthusiasts can come together to share
              resources, exchange ideas, and shape the future of technology.
              <br />
              <br />
            </section>
          </div>
          <div className="infopages-background infopages-background--about">
            <div className="absolute bottom-0 m-4">
              <CommunityCard />
            </div>
          </div>
        </div>
      </section>
      <Banner />
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
