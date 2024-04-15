import Participate from '@/components/layout/participate'
import dynamic from 'next/dynamic'

const DynamicNewsletter = dynamic(() => import('./newsletter') as any, {
  ssr: false
})
export function Footer() {
  return (
    <footer className="container flex flex-col flex-1 w-full gap-32 px-4 py-16">
      <Participate />
      <DynamicNewsletter />
    </footer>
  )
}
