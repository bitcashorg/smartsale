import { BlogSections } from '@/components/routes/blog/blog-sections'
import { BgHeader } from '@/components/shared/bg-header'
import { generateMetadataFromSEO } from '@/lib/seo'
import { getBlogIndex } from '@smartsale/content'
import { type Lang, locales } from '@smartsale/content'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export default async function Page(props: CategoryPageProps) {
  const {
    params: { lang, category },
    searchParams: { topic },
  } = props

  const data = await getBlogIndex({ lang, category })
  if (!data) notFound()

  const { sections, pageSeo } = data
  if (!pageSeo) notFound()

  return (
    <section className="py-10">
      <BgHeader
        heading={'Blog Category Page'}
        subheading={''}
        className="!text-6xl [&_+_div]:md:!text-2xl [&_+_div]:md:!py-0"
        background="about"
      />
      <div className="narrow-container">
        <BlogSections sections={sections} lang={lang} category={category} />
      </div>
    </section>
  )
}

export async function generateStaticParams(): Promise<CategoryPageParams[]> {
  // const params: CategoryPageParams[] = (
  //   await Promise.all(
  //     locales.map(async (lang): Promise<CategoryPageParams[]> => {
  //       const data = await getBlogIndex({ lang })
  //       if (!data) throw 'sections not found'
  //       const categories = data.sections.map((section) => section.slug)
  //       return categories.map((category) => ({ lang, category }))
  //     }),
  //   )
  // ).flat()
  // return params
  return []
}

export async function generateMetadata(
  props: CategoryPageProps,
): Promise<Metadata> {
  const {
    params: { lang, category },
  } = props

  const pageSeo = await getBlogIndex({ lang, category })

  const seoData = {
    title: '',
    description: '',
    ogType: 'website',
    ogImageUrl: '',
    twitterCard: 'summary_large_image',
  }

  return generateMetadataFromSEO(seoData)
}

type CategoryPageParams = { lang: Lang; category: string }
export type CategoryPageProps = {
  params: CategoryPageParams
  searchParams: { topic?: string }
}
