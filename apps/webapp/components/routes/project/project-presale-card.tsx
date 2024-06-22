import { Project, ProjectWithAuction } from '@/lib/projects'
import { AuctionInfo } from '../auction/auction-info'

export function ProjectPresaleCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col justify-between max-w-screen-md px-3 py-10 border size-full border-card/30 bg-card/60 backdrop-blur-lg md:rounded-xl md:p-10">
      <AuctionInfo project={project as ProjectWithAuction} />
    </div>
  )
}
