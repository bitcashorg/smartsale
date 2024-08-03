import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import { CommunityCard } from '@/components/shared/community-card'

export function BgHeader({
  heading,
  subheading,
}: {
  heading: string
  subheading?: string
}) {
  return (
    <header className="relative top-0 z-0 flex flex-col items-center py-10 bg-center bg-cover md:pb-8 md:pt-24">
      <section className="w-full py-12 narrow-container md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-['Futura PT'] text-7xl tracking-tighter">
                <Balancer>{heading}</Balancer>
              </h2>
              <div className="font-['Futura PT'] text-start text-4xl font-medium leading-[42.35px] text-[#ff51ed]">
              {subheading}
              </div>
            </div>
            <div className="infopages-background">
              <div className="absolute bottom-0 m-4">
                <CommunityCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}
