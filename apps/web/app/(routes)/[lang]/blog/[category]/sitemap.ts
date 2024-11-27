import { AVAILABLE_LANGS } from '@/lib/config'
import { getArticleSections } from '@/services/datocms'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let sections = []
  try {
    sections = await getArticleSections('en')
  } catch (error) {
    return []
  }

  const categories = sections.map((section) => section.slug)

  return categories.map((category) => ({
    url: `https://${process.env.NEXT_PUBLIC_APP_URL}/blog/${category}`,
    lastModified: new Date(),
    priority: 0.7,
    alternates: {
      // ? e.g.: { 'en': 'https://example.com/en/...', 'es': 'https://example.com/es/...', ... }
      languages: Object.fromEntries(
        AVAILABLE_LANGS.map((lang) => [
          lang,
          `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}/blog/${category}`,
        ]),
      ),
    },
  }))
}
