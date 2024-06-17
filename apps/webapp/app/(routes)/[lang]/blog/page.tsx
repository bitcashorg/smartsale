import { Metadata } from 'next'
import {
  getArticleSections,
  getPageSeoText,
  getRecentArticleSections
} from '@/services/datocms'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { generateMetadataFromSEO } from '@/lib/seo'
import { BlogSections } from '@/components/routes/blog/sections'
import { BlogHero } from '@/components/routes/blog/blog-hero'

import { notFound } from 'next/navigation'
// import { BlogHero } from '@/components/routes/blog/blog-hero'
// import { HeroCard } from '@/components/routes/blog/hero-main-card'
// import { HeroSubCard } from '@/components/routes/blog/hero-subcard'

export default async function BlogPage({ params }: BlogPageProps) {
  const sections = await getArticleSections(params.lang)
  return (
    <main>
      <h2 className="flex justify-center py-10 text-3xl font-extrabold tracking-tight sm:text-4xl md:py-24">
        AI, Crypto & Startup Ventures
      </h2>
      <BlogHero />
      <BlogSections sections={sections} lang={'en'} />
    </main>
  )
}

export async function generateMetadata({
  params
}: BlogPageProps): Promise<Metadata> {
  const locale = params.lang as SiteLocale
  const pageSeo = await getPageSeoText('home', locale, [locale])
  const seoData = {
    title: pageSeo.pageSeo?.title || '',
    description: pageSeo.pageSeo?.description || '',
    ogType: 'website',
    ogImageUrl: pageSeo.pageSeo?.image?.url || '',
    twitterCard: 'summary_large_image'
  }

  return generateMetadataFromSEO(seoData)
}

type BlogPageProps = { params: { lang: SiteLocale } }
