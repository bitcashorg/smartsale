import type { Metadata } from 'next'

type OgType =
  | 'website'
  | 'article'
  | 'book'
  | 'profile'
  | 'music.song'
  | 'music.album'
  | 'music.playlist'
  | 'music.radio_station'
  | 'video.movie'
  | 'video.episode'
  | 'video.tv_show'
  | 'video.other'

type TwitterCard = 'summary' | 'summary_large_image' | 'player' | 'app'

interface PageSEO {
  title: string
  description: string
  ogType: string
  ogImageUrl?: string
  twitterCard: string
}

export const generateMetadataFromSEO = (
  pageSeo: PageSEO,
  currentUrl?: string,
): Metadata => {
  const url =
    currentUrl || process.env.NEXT_PUBLIC_VERCEL_URL || 'https://bitlauncher.ai'
  return {
    title: pageSeo.title || '',
    description: pageSeo.description || '',
    openGraph: {
      type: pageSeo.ogType as OgType,
      title: pageSeo.title,
      description: pageSeo.description,
      url: url,
      images: pageSeo.ogImageUrl ? [{ url: pageSeo.ogImageUrl }] : [],
    },
    twitter: {
      card: pageSeo.twitterCard as TwitterCard,
      site: url,
      title: pageSeo.title,
      description: pageSeo.description,
      images: pageSeo.ogImageUrl ? [pageSeo.ogImageUrl] : [],
    },
  }
}
