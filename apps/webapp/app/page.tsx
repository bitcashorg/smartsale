import { Upcoming } from '@/components/routes/home/upcoming'
import { getProjects } from '@/lib/projects'

export default async function IndexPage() {
  // generate blur urls on server
  const projects = await getProjects()

  return (
    <div className="container !px-4 py-10 md:py-24">
      <Upcoming projects={projects} />
    </div>
  )
}
