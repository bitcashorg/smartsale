import { getProjectBySlug } from '@/lib/projects'
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
      images: [project?.heroImage.src || '']
    }
  }
}
interface ProjectPageProps {
  children: React.ReactNode
  params: { project: string }
}
