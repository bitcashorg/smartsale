import { Metadata } from 'next'
import {
  getArticleSections,
  getPageSeoText,
  getRecentArticleSections
} from '@/services/datocms'
import { generateMetadataFromSEO } from '@/lib/seo'
import { BlogSections } from '@/components/routes/blog/sections'
import { notFound } from 'next/navigation'
import { Lang } from '@/dictionaries/locales'
import { HeroSection } from '@/components/routes/blog/hero-section/index'

export default async function BlogPage({ params }: BlogPageProps) {
  const sections = await getArticleSections(params.lang)
  const recent = await getRecentArticleSections()
  if (!sections) notFound()

  return (
    <main>
      <h1 className="heading flex justify-center py-10 md:py-24">
        AI, Crypto & Startup Ventures
      </h1>
      <HeroSection recent={recent} lang={params.lang} />
      <BlogSections sections={sections} lang={'en'} />
    </main>
  )
}

export async function generateMetadata({
  params
}: BlogPageProps): Promise<Metadata> {
  const pageSeo = await getPageSeoText('home')
  const seoData = {
    title: pageSeo.pageSeo?.title || '',
    description: pageSeo.pageSeo?.description || '',
    ogType: 'website',
    ogImageUrl: pageSeo.pageSeo?.image?.url || '',
    twitterCard: 'summary_large_image'
  }

  return generateMetadataFromSEO(seoData)
}

type BlogPageProps = { params: { lang: Lang } }
