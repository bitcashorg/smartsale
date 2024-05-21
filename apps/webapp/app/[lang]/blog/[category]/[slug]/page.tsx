import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLayoutText } from '@/services/datocms'
import { getBlogCategory } from '@/services/datocms/datacms-blog-category.service'
import { BlogAiRecord } from '@/services/datocms/graphql/generated/cms'
import { generateMetadataFromSEO } from '@/lib/seo.lib'
import { BlogPage } from '@/components/routes/blog/views/blogpage'

export async function generateMetadata(props: any): Promise<Metadata> {
  const {
    searchParams: { topic },
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

export default async function BlogSlugPage(props: any) {
  const {
    searchParams: { topic },
    params: { locale, category, slug }
  } = props

  const locales = [locale]

  const [i18n, categories] = await Promise.all([
    getLayoutText(locale, locales),
    getBlogCategory(category, locale, locales, {
      slug: {
        eq: slug
      }
    })
  ])

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

  let relatedBlogs: any = []
  const blogContent = categoryContent[0]

  const topics = blogContent?.topics

  if (topics.length > 0) {
    relatedBlogs = await getBlogCategory(category, locale, locales, {
      slug: {
        neq: slug
      }
    })
    relatedBlogs = relatedBlogs[`${blogCategory}Data`].filter(
      (blog: BlogAiRecord) =>
        (blog.topics as string[]).some((topic: string) =>
          topics.includes(topic)
        ) &&
        blog.description?.match(
          new RegExp(`(${blogContent.title.replace(/\s/g, '|')})`, 'gi')
        ) &&
        blog.title?.match(
          new RegExp(`(${blogContent.title.replace(/\s/g, '|')})`, 'gi')
        )
    )
  }

  return (

      <BlogPage
        blogContent={blogContent}
        params={props.params}
        i18n={i18n}
        relatedBlogs={relatedBlogs}
      />

  )
}
