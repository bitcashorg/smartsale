import { CommonPageProps } from '@/types/routing.type'
import { MetadataRoute } from 'next'

export default function sitemap({
  params
}: CommonPageProps): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${process.env.VERCEL_URL}/${params.lang}/in/early-access`,
      lastModified: new Date()
    }
  ]
}
