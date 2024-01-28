import { ProjectWithAuction } from '@/lib/projects'

export function AuctionInfo({ project }: { project: ProjectWithAuction }) {
  return (
    <div className="flex items-center my-2">
      <div className="flex-1 text-center">
        <h2 className="mt-2 text-xl">Ticker: {project.token.symbol}</h2>
      </div>
      <div className="flex-1 text-center">
        <p className="mt-2 text-xl">Current Price: $3.75</p>
      </div>
    </div>
  )
}
