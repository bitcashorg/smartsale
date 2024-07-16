import { MetadataRoute } from 'next'
import { getArticleSections } from '@/services/datocms'
import { CategoryPageProps } from './page'

export default async function sitemap(
  props: CategoryPageProps
): Promise<MetadataRoute.Sitemap> {
  const {
    params: { lang }
  } = props
  const sections = await getArticleSections(lang)
  const categories = sections.map(section => section.slug)

  return categories.map(category => ({
    url: `${process.env.VERCEL_URL}/${lang}/blog/${category}`,
    lastModified: new Date()
  }))
}
