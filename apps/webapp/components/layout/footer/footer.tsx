import { RecentArticles } from './recent'
import Participate from './participate'
import { FAQ } from './faq'
import dynamic from 'next/dynamic'
import { getDictionary } from '@/dictionaries'
import { LearnSection } from '@/components/layout/footer/learn-section'
import { appConfig } from '@/lib/config'
import { Lang } from '@/dictionaries/locales'

const DynamicNewsletter = dynamic(() => import('./newsletter') as any, {
  ssr: false
})

export default async function Footer({ params }: { params: { lang: Lang } }) {
  const dict = await getDictionary(params.lang)
  return (
    <footer className="flex flex-col flex-1 w-full overflow-hidden">
      <div className="narrow-container">
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
