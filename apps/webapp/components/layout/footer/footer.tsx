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
            <LearnSection />
            <WhyChooseUs lang={params.lang} dict={dict} />
            <Features lang={params.lang} dict={dict} />
          </>
        ) : null}
        <Participate lang={params.lang} dict={dict} />
        <RecentArticles lang={params.lang} />
        <FAQ lang={params.lang} dict={dict} />
      </div>
      <DynamicNewsletter />
    </footer>
  )
}
