import { Project, ProjectWithAuction } from '@/lib/projects'
import { AuctionInfo } from '../auction/auction-info'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'

export function ProjectDataCard({ project }: { project: Project }) {
  return (
    <div className="flex size-full max-w-screen-md flex-col justify-between border border-card/30 bg-card/60 px-3 py-10 backdrop-blur-lg md:rounded-xl md:p-10">
      <AuctionInfo project={project as ProjectWithAuction} />

      {/* <DynamicAddressForm projectId={project.id} /> */}
    </div>
  )
}

// const DynamicAddressForm = dynamic(
//   () => import('./register-address-form').then(mod => mod.RegisterAddressForm),
//   {
//     ssr: false,
//     loading: () => <Button>Register</Button>
//   }
// )
