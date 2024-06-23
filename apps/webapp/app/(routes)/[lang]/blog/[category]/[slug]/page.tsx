import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogArticleData } from '@/services/datocms'
import { getBlogCategory } from '@/services/datocms/datacms-blog-category.service'
import { generateMetadataFromSEO } from '@/lib/seo'
import { BlogPage } from '@/components/routes/blog/article'
import { getAllArticles } from '@/services/datocms/datocms-all-articles.service'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { locales } from '@/dictionaries/locales'

export default async function ArticlePage(props: ArticlePageProps) {
  const {
    params: { lang, category, slug }
  } = props

  const data = await getBlogArticleData(lang, category, slug)
  if (!data) return notFound()

  const { blogContent, relatedBlogs } = data

  // return null
  return (
    <section>
      <main>
        <BlogPage
          blogContent={blogContent}
          params={props.params}
          relatedBlogs={relatedBlogs}
        />
      </main>
    </section>
  )
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const {
    params: { lang, category, slug }
  } = props

  const locales = [lang]
  const categories = await getBlogCategory(category, lang, locales, {
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
  const locales = ['en', 'es'] as SiteLocale[] // english only for now
  const params: ArticlePageParams[] = (
    await Promise.all(
      locales.map(async (lang): Promise<ArticlePageParams[]> => {
        const allArticles = await getAllArticles(lang, locales)
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

type ArticlePageParams = { lang: SiteLocale; category: string; slug: string }
type ArticlePageProps = { params: ArticlePageParams }
