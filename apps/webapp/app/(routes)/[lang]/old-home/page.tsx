import { getProjects } from '@/lib/projects'
import { getDictionary } from '@/dictionaries'
import { HomeHero } from '@/components/routes/home/home-hero'
import { Lang } from '@/dictionaries/locales'
import { WhyChooseUs } from '@/components/routes/home/why-choose-us'
import { Features } from '@/components/routes/home/features'
import { appConfig } from '@/lib/config'
import { BannerOne } from '@/components/_wip/banner-one'
import { FeatureOne } from '@/components/_wip/feature-one'
import { FeatureTwo } from '@/components/_wip/feature-two'
import { FeatureThree } from '@/components/_wip/feature-three'

export default async function IndexPage({ params: { lang } }: IndexPageProps) {
  const dict = await getDictionary(lang)
  const projects = getProjects(dict)

  return (
    <div className="container !px-4 pt-10 md:pt-24">
      <HomeHero projects={projects} dict={dict} />

      <div className="narrow-container">
        {appConfig.features.sections ? (
          <>
            <WhyChooseUs lang={lang} dict={dict} />
            <Features lang={lang} dict={dict} />
          </>
        ) : null}

        {appConfig.features.explorations ? (
          <>
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
