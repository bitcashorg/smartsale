import { getProjects } from '@/lib/projects'
import { getDictionary } from '../../../dictionaries'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { WhyChooseUs } from '@/components/routes/home/why-choose-us'
import { Features } from '@/components/routes/home/features'
import { HomeHero } from '@/components/routes/home/home-hero'

export default async function IndexPage({ params: { lang } }: IndexPageProps) {
  const dict = await getDictionary(lang)
  const projects = getProjects(dict)

  return (
    <div className="container !px-4 py-10 md:py-24">
      <HomeHero projects={projects} dict={dict} />
      <WhyChooseUs />
      <Features />
    </div>
  )
}

interface IndexPageProps {
  params: { lang: SiteLocale }
}
