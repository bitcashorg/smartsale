import type { CommonPageProps } from '@/types/routing.type'
import type { MetadataRoute } from 'next'

export default async function sitemap({
  params,
}: CommonPageProps): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://${process.env.NEXT_PUBLIC_APP_URL}/learn/batch-auctions`,
      lastModified: new Date(),
    },
  ]
}
