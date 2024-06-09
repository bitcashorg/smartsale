import { LangProp } from '@/types/routing.type'
import Participate from '@/components/layout/footer/participate'
import dynamic from 'next/dynamic'

const DynamicNewsletter = dynamic(() => import('./newsletter') as any, {
  ssr: false
})

export function Footer({ lang }: LangProp) {
  return (
    <footer className="container flex w-full flex-1 flex-col gap-32 overflow-hidden px-4 py-16">
      <Participate lang={lang} />
      <DynamicNewsletter />
    </footer>
  )
}
