import { uniq } from 'lodash'
import {
  BlogArticleRecord,
  getBlogCategory
} from './datacms-blog-category.service'
import { getLayoutText } from './datocms-layout.service'
import { getPageSeoText } from './datocms-seo.service'
import { BlogAiRecord, SiteLocale } from './graphql/generated/cms'
import { datoClient } from './datocms-nodejs-client'

export const getBlogData = async (locale: SiteLocale) => {
  const locales = [locale]
  const [
    i18n,
    pageSeo,
    { bitcoinData, bitcoinError },
    { cryptoData, cryptoError },
    { investingData, investingError },
    { startupData, startupError },
    { aiData, aiError },
    { newsData, newsError },
    { bitcashData, bitcashError },
    { aiResearchData, researchError }
  ] = await Promise.all([
    getLayoutText(locale, locales),
    getPageSeoText('home', locale, locales),
    getBlogCategory('bitcoin', locale, locales, undefined, 5),
    getBlogCategory('crypto', locale, locales, undefined, 5),
    getBlogCategory('investing', locale, locales, undefined, 5),
    getBlogCategory('startup', locale, locales, undefined, 5),
    getBlogCategory('ai', locale, locales, undefined, 5),
    getBlogCategory('news', locale, locales, undefined, 5),
    getBlogCategory('bitcash', locale, locales, undefined, 5),
    getBlogCategory('ai-research', locale, locales, undefined, 5)
  ])
  return {
    i18n,
    pageSeo,
    bitcoinData,
    bitcoinError,
    cryptoData,
    cryptoError,
    investingData,
    investingError,
    startupData,
    startupError,
    aiData,
    aiError,
    newsData,
    newsError,
    bitcashData,
    bitcashError,
    aiResearchData,
    researchError
  }
}

export async function getArticleSections(
  locale: SiteLocale
): Promise<ArticlesSection[]> {
  const {
    bitcoinData,
    cryptoData,
    investingData,
    startupData,
    aiData,
    newsData,
    bitcashData,
    aiResearchData
  } = await getBlogData(locale)

  const sections: ArticlesSection[] = [
    {
      name: 'AI',
      slug: 'ai',
      articles: (aiData?.slice(0, 4) || []) as BlogArticleRecord[]
    },
    {
      name: 'AI Research',
      slug: 'ai-research',
      articles: (aiResearchData?.slice(0, 4) || []) as BlogArticleRecord[]
    },
    {
      name: 'News',
      slug: 'news',
      articles: (newsData?.slice(0, 4) || []) as BlogArticleRecord[]
    },
    {
      name: 'Bitcash',
      slug: 'bitcash',
      articles: (bitcashData?.slice(0, 4) || []) as BlogArticleRecord[]
    },
    {
      name: 'Startup',
      slug: 'startup',
      articles: (startupData?.slice(1, 5) || []) as BlogArticleRecord[]
    },
    {
      name: 'Crypto',
      slug: 'crypto',
      articles: (cryptoData?.slice(1, 5) || []) as BlogArticleRecord[]
    },
    {
      name: 'Bitcoin',
      slug: 'bitcoin',
      articles: (bitcoinData?.slice(1, 5) || []) as BlogArticleRecord[]
    },
    {
      name: 'Investing',
      slug: 'investing',
      articles: (investingData?.slice(1, 5) || []) as BlogArticleRecord[]
    }
  ]

  return sections
}

export async function getBlogCategoryLandingData(
  locale: SiteLocale,
  category: string
) {
  const [i18n, categories, pageSeo] = await Promise.all([
    getLayoutText(locale, [locale]),
    getBlogCategory(category, locale, [locale], undefined, 100),
    getPageSeoText(category, locale, [locale])
  ])
  // replacing category kebab case with camel case
  const blogCategory = category.replace(/(\-\w)/g, (m: string) =>
    m[1].toUpperCase()
  )
  const categoryContent: BlogArticleRecord[] | undefined = categories[
    `${blogCategory}Data`
  ] as BlogArticleRecord[] | undefined

  if (!categoryContent) return null
  // get topics
  const allTopics: string[] = []

  categoryContent.forEach(blog => {
    blog?.topics?.forEach((topic: string) => {
      allTopics.push(topic)
    })
  })

  // section topics & blogs content
  const topics = uniq(allTopics)

  const sections: ArticlesSection[] = topics?.map((tp, index) => {
    const articles = categoryContent.filter(content =>
      content.topics.includes(tp)
    )
    return {
      name: tp,
      slug: `${tp.toLocaleLowerCase()}`,
      articles
    }
  })

  return { sections, pageSeo, i18n }
}

export async function getBlogArticleData(
  locale: SiteLocale,
  category: string,
  slug: string
) {
  const [i18n, categories] = await Promise.all([
    getLayoutText(locale, [locale]),
    getBlogCategory(category, locale, [locale], {
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
  if (categoryContent.length < 1 || error) return null

  let relatedBlogs: any = []
  const blogContent = categoryContent[0]

  const topics = blogContent?.topics

  if (topics.length > 0) {
    relatedBlogs = await getBlogCategory(category, locale, [locale], {
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

  return { relatedBlogs, blogContent, i18n, topics }
}

export async function getPosts() {
  try {
    const itemTypes = await datoClient.itemTypes.list()

    console.log('💥 ITEM TYPES', itemTypes)
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

export type ArticlesSection = {
  name: string
  slug: string
  articles: BlogArticleRecord[]
}
