import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogArticleData } from '@/services/datocms'
import { getBlogCategory } from '@/services/datocms/datacms-blog-category.service'
import { generateMetadataFromSEO } from '@/lib/seo'
import { BlogPage } from '@/components/routes/blog/article'

export default async function ArticlePage(props: any) {
  const {
    params: { lang, category, slug }
  } = props

  const data = await getBlogArticleData(lang, category, slug)
  if (!data) return notFound()

  const { blogContent, i18n, relatedBlogs } = data

  return (
    <section>
      {/* <header className="flex flex-col py-10 md:py-24 ">
        <h1 className="flex justify-center heading ">
          {blogContent.title} <br />
        </h1>
        <h2 className="flex justify-center text-xl font-semibold">
          {blogContent.description}
        </h2>
      </header> */}

      <main className="mx-auto content-container">
        {/* <pre>{JSON.stringify(blogContent, null, 2)}</pre> */}
        <BlogPage
          blogContent={blogContent}
          params={props.params}
          i18n={i18n}
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
    title: blogContent.seo.title || '',
    description: blogContent.seo.description || '',
    ogType: 'website',
    ogImageUrl: blogContent.seo.image?.url || '',
    twitterCard: 'summary_large_image'
  }

  return generateMetadataFromSEO(seoData)
}
