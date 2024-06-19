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
    <footer className="container flex flex-col flex-1 w-full px-4 overflow-hidden">
      <Participate lang={params.lang} dict={dict} />
      <FAQ dict={dict} />
      <WhyChooseUs />
      <Features />
      <LearnSection />
      <RecentArticles lang={params.lang} />
      <DynamicNewsletter />
    </footer>
  )
}
