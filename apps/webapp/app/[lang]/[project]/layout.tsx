import { getProjectBySlug } from '@/lib/projects'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { Metadata } from 'next'

export default function ProjectPagesLayout({ children }: ProjectPageProps) {
  return children
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.project, params.lang)

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
