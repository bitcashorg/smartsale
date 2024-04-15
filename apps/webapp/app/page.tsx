import { Upcoming } from '@/components/routes/home/upcoming'
import { getProjects } from '@/lib/projects'

export default async function IndexPage() {
  // generate blur urls on server
  const projects = await getProjects()

  return <Upcoming projects={projects} />
}
