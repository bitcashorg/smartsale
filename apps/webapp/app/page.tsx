import { Upcoming } from '@/components/routes/home/upcoming'
import { projects } from '@/lib/projects'

export default async function IndexPage() {
  return (
    <div className="container !px-4 py-10 md:py-24">
      <Upcoming projects={projects} />
    </div>
  )
}
