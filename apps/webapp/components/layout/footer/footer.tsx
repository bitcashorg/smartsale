import Participate from '@/components/layout/footer/participate'
import dynamic from 'next/dynamic'

const DynamicNewsletter = dynamic(() => import('./newsletter') as any, {
  ssr: false
})

export function Footer() {
  return (
    <footer className="container flex w-full flex-1 flex-col gap-32 px-4 py-16">
      <Participate />
      <DynamicNewsletter />
    </footer>
  )
}
