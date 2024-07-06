import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogArticleData } from '@/services/datocms'
import { getBlogCategory } from '@/services/datocms/datacms-blog-category.service'
import { generateMetadataFromSEO } from '@/lib/seo'
import { BlogPage } from '@/components/routes/blog/article'
import { getAllArticles } from '@/services/datocms/datocms-all-articles.service'
import { Lang, locales } from '@/dictionaries/locales'
import { generateShortLink } from '@/actions'

export default async function ArticlePage(props: ArticlePageProps) {
  const {
    params: { lang, category, slug }
  } = props

  const data = await getBlogArticleData(lang, category, slug)
  if (!data) return notFound()

  const { blogContent, relatedBlogs } = data
  const canonicalUrl = `https://bitlauncher.ai/${lang}/${category}/${slug}`
  const dub = await generateShortLink(canonicalUrl)

  return (
    <BlogPage
      blogContent={blogContent}
      params={props.params}
      relatedBlogs={relatedBlogs}
      shortlink={dub.data?.shortLink || canonicalUrl}
    />
  )
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const {
    params: { lang, category, slug }
  } = props

  const locales = [lang]
  const categories = await getBlogCategory(category, {
    slug: {
      eq: slug
    }
  })

  // replacing category kebab case with camel case
  const blogCategory = category.replace(/(\-\w)/g, (m: string) =>
    m[1].toUpperCase()
  )
  const data: any = categories[`${blogCategory}Data`]
  const error: any = categories[`${blogCategory}Error`]

  let categoryContent: any[]
  categoryContent = data
  if (categoryContent.length < 1 || error) {
    console.log(`${blogCategory}::ERROR::`, error)
    notFound()
  }

  const blogContent = categoryContent[0]

  const seoData = {
    title: blogContent.seo?.title || '',
    description: blogContent.seo?.description || '',
    ogType: 'website',
    ogImageUrl: blogContent.seo?.image?.url || '',
    twitterCard: 'summary_large_image'
  }

  return generateMetadataFromSEO(seoData)
}

export async function generateStaticParams(): Promise<ArticlePageParams[]> {
  const params: ArticlePageParams[] = (
    await Promise.all(
      locales.map(async (lang): Promise<ArticlePageParams[]> => {
        const allArticles = await getAllArticles()
        if (!allArticles) throw new Error('sections not found')

        const staticParams: ArticlePageParams[] = allArticles
          .map(({ articles, category }) => {
            return articles.map(article => ({
              slug: article.slug,
              lang,
              category
            }))
          })
          .flat()

        return staticParams
      })
    )
  ).flat() // Flatten the array of arrays into a single array

  return params
}

type ArticlePageParams = { lang: Lang; category: string; slug: string }
type ArticlePageProps = { params: ArticlePageParams }
