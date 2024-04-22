import { Upcoming } from '@/components/routes/home/upcoming'
import { getProjects } from '@/lib/projects'

export default async function IndexPage() {
  // generate blur urls on server
  const projects = await getProjects()

  return (
    <div className="container lg:p-0 md:p-0 p-[0.75rem]">
      <Upcoming projects={projects} />
    </div>
  )
}
