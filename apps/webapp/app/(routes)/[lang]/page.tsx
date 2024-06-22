import { getProjects } from '@/lib/projects'
import { getDictionary } from '../../../dictionaries'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { HomeHero } from '@/components/routes/home/home-hero'

export default async function IndexPage({ params: { lang } }: IndexPageProps) {
  const dict = await getDictionary(lang)
  const projects = getProjects(dict)

  return (
    <div className="container !px-4 pt-10 md:pt-24">
      <HomeHero projects={projects} dict={dict} />
    </div>
  )
}

interface IndexPageProps {
  params: { lang: SiteLocale }
}
