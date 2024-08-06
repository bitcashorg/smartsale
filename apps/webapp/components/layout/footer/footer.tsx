import { LearnSection } from '@/components/layout/footer/learn-section'
import { getDictionary } from '@/dictionaries'
import { Lang } from '@/dictionaries/locales'
import { appConfig } from '@/lib/config'
import dynamic from 'next/dynamic'
import { FAQ } from './faq'
import Participate from './participate'
import { RecentArticles } from './recent'

const DynamicNewsletter = dynamic(() => import('./newsletter') as any, {
  ssr: false
})

export default async function Footer({ params }: { params: { lang: Lang } }) {
  const dict = await getDictionary(params.lang)
  return (
    <footer className="flex flex-col w-full">
      <div className="narrow-container">
        {/* Call to action, how it works sections */}
        <Participate lang={params.lang} dict={dict} />
        {appConfig.features.learn ? (
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
