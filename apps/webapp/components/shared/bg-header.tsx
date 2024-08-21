import { CommunityCard } from '@/components/shared/community-card'
import Balancer from 'react-wrap-balancer'

export function BgHeader({
  heading,
  subheading,
  imageSrc
}: {
  heading: string
  subheading?: string
  imageSrc: string
}) {
  return (
    <header className="relative top-0 z-0 flex flex-col items-center bg-center bg-cover">
      <section className="w-full py-10 narrow-container">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-[87px] leading-normal font-normal">
                <Balancer>{heading}</Balancer>
              </h2>
              <div className="text-start text-[35px] font-medium leading-[42.35px] text-[#ff51ed]">
                {subheading}
              </div>
            </div>
            <div className="infopages-background infopages-background--security">
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
