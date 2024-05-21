import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogCategoryLandingData, getPageSeoText } from '@/services/datocms'
import { generateMetadataFromSEO } from '@/lib/seo'
import { BlogSections } from '@/components/routes/blog/sections'

export default async function Page(props: any) {
  const {
    params: { lang, category }
  } = props

  const data = await getBlogCategoryLandingData(lang, category)

  if (!data) notFound()
  const { sections, pageSeo } = data

  return (
    <section>
      <header className="flex flex-col py-10 md:py-24 ">
        <h1 className="flex justify-center heading ">
          {pageSeo.description} <br />
        </h1>
        <h2 className="flex justify-center text-xl font-semibold">
          Bitlauncher {pageSeo.title} Articles
        </h2>
      </header>

      <main>
        <BlogSections sections={sections} />
      </main>
    </section>
  )
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const {
    params: { lang, category }
  } = props
  const locales = [lang]

  const pageSeo = await getPageSeoText(category, lang, locales)

  const seoData = {
    title: pageSeo.pageSeo?.title || '',
    description: pageSeo.pageSeo?.description || '',
    ogType: 'website',
    ogImageUrl: pageSeo.pageSeo?.image?.url || '',
    twitterCard: 'summary_large_image'
  }

  return generateMetadataFromSEO(seoData)
}
