import { Banner } from '@/components/shared/banner'
import { CommunityCard } from '@/components/shared/community-card'
import { getDictionary } from '@/dictionaries'
import { Lang } from '@/dictionaries/locales'
import Image from 'next/image'
import { LearnSection } from '@/components/layout/section/learn-section'
import StepsSection from '@/components/layout/section/steps-section'

export async function AboutBitlauncherPageLanding({
  content,
  params
}: AboutBitlauncherPageProps): Promise<JSX.Element> {
  const lang = params.lang
  const dict = await getDictionary(lang)
  return (
    <>
      <section className="narrow-container pt-[80]">
        <div className="grid items-center justify-between gap-4 px-0 pb-[80px] md:px-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="sectionsHeading">{content.title}</h2>
            <section className="text-[18px] font-normal leading-normal opacity-60">
              {content.paragraph}
              <br />
              <br />
              {content.paragraph2}
              <br />
              <br />
              {content.paragraph3}
            </section>
          </div>
          <div className="infopages-background infopages-background--about">
            <div className="absolute bottom-0 m-4">
              <CommunityCard />
            </div>
          </div>
        </div>
        <Banner />
        <StepsSection lang={lang} dict={dict} />
        <LearnSection />
      </section>
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
  paragraph: React.ReactNode
  paragraph2: React.ReactNode
  paragraph3: React.ReactNode
  image: Image
}

interface AboutBitlauncherPageProps {
  content: AboutBitlauncherPageContent
  params: { lang: Lang }
}
