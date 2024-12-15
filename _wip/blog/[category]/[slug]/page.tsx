export const dynamic = 'force-dynamic'

import { generateShortLink } from '@/app/actions/general'
import { BlogPage } from '@/components/routes/blog/article'
import { generateMetadataFromSEO } from '@/lib/seo'
import { type Lang, getBlogArticle, locales } from '@smartsale/content'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export default async function ArticlePage(props: ArticlePageProps) {
  const {
    params: { lang, category, slug },
  } = props

  const data = await getBlogArticle({ lang, category, slug })
  if (!data) return notFound()

  const { blogContent, relatedBlogs } = data
  const canonicalUrl = `https://bitlauncher.ai/${lang}/${category}/${slug}`
  const dub = await generateShortLink(canonicalUrl)

  return (
    <BlogPage
    // blogContent={blogContent}
    // params={props.params}
    // relatedBlogs={relatedBlogs}
    // shortlink={dub.data?.shortLink || canonicalUrl}
    />
  )
}

export async function generateMetadata(
  props: ArticlePageProps,
): Promise<Metadata> {
  const {
    params: { lang, category, slug },
  } = props

  const data = await getBlogArticle({ lang, category, slug })

  const seoData = {
    title: '',
    description: '',
    ogType: 'website',
    ogImageUrl: '',
    twitterCard: 'summary_large_image',
  }

  return generateMetadataFromSEO(seoData)
}

export async function generateStaticParams(): Promise<ArticlePageParams[]> {
  // const params: ArticlePageParams[] = (
  //   await Promise.all(
  //     locales.map(async (lang): Promise<ArticlePageParams[]> => {
  //       const allArticles = await getAllArticles()
  //       if (!allArticles) throw new Error('sections not found')

  //       const staticParams: ArticlePageParams[] = allArticles.flatMap(
  //         ({ articles, category }) => {
  //           return articles.map((article) => ({
  //             slug: article.slug,
  //             lang,
  //             category,
  //           }))
  //         },
  //       )

  //       return staticParams
  //     }),
  //   )
  // ).flat() // Flatten the array of arrays into a single array

  // return params
  return []
}

type ArticlePageParams = { lang: Lang; category: string; slug: string }
export type ArticlePageProps = { params: ArticlePageParams }
