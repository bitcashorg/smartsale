'use server'

import type { ArticlesSection, BlogArticleData } from '../../scripts/datocms'
import type { Lang } from '../dictionaries/locales'

interface BlogIndex {
  sections: ArticlesSection[]
  pageSeo: Record<string, unknown>
}

export async function getBlogArticle({
  lang,
  category,
  slug,
}: {
  lang: Lang
  category: string
  slug: string
}): Promise<BlogArticleData | undefined> {
  try {
    // Dynamic import of the JSON file
    const article = await import(
      `../dictionaries/${lang}/blog/${category}/${slug}.json`
    )
    return article.default
  } catch (error) {
    // Try English version as fallback
    try {
      const englishVersion = await import(
        `../dictionaries/en/blog/${category}/${slug}.json`
      )
      return englishVersion.default
    } catch (fallbackError) {
      console.error(
        '❌ Failed to get cached file. Fetching new data',
        fallbackError,
      )
      return undefined
    }
  }
}

export async function getBlogIndex({
  lang,
  category,
}: {
  lang: Lang
  category?: string
}): Promise<BlogIndex> {
  const indexPath = category
    ? `${category}/category-index.json`
    : 'blog-index.json'
  const index = await import(`../dictionaries/${lang}/blog/${indexPath}`)
  return index.default
}

export async function getRecentArticles() {
  try {
    // const recent = await import('../dictionaries/en/blog/recent.json')
    // return recent.default
    return []
  } catch (error) {
    console.error('❌ Failed to get recent articles', error)
    return []
  }
}
