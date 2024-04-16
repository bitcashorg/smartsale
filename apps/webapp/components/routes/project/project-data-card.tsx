import { Project, ProjectWithAuction } from '@/lib/projects'
import { AuctionInfo } from '../auction/auction-info'
import { Button } from '@/components/ui/button'

export function ProjectDataCard({ project }: { project: Project }) {
  return (
    <div className="container relative z-10 flex size-full min-w-[95vw] flex-col items-center justify-between px-4 md:px-10 lg:flex-row">
      <div className="flex size-full min-h-[560px] max-w-screen-md flex-col justify-between rounded-xl border border-card/30 bg-card/60 px-8 py-6 backdrop-blur-lg md:px-11 md:py-8">
        <div className="mb-10 border-solid borber border-background">
          <h1 className="heading mb-0 pb-0 pl-4 !opacity-100">
            {project.title}
          </h1>
          <p className="paragraph pl-4 pt-10 text-xl font-semibold leading-tight tracking-wide !opacity-100">
            {project.pitch}
          </p>
        </div>

        <AuctionInfo project={project as ProjectWithAuction} />

        <Button className="mt-5 border border-solid border-white/50">
          Register for Presale
        </Button>
      </div>
    </div>
  )
}
