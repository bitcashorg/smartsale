import { Metadata } from 'next'
import { getArticleSections, getPageSeoText } from '@/services/datocms'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { generateMetadataFromSEO } from '@/lib/seo'
import { BlogSections } from '@/components/routes/blog/sections'

export default async function BlogPage(props: any) {
  const sections = await getArticleSections(props.params.lang as SiteLocale)
  return (
    <main>
      <h1 className="flex justify-center py-10 heading md:py-24">
        AI, Crypto & Startup Ventures.
      </h1>
      <BlogSections sections={sections} />
    </main>
  )
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const locale = props.params.locale as SiteLocale
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
