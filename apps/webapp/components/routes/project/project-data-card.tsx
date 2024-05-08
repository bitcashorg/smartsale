import { Project, ProjectWithAuction } from '@/lib/projects'
import { AuctionInfo } from '../auction/auction-info'
import { Button } from '@/components/ui/button'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

export function ProjectDataCard({ project }: { project: Project }) {
  return (
    <div className="container relative z-10 flex size-full min-w-[95vw] flex-col items-center justify-between px-0 lg:flex-row">
      <div className="flex size-full min-h-[560px] max-w-screen-md flex-col justify-between border border-card/30 bg-card/60 px-3 py-10 backdrop-blur-lg md:rounded-xl md:px-11 md:py-8">
        <div className="mb-10 border-solid borber border-background">
          <h1 className="heading mb-0 pb-0 pl-4 !opacity-100">
            {project.title}
          </h1>
          <p className="paragraph pl-4 pt-10 text-xl font-semibold leading-tight tracking-wide !opacity-100">
            {project.pitch}
          </p>
        </div>

        <AuctionInfo project={project as ProjectWithAuction} />

        <DynamicAddressForm projectId={project.id} />
      </div>
    </div>
  )
}

const DynamicAddressForm = dynamic(
  () => import('./register-address-form').then(mod => mod.RegisterAddressForm),
  {
    ssr: false,
    loading: () => <Button>Register</Button>
  }
)
