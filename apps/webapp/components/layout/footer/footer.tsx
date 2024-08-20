import { LearnSection } from '@/components/layout/section/learn-section'
import { getDictionary } from '@/dictionaries'
import { Lang } from '@/dictionaries/locales'
import { appConfig } from '@/lib/config'
import dynamic from 'next/dynamic'
import { FAQ } from '../section/faq-section'
import Participate from '../section/steps-section'
import { RecentArticles } from '../section/article-section'

const DynamicNewsletter = dynamic(() => import('./newsletter') as any, {
  ssr: false
})

export default async function Footer({ params }: { params: { lang: Lang } }) {
  const dict = await getDictionary(params.lang)
  return (
    <footer className="flex flex-col w-full">
      <DynamicNewsletter />
    </footer>
  )
}
