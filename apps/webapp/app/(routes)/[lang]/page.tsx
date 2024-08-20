import { BannerOne } from '@/components/_wip/banner-one'
import { Categories } from '@/components/_wip/categories'
import { FeatureOne } from '@/components/_wip/feature-one'
import { FeatureThree } from '@/components/_wip/feature-three'
import { FeatureTwo } from '@/components/_wip/feature-two'
import { RecentArticles } from '@/components/layout/section/article-section'
import { FAQ } from '@/components/layout/section/faq-section'
import { LearnSection } from '@/components/layout/section/learn-section'
import StepsSection from '@/components/layout/section/steps-section'
import { Features } from '@/components/routes/home/features'
import { NewHomeHero } from '@/components/routes/home/hero/index'
import { Upcoming } from '@/components/routes/home/upcoming'
import { WhyChooseUs } from '@/components/routes/home/why-choose-us'
import { getDictionary } from '@/dictionaries'
import { Lang } from '@/dictionaries/locales'
import { appConfig } from '@/lib/config'
import { getProjects } from '@/lib/projects'

export default async function IndexPage({ params: { lang } }: IndexPageProps) {
  const dict = await getDictionary(lang)
  const projects = getProjects(dict)

  return (
    <div className="container max-w-[100vw] !overflow-hidden !px-4">
      <NewHomeHero />
      <Upcoming projects={projects} dict={dict} />

      <div className="narrow-container">
        {appConfig.features.sections ? (
          <>
            <Features lang={lang} dict={dict} />
            <WhyChooseUs lang={lang} dict={dict} />
            <StepsSection lang={lang} dict={dict} />
            <LearnSection />
            <RecentArticles lang={lang} />
            <FAQ lang={lang} dict={dict} />
          </>
        ) : null}

        {appConfig.features.explorations ? (
          <>
            <Categories />
            <BannerOne />
            <FeatureOne />
            <FeatureTwo />
            <FeatureThree />
          </>
        ) : null}
      </div>
    </div>
  )
}

interface IndexPageProps {
  params: { lang: Lang }
}
