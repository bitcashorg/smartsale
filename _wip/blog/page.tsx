import { BlogSections } from '@/components/routes/blog/blog-sections'
import { HeroSection } from '@/components/routes/blog/hero-section/index'
import { generateMetadataFromSEO } from '@/lib/seo'
import { getBlogIndex, getRecentArticles } from '@smartsale/content'
import type { Lang } from '@smartsale/content'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export default async function BlogPage({ params }: BlogPageProps) {
  const data = await getBlogIndex({ lang: params.lang })
  const recent = await getRecentArticles()
  if (!data) notFound()

  return (
    <div className="narrow-container">
      <header>
        <h1 className="heading flex justify-center py-10 md:py-24">
          AI, Crypto & Startup Ventures
        </h1>
      </header>
      <main>
        <HeroSection recent={recent} lang={params.lang} />
        <BlogSections sections={data.sections} lang={'en'} />
      </main>
    </div>
  )
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  // const pageSeo = await getPageSeoText('home')
  // const seoData = {
  //   title: pageSeo.pageSeo?.title || '',
  //   description: pageSeo.pageSeo?.description || '',
  //   ogType: 'website',
  //   ogImageUrl: pageSeo.pageSeo?.image?.url || '',
  //   twitterCard: 'summary_large_image',
  // }
  const seoData = {
    title: 'Blog',
    description: 'Blog',
    ogType: 'website',
    ogImageUrl: '',
    twitterCard: 'summary_large_image',
  }

  return generateMetadataFromSEO(seoData)
}

type BlogPageProps = { params: { lang: Lang } }
