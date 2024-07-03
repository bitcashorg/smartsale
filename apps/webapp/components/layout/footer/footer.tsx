import { RecentArticles } from './recent'
import Participate from './participate'
import { FAQ } from './faq'
import dynamic from 'next/dynamic'
import { getDictionary } from '@/dictionaries'
import { LearnSection } from '@/components/_wip/learn-section'
import { WhyChooseUs } from '@/components/routes/home/why-choose-us'
import { Features } from '@/components/routes/home/features'
import { appConfig } from '@/lib/config'
import { Lang } from '@/dictionaries/locales'
import { BannerOne } from '@/components/_wip/banner-one'
import { FeatureOne } from '@/components/_wip/feature-one'
import { FeatureTwo } from '@/components/_wip/feature-two'
import { FeatureThree } from '@/components/_wip/feature-three'

const DynamicNewsletter = dynamic(() => import('./newsletter') as any, {
  ssr: false
})

export default async function Footer({ params }: { params: { lang: Lang } }) {
  const dict = await getDictionary(params.lang)
  return (
    <footer className="flex flex-col flex-1 w-full px-4 overflow-hidden">
      <div className="narrow-container">
        {appConfig.features.sections ? (
          <>
            <WhyChooseUs lang={params.lang} dict={dict} />
            <Features lang={params.lang} dict={dict} />
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
        {/* Call to action, how it works sections */}
        <Participate lang={params.lang} dict={dict} />
        {appConfig.features.sections ? (
          <>
            <LearnSection />
          </>
        ) : null}

        <FAQ lang={params.lang} dict={dict} />
        {/* Media and other  */}
        <RecentArticles lang={params.lang} />
      </div>
      <DynamicNewsletter />
    </footer>
  )
}
