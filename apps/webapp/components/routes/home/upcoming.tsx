import { AuctionCard } from '@/components/routes/home/auction-card'
import { Section } from '@/components/shared/section'
import { Project } from '@/lib/projects'

export function Upcoming({ dict, projects }: UpcomingProps) {
  return (
    <Section heading={dict.home.upcomingHeading}>
      <div className="relative flex justify-center w-full text-center">
        <div className="absolute top-0 blur-effect-bg" />
      </div>
      <div className="grid self-center grid-cols-1 gap-[53px] narrow-container scroll-m-3 auto-rows-fr lg:grid-cols-3 lg:self-stretch">
        {projects.map((item, index) => (
          <AuctionCard
            key={`upcoming-auctions-item-${index}`}
            project={item}
            dict={dict}
          />
        ))}
      </div>
    </Section>
  )
}

interface UpcomingProps {
  dict: any
  projects: Project[]
}
