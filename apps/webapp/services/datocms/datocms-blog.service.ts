import { uniq } from 'lodash'
import {
  BlogArticleRecord,
  getBlogCategory
} from './datacms-blog-category.service'
import { getLayoutText } from './datocms-layout.service'
import { getPageSeoText } from './datocms-seo.service'
import { BlogAiRecord } from './graphql/generated/cms'
import * as fs from 'fs'
import path from 'path'
import { parseFile, getFilePath } from '@/lib/file'
import { getErrorMessage } from 'smartsale-lib'
import { Lang } from '@/dictionaries/locales'

export const getBlogData = async () => {
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
    getLayoutText(),
    getPageSeoText('home'),
    getBlogCategory('bitcoin', undefined, 5),
    getBlogCategory('crypto', undefined, 5),
    getBlogCategory('investing', undefined, 5),
    getBlogCategory('startup', undefined, 5),
    getBlogCategory('ai', undefined, 5),
    getBlogCategory('news', undefined, 5),
    getBlogCategory('bitcash', undefined, 5),
    getBlogCategory('ai-research', undefined, 5)
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
  lang: Lang
): Promise<ArticlesSection[]> {
  const dirPath = `/dictionaries/${lang}/blog/`
  const fileName = `blog-index.json`
  const filePath = path.resolve(dirPath, fileName)
  // return cached translations

  try {
    const fileContents = parseFile(filePath)
    return fileContents.sections
  } catch (error) {
    // console.log('😬 translation not found', getErrorMessage(error))
    try {
      const englishVersion = parseFile(`/dictionaries/en/blog/${fileName}`)
      if (englishVersion) {
        // console.log('😬 returning english version')
        return englishVersion.sections
      }
    } catch (error) {
      console.log('❌ error', error)
      return []
    }
  }
  const {
    bitcoinData,
    cryptoData,
    investingData,
    startupData,
    aiData,
    newsData,
    bitcashData,
    aiResearchData
  } = await getBlogData()

  const sections: ArticlesSection[] = [
    {
      name: 'AI',
      slug: 'ai',
      articles: (aiData?.slice(0, 5) || []) as BlogArticleRecord[]
    },
    {
      name: 'AI Research',
      slug: 'ai-research',
      articles: (aiResearchData?.slice(0, 5) || []) as BlogArticleRecord[]
    },
    {
      name: 'News',
      slug: 'news',
      articles: (newsData?.slice(0, 5) || []) as BlogArticleRecord[]
    },
    {
      name: 'Bitcash',
      slug: 'bitcash',
      articles: (bitcashData?.slice(0, 5) || []) as BlogArticleRecord[]
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

  sections.forEach(section => {
    section.articles.forEach(article => {
      article.contentBlock = []
    })
  })

  fs.mkdirSync(dirPath, { recursive: true })
  fs.writeFileSync(filePath, JSON.stringify({ sections }, null, 2))

  return sections
}

export async function getRecentArticleSections(): Promise<ArticlesSection[]> {
  const {
    bitcoinData,
    cryptoData,
    investingData,
    startupData,
    aiData,
    newsData,
    bitcashData,
    aiResearchData
  } = await getBlogData()

  const recentsArticles = [
    {
      name: 'Bitcoin',
      slug: 'bitcoin',
      articles: (bitcoinData?.slice(0) || []) as BlogArticleRecord[]
    },
    {
      name: 'Crypto',
      slug: 'crypto',
      articles: (cryptoData?.slice(0) || []) as BlogArticleRecord[]
    },
    {
      name: 'Startup',
      slug: 'startup',
      articles: (startupData?.slice(0) || []) as BlogArticleRecord[]
    },

    {
      name: 'Investment',
      slug: 'investing',
      articles: (investingData?.slice(0) || []) as BlogArticleRecord[]
    }
  ]

  return recentsArticles
}

export async function getBlogCategoryLandingData(lang: Lang, category: string) {
  const [i18n, categories, pageSeo] = await Promise.all([
    getLayoutText(),
    getBlogCategory(category, undefined, 100),
    getPageSeoText(category)
  ])

  const dirPath = `/dictionaries/${lang}/blog/${category}`
  const fileName = `${category}-index.json`
  const filePath = path.resolve(dirPath, fileName)
  // console.log('getBlogCategoryLandingData', { dirPath, filePath })

  // return cached translations
  try {
    const fileContents = parseFile(filePath)
    return fileContents
  } catch (error) {
    // console.log('error', error)
    try {
      const englishVersion = parseFile(
        `/dictionaries/en/blog/${category}/${fileName}`
      )

      if (englishVersion) return englishVersion
    } catch (error) {}
  }

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
    articles.forEach(article => {
      article.contentBlock = []
    })

    return {
      name: tp,
      slug: `${tp.toLocaleLowerCase()}`,
      articles
    }
  })

  const result = { sections, pageSeo }

  fs.mkdirSync(getFilePath(dirPath), { recursive: true })
  fs.writeFileSync(getFilePath(filePath), JSON.stringify(result, null, 2))

  return result
}

export type BlogArticleData = {
  relatedBlogs: BlogArticleRecord[]
  blogContent: BlogArticleRecord
  topics: string[]
}

export async function getBlogArticleData(
  lang: Lang,
  category: string,
  slug: string
) {
  const dirPath = `dictionaries/${lang}/blog/${category}`
  const fileName = `${slug}.json`
  const filePath = path.resolve(dirPath, fileName)
  console.log({ dirPath, filePath })

  // return cached translations
  try {
    const fileContents: BlogArticleData = parseFile(filePath)
    return fileContents
  } catch (error) {
    const englishVersion: BlogArticleData = parseFile(
      `/dictionaries/en/blog/${category}/${slug}.json`
    )
    if (englishVersion) return englishVersion
  }

  // console.log('getBlogArticleData', { locale, category, slug })
  const [i18n, categories] = await Promise.all([
    getLayoutText(),
    getBlogCategory(category, {
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
    relatedBlogs = await getBlogCategory(category, {
      slug: {
        neq: slug
      }
    })
    const escapeRegExp = (string: string): string => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
    }

    // Prepare the regex pattern outside the filter function for efficiency
    const escapedTitle = escapeRegExp(blogContent.title).replace(/\s+/g, '|')
    const titleRegex = new RegExp(`(${escapedTitle})`, 'gi')

    relatedBlogs = relatedBlogs[`${blogCategory}Data`]
      .map((blog: any) => {
        const { contentBlock, ...rest } = blog
        return rest
      })
      .filter(
        (blog: BlogAiRecord) =>
          (blog.topics as string[]).some((topic: string) =>
            topics.includes(topic)
          ) &&
          blog.description?.match(titleRegex) &&
          blog.title?.match(titleRegex)
      )
  }

  // always create an english dictionary
  const result: BlogArticleData = { relatedBlogs, blogContent, topics }
  const fullPath = getFilePath(filePath)
  fs.mkdirSync(path.dirname(fullPath), { recursive: true })
  fs.writeFileSync(fullPath, JSON.stringify(result, null, 2))

  return result
}

export type ArticlesSection = {
  name: string
  slug: string
  articles: BlogArticleRecord[]
}
