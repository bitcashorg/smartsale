import { CommonPageProps } from '@/types/routing.type'
import { MetadataRoute } from 'next'

export default async function sitemap({
  params
}: CommonPageProps): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://${process.env.VERCEL_URL}/${params.lang}/legal/privacy`,
      lastModified: new Date()
    }
  ]
}
