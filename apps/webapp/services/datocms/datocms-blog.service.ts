import {
  BlogArticleRecord,
  getBlogCategory
} from './datacms-blog-category.service'
import { getLayoutText } from './datocms-layout.service'
import { getPageSeoText } from './datocms-seo.service'
import { SiteLocale } from './graphql/generated/cms'

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

export async function getArticleSections(locale: SiteLocale) {
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

export type ArticlesSection = {
  name: string
  slug: string
  articles: BlogArticleRecord[]
}
