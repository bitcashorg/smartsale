import { MetadataRoute } from 'next'
import { getDictionary } from '@/dictionaries'
import { getProjects } from '@/lib/projects'
import { ProjectPageProps } from './page'

export default async function sitemap({
  params
}: ProjectPageProps): Promise<MetadataRoute.Sitemap> {
  const dict = await getDictionary(params.lang)
  const projects = await getProjects(dict)

  return projects.map(project => ({
    url: `${process.env.VERCEL_URL}/${params.lang}/${project.slug}/presale`,
    lastModified: new Date()
  }))
}
