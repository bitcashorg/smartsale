import * as fs from 'node:fs'
import * as path from 'node:path'
import { generateShortLink } from '@/app/actions/general'
import { BlogPage } from '@/components/routes/blog/article'
import { type Lang, locales } from '@/dictionaries/locales'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Load article data from local dictionary files
async function loadArticleData(lang: Lang, category: string, slug: string) {
  try {
    // Try to read from public/dictionaries first (for Vercel)
    const publicPath = path.join(
      process.cwd(),
      'public',
      'dictionaries',
      lang,
      'blog',
      category,
      `${slug}.json`,
    )

    if (fs.existsSync(publicPath)) {
      const content = fs.readFileSync(publicPath, 'utf-8')
      const data = JSON.parse(content)

      // Ensure blogContent has the required structure
      if (data.blogContent && !data.blogContent.contentBlock) {
        data.blogContent.contentBlock = [
          {
            mainContent: {
              value: {
                schema: 'dast',
                document: {
                  type: 'root',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'span',
                          value: 'Content is being processed...',
                        },
                      ],
                    },
                  ],
                },
              },
            },
            topImages: [],
          },
        ]
      }

      return {
        blogContent: data.blogContent,
        relatedBlogs: data.relatedBlogs || [],
      }
    }

    // Fallback to regular dictionaries path
    const regularPath = path.join(
      process.cwd(),
      'dictionaries',
      lang,
      'blog',
      category,
      `${slug}.json`,
    )

    if (fs.existsSync(regularPath)) {
      const content = fs.readFileSync(regularPath, 'utf-8')
      const data = JSON.parse(content)

      // Ensure blogContent has the required structure
      if (data.blogContent && !data.blogContent.contentBlock) {
        data.blogContent.contentBlock = [
          {
            mainContent: {
              value: {
                schema: 'dast',
                document: {
                  type: 'root',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'span',
                          value: 'Content is being processed...',
                        },
                      ],
                    },
                  ],
                },
              },
            },
            topImages: [],
          },
        ]
      }

      return {
        blogContent: data.blogContent,
        relatedBlogs: data.relatedBlogs || [],
      }
    }

    // Try English version as fallback
    const englishPublicPath = path.join(
      process.cwd(),
      'public',
      'dictionaries',
      'en',
      'blog',
      category,
      `${slug}.json`,
    )

    if (fs.existsSync(englishPublicPath)) {
      const content = fs.readFileSync(englishPublicPath, 'utf-8')
      const data = JSON.parse(content)

      // Ensure blogContent has the required structure
      if (data.blogContent && !data.blogContent.contentBlock) {
        data.blogContent.contentBlock = [
          {
            mainContent: {
              value: {
                schema: 'dast',
                document: {
                  type: 'root',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'span',
                          value: 'Content is being processed...',
                        },
                      ],
                    },
                  ],
                },
              },
            },
            topImages: [],
          },
        ]
      }

      return {
        blogContent: data.blogContent,
        relatedBlogs: data.relatedBlogs || [],
      }
    }

    return null
  } catch (error) {
    console.error('Error loading article data from dictionaries:', error)
    return null
  }
}

export default async function ArticlePage(props: ArticlePageProps) {
  const {
    params: { lang, category, slug },
  } = props

  const data = await loadArticleData(lang, category, slug)
  if (!data) return notFound()

  const { blogContent, relatedBlogs } = data
  const canonicalUrl = `https://bitlauncher.ai/${lang}/${category}/${slug}`
  const dub = await generateShortLink(canonicalUrl, false)

  return (
    <BlogPage
      blogContent={blogContent}
      params={props.params}
      relatedBlogs={relatedBlogs}
      shortlink={dub.data?.shortLink || canonicalUrl}
    />
  )
}

export async function generateMetadata(
  props: ArticlePageProps,
): Promise<Metadata> {
  const {
    params: { lang, category, slug },
  } = props

  const data = await loadArticleData(lang, category, slug)

  // Safe access with proper optional chaining
  const title =
    data?.blogContent?.seo?.title ||
    `${slug.replace(/-/g, ' ')} - ${category} - BitLauncher`
  const description =
    data?.blogContent?.seo?.description ||
    `Read about ${slug.replace(/-/g, ' ')} on BitLauncher`
  const imageUrl = data?.blogContent?.seo?.image?.url

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

export async function generateStaticParams(): Promise<ArticlePageParams[]> {
  const params: ArticlePageParams[] = []

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
          const categoryPath = path.join(blogPath, category)

          if (fs.existsSync(categoryPath)) {
            const files = fs
              .readdirSync(categoryPath)
              .filter((file) => file.endsWith('.json'))
              .filter((file) => !file.includes('-index.json')) // Exclude index files

            for (const file of files) {
              const slug = file.replace('.json', '')
              params.push({ lang, category, slug })
            }
          }
        }
      }
    } catch (error) {
      console.error(`Error reading blog articles for ${lang}:`, error)
    }
  }

  console.log(`Generated ${params.length} static params for blog articles`)
  return params
}

type ArticlePageParams = { lang: Lang; category: string; slug: string }
export type ArticlePageProps = { params: ArticlePageParams }
