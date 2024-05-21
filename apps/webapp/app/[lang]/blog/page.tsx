import { Metadata } from 'next'
import {
  getBlogCategory,
  getLayoutText,
  getPageSeoText
} from '@/services/datocms'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { generateMetadataFromSEO } from '@/lib/seo.lib'
import { sliceData } from '@/lib/utils.lib'
import { BlogSections } from '@/components/routes/blog/sections'

export default async function BlogPage(props: any) {
  const lang = props.params.lang
  const locale = lang as SiteLocale
  const locales = [lang] as SiteLocale[]

  const getData = async () => {
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

  const {
    bitcoinData,
    cryptoData,
    investingData,
    startupData,
    aiData,
    newsData,
    bitcashData,
    aiResearchData
  } = await getData()

  const sectionArticles = [
    {
      name: 'AI',
      slug: 'ai',
      articles: sliceData(aiData, 0, 4)
    },
    {
      name: 'AI Research',
      slug: 'ai-research',
      articles: sliceData(aiResearchData, 0, 4)
    },
        {
      name: 'News',
      slug: 'news',
      articles: sliceData(newsData, 0, 4)
    },
    {
      name: 'Bitcash',
      slug: 'bitcash',
      articles: sliceData(bitcashData, 0, 4)
    },
        {
      name: 'Startup',
      slug: 'startup',
      articles: sliceData(startupData, 1, 5)
    },
    {
      name: 'Crypto',
      slug: 'crypto',
      articles: sliceData(cryptoData, 1, 5)
    },
    {
      name: 'Bitcoin',
      slug: 'bitcoin',
      articles: sliceData(bitcoinData, 1, 5)
    },
    {
      name: 'Investing',
      slug: 'investing',
      articles: sliceData(investingData, 1, 5)
    },
  ]

  return (
    <main>
      <BlogSections sections={sectionArticles}/ >
    </main>   
  )
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const lang = props.params.locale
  const locale = lang as SiteLocale
  const locales = [lang] as SiteLocale[]

  const pageSeo = await getPageSeoText('home', locale, locales)
  const seoData = {
    title: pageSeo.pageSeo?.title || '',
    description: pageSeo.pageSeo?.description || '',
    ogType: 'website',
    ogImageUrl: pageSeo.pageSeo?.image?.url || '',
    twitterCard: 'summary_large_image'
  }

  return generateMetadataFromSEO(seoData)
}
