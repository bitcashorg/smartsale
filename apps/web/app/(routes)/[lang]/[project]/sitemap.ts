import { AVAILABLE_LANGS } from '@/lib/config'
import type { MetadataRoute } from 'next'
import { generateStaticParams } from './page'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await generateStaticParams()

  return projects.map((item) => ({
    url: `https://${process.env.NEXT_PUBLIC_APP_URL}/${item.project}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
    alternates: {
      // ? e.g.: { 'en': 'https://example.com/en/...', 'es': 'https://example.com/es/...', ... }
      languages: Object.fromEntries(
        AVAILABLE_LANGS.map((lang) => [
          lang,
          `https://${process.env.NEXT_PUBLIC_APP_URL}/${lang}/${item.project}`,
        ]),
      ),
    },
  }))
}
