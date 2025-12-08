import * as fs from 'node:fs'
import * as path from 'node:path'
import { BlogSections } from '@/components/routes/blog/blog-sections'
import { BgHeader } from '@/components/shared/bg-header'
import { type Lang, locales } from '@/dictionaries/locales'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Load category data from local dictionary files
async function loadCategoryData(lang: Lang, category: string) {
  try {
    // Try to read from public/dictionaries first (for Vercel)
    const publicPath = path.join(
      process.cwd(),
      'public',
      'dictionaries',
      lang,
      'blog',
      category,
    )

    if (fs.existsSync(publicPath)) {
      return await loadCategoryArticles(publicPath, category)
    }

    // Fallback to regular dictionaries path
    const regularPath = path.join(
      process.cwd(),
      'dictionaries',
      lang,
      'blog',
      category,
    )

    if (fs.existsSync(regularPath)) {
      return await loadCategoryArticles(regularPath, category)
    }

    return null
  } catch (error) {
    console.error('Error loading category data from dictionaries:', error)
    return null
  }
}

async function loadCategoryArticles(
  categoryPath: string,
  categorySlug: string,
) {
  const articles: any[] = []

  if (!fs.existsSync(categoryPath)) return null

  const files = fs
    .readdirSync(categoryPath)
    .filter((file) => file.endsWith('.json'))

  for (const file of files) {
    try {
      const filePath = path.join(categoryPath, file)
      const content = fs.readFileSync(filePath, 'utf-8')
      const articleData = JSON.parse(content)

      if (articleData.blogContent) {
        articles.push({
          id: file.replace('.json', ''),
          slug: file.replace('.json', ''),
          title:
            articleData.blogContent.title ||
            file.replace('.json', '').replace(/-/g, ' '),
          excerpt: articleData.blogContent.excerpt || '',
          topics: articleData.topics || [],
          image: articleData.blogContent.image || null,
          publishedAt:
            articleData.blogContent.publishedAt || new Date().toISOString(),
        })
      }
    } catch (error) {
      console.error(`Error reading article ${file}:`, error)
    }
  }

  if (articles.length === 0) return null

  const sections = [
    {
      name: categorySlug,
      slug: categorySlug,
      articles,
    },
  ]

  const pageSeo = {
    title: `${categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)} Articles - BitLauncher`,
    description: `Browse ${categorySlug} articles and insights on BitLauncher`,
  }

  return { sections, pageSeo }
}

export default async function Page(props: CategoryPageProps) {
  const {
    params: { lang, category },
    searchParams: { topic },
  } = props

  const data = await loadCategoryData(lang, category)
  if (!data) notFound()

  const { sections, pageSeo } = data
  if (!pageSeo) notFound()

  const blogSections = topic
    ? (sections as any[]).filter((section: any) =>
        section.articles.some((article: any) => article.topics.includes(topic)),
      )
    : (sections as any[])

  return (
    <section className="py-10">
      <BgHeader
        heading={pageSeo?.title || 'Blog Category Page'}
        subheading={pageSeo?.description || ''}
        className="!text-6xl [&_+_div]:md:!text-2xl [&_+_div]:md:!py-0"
        background="about"
      />
      <div className="narrow-container">
        <BlogSections sections={blogSections} lang={lang} category={category} />
      </div>
    </section>
  )
}

export async function generateStaticParams(): Promise<CategoryPageParams[]> {
  const params: CategoryPageParams[] = []

  for (const lang of locales) {
    try {
      // Try to read from public/dictionaries first (for Vercel)
      const publicPath = path.join(
        process.cwd(),
        'public',
        'dictionaries',
        lang,
        'blog',
      )
      let blogPath = publicPath

      if (!fs.existsSync(publicPath)) {
        // Fallback to regular dictionaries path
        blogPath = path.join(process.cwd(), 'dictionaries', lang, 'blog')
      }

      if (fs.existsSync(blogPath)) {
        const categories = fs
          .readdirSync(blogPath, { withFileTypes: true })
          .filter((dirent) => dirent.isDirectory())
          .map((dirent) => dirent.name)

        for (const category of categories) {
          params.push({ lang, category })
        }
      }
    } catch (error) {
      console.error(`Error reading blog categories for ${lang}:`, error)
    }
  }

  return params
}

export async function generateMetadata(
  props: CategoryPageProps,
): Promise<Metadata> {
  const {
    params: { lang, category },
  } = props

  // Generate static metadata based on category
  const title = `${category.charAt(0).toUpperCase() + category.slice(1)} - BitLauncher Blog`
  const description = `Explore ${category} articles and insights on BitLauncher`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

type CategoryPageParams = { lang: Lang; category: string }
export type CategoryPageProps = {
  params: CategoryPageParams
  searchParams: { topic?: string }
}
