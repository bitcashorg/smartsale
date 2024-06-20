import { RecentArticles } from './recent'
import Participate from './participate'
import { FAQ } from './faq'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import dynamic from 'next/dynamic'
import { getDictionary } from '@/dictionaries'
import { LearnSection } from '@/components/_wip/learn-section'
import { WhyChooseUs } from '@/components/routes/home/why-choose-us'
import { Features } from '@/components/routes/home/features'
import { Card } from '@/components/ui/card'

const DynamicNewsletter = dynamic(() => import('./newsletter') as any, {
  ssr: false
})

export default async function Footer({
  params
}: {
  params: { lang: SiteLocale }
}) {
  const dict = await getDictionary(params.lang)
  return (
    <footer className="container flex w-full flex-1 flex-col overflow-hidden px-4">
      <LearnSection />
      <WhyChooseUs lang={params.lang} dict={dict} />
      <Features lang={params.lang} dict={dict} />
      <Participate lang={params.lang} dict={dict} />
      <RecentArticles lang={params.lang} />
      <FAQ lang={params.lang} dict={dict} />
      <DynamicNewsletter />
    </footer>
  )
}
