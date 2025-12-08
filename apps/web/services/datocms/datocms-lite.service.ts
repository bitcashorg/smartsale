// Lightweight service for production builds
// Avoids bundling large dictionary files in serverless functions

import * as fs from 'node:fs'
import * as path from 'node:path'
import type { Lang } from '@/dictionaries/locales'

export type BlogArticleData = {
  relatedBlogs: any[]
  blogContent: any
  topics: string[]
}

/**
 * Lightweight blog article fetcher for production
 * Reads files directly without bundling them
 */
export async function getBlogArticleDataLite(
  lang: Lang,
  category: string,
  slug: string,
): Promise<BlogArticleData | null> {
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
      return JSON.parse(content)
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
      return JSON.parse(content)
    }

    // If no file exists, try English version
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
      return JSON.parse(content)
    }

    const englishRegularPath = path.join(
      process.cwd(),
      'dictionaries',
      'en',
      'blog',
      category,
      `${slug}.json`,
    )

    if (fs.existsSync(englishRegularPath)) {
      const content = fs.readFileSync(englishRegularPath, 'utf-8')
      return JSON.parse(content)
    }

    return null
  } catch (error) {
    console.error(
      `Failed to load blog article: ${lang}/${category}/${slug}`,
      error,
    )
    return null
  }
}

/**
 * Lightweight blog category fetcher for production
 */
export async function getBlogCategoryDataLite(
  lang: Lang,
  category: string,
): Promise<{ sections: any[]; pageSeo: any } | null> {
  try {
    // Try to read from public/dictionaries first
    const publicPath = path.join(
      process.cwd(),
      'public',
      'dictionaries',
      lang,
      'blog',
      category,
      `${category}-index.json`,
    )

    if (fs.existsSync(publicPath)) {
      const content = fs.readFileSync(publicPath, 'utf-8')
      return JSON.parse(content)
    }

    // Fallback to regular dictionaries
    const regularPath = path.join(
      process.cwd(),
      'dictionaries',
      lang,
      'blog',
      category,
      `${category}-index.json`,
    )

    if (fs.existsSync(regularPath)) {
      const content = fs.readFileSync(regularPath, 'utf-8')
      return JSON.parse(content)
    }

    // Try English version
    const englishPublicPath = path.join(
      process.cwd(),
      'public',
      'dictionaries',
      'en',
      'blog',
      category,
      `${category}-index.json`,
    )

    if (fs.existsSync(englishPublicPath)) {
      const content = fs.readFileSync(englishPublicPath, 'utf-8')
      return JSON.parse(content)
    }

    return null
  } catch (error) {
    console.error(`Failed to load blog category: ${lang}/${category}`, error)
    return null
  }
}

/**
 * Lightweight blog sections fetcher for production
 */
export async function getArticleSectionsLite(
  lang: Lang,
): Promise<any[] | null> {
  try {
    // Try to read from public/dictionaries first
    const publicPath = path.join(
      process.cwd(),
      'public',
      'dictionaries',
      lang,
      'blog',
      'blog-index.json',
    )

    if (fs.existsSync(publicPath)) {
      const content = fs.readFileSync(publicPath, 'utf-8')
      const data = JSON.parse(content)
      return data.sections || []
    }

    // Fallback to regular dictionaries
    const regularPath = path.join(
      process.cwd(),
      'dictionaries',
      lang,
      'blog',
      'blog-index.json',
    )

    if (fs.existsSync(regularPath)) {
      const content = fs.readFileSync(regularPath, 'utf-8')
      const data = JSON.parse(content)
      return data.sections || []
    }

    // Try English version
    const englishPublicPath = path.join(
      process.cwd(),
      'public',
      'dictionaries',
      'en',
      'blog',
      'blog-index.json',
    )

    if (fs.existsSync(englishPublicPath)) {
      const content = fs.readFileSync(englishPublicPath, 'utf-8')
      const data = JSON.parse(content)
      return data.sections || []
    }

    return null
  } catch (error) {
    console.error(`Failed to load article sections: ${lang}`, error)
    return []
  }
}

/**
 * Lightweight page SEO fetcher for production
 */
export async function getPageSeoTextLite(page: string): Promise<any | null> {
  // Simplified for production - just return null to avoid heavy loading
  return null
}

/**
 * Lightweight recent articles fetcher for production
 */
export async function getRecentArticleSectionsLite(): Promise<any[]> {
  // Simplified for production - return empty array to avoid heavy loading
  return []
}
