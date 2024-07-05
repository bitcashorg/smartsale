import { AuctionCard } from '@/components/routes/home/auction-card'
import { Section } from '@/components/shared/section'
import { Project } from '@/lib/projects'

export function Upcoming({ dict, projects }: UpcomingProps) {
  return (
    <Section heading={dict.home.upcomingHeading}>
      <div
        className="narrow-container grid scroll-m-3 auto-rows-fr grid-cols-1 gap-6 self-center lg:grid-cols-3 lg:self-stretch"
        key="upcoming-auctions-description-container"
      >
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
