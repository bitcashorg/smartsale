import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getArticleSections,
  getBlogCategoryLandingData,
  getPageSeoText
} from '@/services/datocms'
import { generateMetadataFromSEO } from '@/lib/seo'
import { BlogSections } from '@/components/routes/blog/sections'
import { Lang, locales } from '@/dictionaries/locales'
import Image from 'next/image'
import { BgHeader } from '@/components/shared/bg-header'

export default async function Page(props: CategoryPageProps) {
  const {
    params: { lang, category }
  } = props

  const data = await getBlogCategoryLandingData(lang, category)
  if (!data) notFound()

  const { sections, pageSeo } = data
  if (!pageSeo) notFound()

  return (
    <>
      <BgHeader
        heading={pageSeo.description}
        subheading={`Bitlauncher ${pageSeo.title} Articles`}
        imageSrc="/images/blog/temp-bg-concept.webp"
      />

      <main className="narrow-container">
        <BlogSections sections={sections} lang={lang} category={category} />
      </main>
    </>
  )
}

export async function generateStaticParams(): Promise<CategoryPageParams[]> {
  const params: CategoryPageParams[] = (
    await Promise.all(
      locales.map(async (lang): Promise<CategoryPageParams[]> => {
        const sections = await getArticleSections(lang)
        if (!sections) throw 'sections not found'
        const categories = sections.map(section => section.slug)
        return categories.map(category => ({ lang, category }))
      })
    )
  ).flat()
  return params
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const {
    params: { lang, category }
  } = props

  const pageSeo = await getPageSeoText(category)

  const seoData = {
    title: pageSeo?.pageSeo?.title || '',
    description: pageSeo?.pageSeo?.description || '',
    ogType: 'website',
    ogImageUrl: pageSeo?.pageSeo?.image?.url || '',
    twitterCard: 'summary_large_image'
  }

  return generateMetadataFromSEO(seoData)
}

type CategoryPageParams = { lang: Lang; category: string }
type CategoryPageProps = { params: CategoryPageParams }
