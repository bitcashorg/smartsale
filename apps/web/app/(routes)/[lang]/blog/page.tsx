import * as fs from 'node:fs'
import * as path from 'node:path'
import { BlogSections } from '@/components/routes/blog/blog-sections'
import { HeroSection } from '@/components/routes/blog/hero-section/index'
import type { Lang } from '@/dictionaries/locales'
import type { Metadata } from 'next'

// Load blog data from local dictionary files
async function loadBlogData(lang: Lang) {
  try {
    // Try to read from public/dictionaries first (for Vercel)
    const publicPath = path.join(
      process.cwd(),
      'public',
      'dictionaries',
      lang,
      'blog',
    )

    if (fs.existsSync(publicPath)) {
      const sections = await loadBlogSections(publicPath)
      const recent = await loadRecentArticles(publicPath)
      return { sections, recent }
    }

    // Fallback to regular dictionaries path
    const regularPath = path.join(process.cwd(), 'dictionaries', lang, 'blog')

    if (fs.existsSync(regularPath)) {
      const sections = await loadBlogSections(regularPath)
      const recent = await loadRecentArticles(regularPath)
      return { sections, recent }
    }

    // Return empty data if no dictionaries found
    return { sections: [], recent: [] }
  } catch (error) {
    console.error('Error loading blog data from dictionaries:', error)
    return { sections: [], recent: [] }
  }
}

async function loadBlogSections(blogPath: string) {
  const sections: any[] = []

  if (!fs.existsSync(blogPath)) return []

  const categories = fs
    .readdirSync(blogPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

  for (const category of categories) {
    const categoryPath = path.join(blogPath, category)

    if (fs.existsSync(categoryPath)) {
      try {
        // Read the category index file
        const indexFilePath = path.join(categoryPath, `${category}-index.json`)
        if (fs.existsSync(indexFilePath)) {
          const content = fs.readFileSync(indexFilePath, 'utf-8')
          const categoryData = JSON.parse(content)

          if (categoryData.sections && categoryData.sections.length > 0) {
            // Combine all articles from all sections in this category
            const allArticles = categoryData.sections.flatMap(
              (section: any) => section.articles || [],
            )

            if (allArticles.length > 0) {
              sections.push({
                name: category.charAt(0).toUpperCase() + category.slice(1),
                slug: category,
                articles: allArticles.slice(0, 8), // Limit to 8 articles per category
              })
            }
          }
        }
      } catch (error) {
        console.error(`Error reading category ${category}:`, error)
      }
    }
  }

  return sections
}

async function loadRecentArticles(blogPath: string) {
  const recentArticles: any[] = []

  if (!fs.existsSync(blogPath)) return []

  const categories = fs
    .readdirSync(blogPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

  for (const category of categories) {
    const categoryPath = path.join(blogPath, category)

    if (fs.existsSync(categoryPath)) {
      try {
        // Read the category index file
        const indexFilePath = path.join(categoryPath, `${category}-index.json`)
        if (fs.existsSync(indexFilePath)) {
          const content = fs.readFileSync(indexFilePath, 'utf-8')
          const categoryData = JSON.parse(content)

          if (categoryData.sections && categoryData.sections.length > 0) {
            // Get first section and take first article from it
            const firstSection = categoryData.sections[0]
            if (firstSection.articles && firstSection.articles.length > 0) {
              const firstArticle = firstSection.articles[0]

              recentArticles.push({
                name: category.charAt(0).toUpperCase() + category.slice(1),
                slug: category,
                articles: [firstArticle], // Already has the right structure
              })
            }
          }
        }
      } catch (error) {
        console.error(`Error reading category ${category}:`, error)
      }
    }
  }

  return recentArticles.slice(0, 5) // Return only 5 most recent
}

export default async function BlogPage({ params }: BlogPageProps) {
  // Load blog data from local dictionary files
  const { sections, recent } = await loadBlogData(params.lang)

  return (
    <div className="narrow-container">
      <header>
        <h1 className="heading flex justify-center py-10 md:py-24">
          AI, Crypto & Startup Ventures
        </h1>
      </header>
      <main>
        <HeroSection recent={recent} lang={params.lang} />
        <BlogSections sections={sections} lang={params.lang} />
      </main>
    </div>
  )
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  // Use static metadata for production builds to avoid data fetching issues
  const title = 'AI, Crypto & Startup Ventures - BitLauncher Blog'
  const description =
    'Explore the latest insights in AI, crypto, and startup ventures with BitLauncher'

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

type BlogPageProps = { params: { lang: Lang } }
