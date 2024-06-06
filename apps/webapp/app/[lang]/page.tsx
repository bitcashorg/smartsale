import { Upcoming } from '@/components/routes/home/upcoming'
import { getProjects } from '@/lib/projects'
import { getDictionary } from '../dictionaries'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'

export default async function IndexPage({ params: { lang } }: IndexPageProps) {
  const dict = await getDictionary(lang)
  const projects = getProjects(dict)

  return (
    <div className="container !px-4 py-10 md:py-24">
      <Upcoming projects={projects} dict={dict} />
    </div>
  )
}

interface IndexPageProps {
  params: { lang: SiteLocale }
}
