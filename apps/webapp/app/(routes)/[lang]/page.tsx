import { BannerOne } from '@/components/_wip/banner-one'
import { Categories } from '@/components/_wip/categories'
import { FeatureOne } from '@/components/_wip/feature-one'
import { FeatureThree } from '@/components/_wip/feature-three'
import { FeatureTwo } from '@/components/_wip/feature-two'
import { NewHomeHero } from '@/components/routes/home/hero/index'
import { getDictionary } from '@/dictionaries'
import type { Lang } from '@/dictionaries/locales'
import { appConfig } from '@/lib/config'
import { getProjects } from '@/lib/projects'
import dynamic from 'next/dynamic'

const DynamicFeatures = dynamic(
  () => import('@/components/routes/home/features').then((mod) => mod.Features),
  { ssr: false },
)

const DynamicUpcoming = dynamic(
  () => import('@/components/routes/home/upcoming').then((mod) => mod.Upcoming),
  { ssr: false },
)

const DynamicWhyChooseUs = dynamic(
  () =>
    import('@/components/routes/home/why-choose-us').then(
      (mod) => mod.WhyChooseUs,
    ),
  { ssr: false },
)

export default async function IndexPage({ params: { lang } }: IndexPageProps) {
  const dict = await getDictionary(lang)
  const projects = getProjects(dict)

  return (
    <div className="container max-w-[100vw] !overflow-hidden !px-4">
      <NewHomeHero />
      <DynamicUpcoming projects={projects} dict={dict} />

      <div className="narrow-container">
        {appConfig.features.sections ? (
          <>
            <DynamicFeatures lang={lang} dict={dict} />
            <DynamicWhyChooseUs lang={lang} dict={dict} />
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
