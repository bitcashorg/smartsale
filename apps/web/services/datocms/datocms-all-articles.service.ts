import { getCMSSdk } from '@/services/datocms/graphql/cms'
import type { SeoField } from '@/services/datocms/graphql/generated/cms'

export async function getAllArticles() {
  try {
    const data = await getCMSSdk().query(
      Object.fromEntries(
        Object.entries(categoryMap).map(([key, value]) => [
          value,
          {
            __args: {
              orderBy: ['_publishedAt_DESC'],
              locale: 'en',
              fallbackLocales: ['en'],
            },
            id: true,
            topics: true,
            title: true,
            slug: true,
            authorName: true,
            authorPicture: { url: true },
            _publishedAt: true,
            description: true,
            thumbnail: { url: true },
            seo: {
              description: true,
              title: true,
              twitterCard: true,
              image: {
                width: true,
                height: true,
                title: true,
                alt: true,
                url: true,
              },
            },
          },
        ]),
      ),
    )

    // Check if data exists and is valid
    if (!data || typeof data !== 'object') {
      console.error('getAllArticles: No data returned from CMS')
      return []
    }

    const articles = Object.entries(data).map(([key, value]) => ({
      category: getCategoryKey(key) || 'notfoundcategory',
      articles: value as BlogArticleRecord[],
    }))

    return articles
  } catch (error) {
    console.error('getAllArticlesSlugs error:', error)
    return [] // Return empty array instead of undefined
  }
}

interface BlogArticleRecord {
  id: string
  topics: string[]
  title: string
  slug: string
  authorName: string
  authorPicture: { url: string }
  _publishedAt: string
  description: string
  thumbnail: { url: string }
  seo: SeoField
}

const categoryMap: Record<string, string> = {
  bitcoin: 'allBlogBitcoins',
  crypto: 'allBlogCryptos',
  investing: 'allBlogInvestings',
  startup: 'allBlogStartups',
  ai: 'allBlogAis',
  news: 'allBlogNews',
  bitcash: 'allBlogBitcashes',
  bitlauncher: 'allBlogBitlaunchers',
  'ai-research': 'allResearchAis',
}

function getCategoryKey(value: string) {
  for (const [key, val] of Object.entries(categoryMap)) {
    if (val === value) {
      return key
    }
  }
  return undefined
}
