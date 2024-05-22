import { locales } from '@/app/dictionaries/locales'
import { getProjectBySlug, projects } from '@/lib/projects'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { Metadata } from 'next'

export default function ProjectPagesLayout({ children }: ProjectPageProps) {
  return children
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.project)

  return {
    title: project?.title,
    openGraph: {
      images: [project?.heroImage || '']
    }
  }
}
interface ProjectPageProps {
  children: React.ReactNode
  params: ProjectPageParams
}
type ProjectPageParams = { project: string; lang: SiteLocale }
