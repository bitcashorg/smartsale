import { projects } from '@/lib/projects'
import { AuctionCard } from './home/auction-card'

export function Upcoming() {
  return (
    <div className="py-10">
      <h2 className="mb-6 text-3xl font-bold">Upcoming on Auctions</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 scroll-m-3">
        {projects.map((item, index) => (
          <AuctionCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
