import { CommonPageProps } from '@/types/routing.type'
import { MetadataRoute } from 'next'

export default function sitemap({
  params
}: CommonPageProps): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.VERCEL_URL}/${params.lang}/learn/security`,
      lastModified: new Date()
    }
  ]
}
