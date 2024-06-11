import { LangProp } from '@/types/routing.type'
import Participate from '@/components/layout/footer/participate'
import dynamic from 'next/dynamic'
import { FAQ } from './faq'
import { RecentArticles } from './recents-articles'

const DynamicNewsletter = dynamic(() => import('./newsletter') as any, {
  ssr: false
})

export function Footer({ lang }: LangProp) {
  return (
    <footer className="container flex flex-col flex-1 w-full gap-32 px-4 py-16 overflow-hidden">
      <Participate lang={lang} />
      <RecentArticles lang={lang} />
      <FAQ lang={lang} />
      <DynamicNewsletter />
    </footer>
  )
}
