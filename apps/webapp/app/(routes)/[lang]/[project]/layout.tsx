import { getDictionary } from '@/dictionaries'
import { ProjectPageProps, ProjectPagePropsWithChildren } from '@/types/routing.type'
import { getProjectBySlug } from '@/lib/projects'
import { Metadata } from 'next'

export default function ProjectPagesLayout({ children }: ProjectPagePropsWithChildren) {
  return children
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  const project = await getProjectBySlug(params.project, dict)

  return {
    title: project?.title,
    openGraph: {
      images: [project?.heroImage || '']
    }
  }
}
