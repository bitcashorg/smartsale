import { Metadata } from 'next'
import { getArticleSections, getPageSeoText } from '@/services/datocms'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { generateMetadataFromSEO } from '@/lib/seo'
import { BlogSections } from '@/components/routes/blog/sections'
import { notFound } from 'next/navigation'

export default async function BlogPage({ params }: BlogPageProps) {
  const sections = await getArticleSections(params.lang)
  if (!sections) notFound()

  return (
    <main>
      <h1 className="flex justify-center py-10 heading md:py-24">
        AI, Crypto & Startup Ventures
      </h1>
      <BlogSections sections={sections} lang={params.lang} />
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
