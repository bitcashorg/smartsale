import { RecentArticles } from './recent'
import Participate from './participate'
import { FAQ } from './faq'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import dynamic from 'next/dynamic'
import { getDictionary } from '@/dictionaries'

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
    <footer className="container flex flex-col flex-1 w-full gap-32 px-4 py-16 overflow-hidden">
      <Participate lang={params.lang} dict={dict} />
      <FAQ lang={params.lang} />
      <RecentArticles lang={params.lang} />
      <DynamicNewsletter />
    </footer>
  )
}
