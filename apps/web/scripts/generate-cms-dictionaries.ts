import {
  getArticleSections,
  getBlogArticleData,
  getBlogCategoryLandingData,
} from '@/services/datocms'

import * as fs from 'node:fs'
import { constants } from 'node:fs/promises'
import path from 'node:path'
import { generateShortLink } from '@/app/actions/general'
import type { Lang } from '@/dictionaries/locales'
import { AVAILABLE_LANGS } from '@/lib/config'
import pLimit from 'p-limit'

async function getArticleCategories(lang: Lang) {
  const categoriesData = await getArticleSections(lang as Lang)
  return categoriesData.map((section) => section.slug)
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.promises.access(filePath, constants.F_OK)
    return true
  } catch {
    return false
  }
}

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  try {
    await fs.promises.mkdir(dirPath, { recursive: true })
  } catch (error) {
    // Directory might already exist, ignore error
  }
}

async function copyFileFromEnglish(
  lang: Lang,
  category: string,
  slug: string,
): Promise<boolean> {
  const englishFilePath = path.resolve(
    `./dictionaries/en/blog/${category}/${slug}.json`,
  )
  const targetFilePath = path.resolve(
    `./dictionaries/${lang}/blog/${category}/${slug}.json`,
  )

  try {
    // Check if English version exists
    if (!(await fileExists(englishFilePath))) {
      console.warn(`English source file does not exist: ${englishFilePath}`)
      return false
    }

    // Ensure target directory exists
    const targetDir = path.dirname(targetFilePath)
    await ensureDirectoryExists(targetDir)

    // Copy file from English version
    const englishContent = await fs.promises.readFile(englishFilePath, 'utf-8')
    await fs.promises.writeFile(targetFilePath, englishContent, 'utf-8')

    console.log(`✅ Created missing file: ${targetFilePath}`)
    return true
  } catch (error) {
    console.error(`❌ Failed to copy file from English: ${error}`)
    return false
  }
}

async function addShortLinksForArticles(
  lang: Lang,
  category: string,
  slugs: string[],
) {
  const limit = pLimit(4)

  const processSlug = async (slug: string) => {
    const dirPath = `./dictionaries/${lang}/blog/${category}`
    const fileName = `${slug}.json`
    const filePath = path.resolve(dirPath, fileName)

    // Check if file exists, if not, try to copy from English
    if (!(await fileExists(filePath))) {
      console.log(`📝 File missing: ${filePath}`)
      const created = await copyFileFromEnglish(lang, category, slug)
      if (!created) {
        console.error(`❌ Could not create missing file: ${filePath}`)
        return
      }
    }

    try {
      // Verify we can get blog article data (for validation)
      await getBlogArticleData(lang as Lang, category, slug)

      const data = await fs.promises.readFile(filePath, 'utf-8')
      const json = JSON.parse(data)

      const canonicalUrl = `https://bitlauncher.ai/${lang}/blog/${category}/${slug}`

      // Only generate short link if it doesn't exist
      if (!json.shortLink || json.shortLink === '') {
        console.log(`🔗 Generating short link for: ${lang}/${category}/${slug}`)

        try {
          const shortLinkResponse = await generateShortLink(canonicalUrl, false)
          const shortLink = shortLinkResponse.data?.shortLink || canonicalUrl

          json.shortLink = shortLink

          const updatedJson = JSON.stringify(json, null, 2)
          await fs.promises.writeFile(filePath, updatedJson, 'utf-8')

          console.log(`✅ Added short link: ${shortLink}`)
        } catch (shortLinkError) {
          console.warn(
            `⚠️  Failed to generate short link for ${canonicalUrl}, using canonical URL`,
          )
          json.shortLink = canonicalUrl
          const updatedJson = JSON.stringify(json, null, 2)
          await fs.promises.writeFile(filePath, updatedJson, 'utf-8')
        }
      } else {
        console.log(
          `✓ Short link already exists for: ${lang}/${category}/${slug}`,
        )
      }
    } catch (e) {
      console.error(`❌ Failed to process article ${filePath}:`, e)
    }
  }

  const shortLinkPromises = slugs.map((slug) => limit(() => processSlug(slug)))
  await Promise.all(shortLinkPromises)
}

async function generateStaticBlogIndex(lang: Lang, categories: string[]) {
  console.log(`📚 Generating blog index for language: ${lang}`)

  try {
    const sections = []

    for (const category of categories) {
      console.log(`📁 Processing category: ${category}`)

      const categoryData = await getBlogCategoryLandingData(
        lang as Lang,
        category,
      )
      if (categoryData?.sections) {
        sections.push({
          name: categoryData.sections[0]?.name || category,
          slug: category,
          articles: categoryData.sections.flatMap(
            (section) => section.articles,
          ),
        })
      }
    }

    const blogIndexPath = path.resolve(
      `./dictionaries/${lang}/blog/blog-index.json`,
    )
    const blogIndexData = { sections }

    // Ensure directory exists
    await ensureDirectoryExists(path.dirname(blogIndexPath))

    await fs.promises.writeFile(
      blogIndexPath,
      JSON.stringify(blogIndexData, null, 2),
      'utf-8',
    )

    console.log(`✅ Generated blog index: ${blogIndexPath}`)
  } catch (error) {
    console.error(`❌ Failed to generate blog index for ${lang}:`, error)
  }
}

async function main() {
  console.log('🚀 Starting CMS dictionaries generation...')

  const limit = pLimit(1) // Process languages sequentially to avoid API rate limits

  // Get categories from English (as reference)
  const englishCategories = await getArticleCategories('en' as Lang)
  console.log(`📂 Found categories: ${englishCategories.join(', ')}`)

  for (const lang of AVAILABLE_LANGS) {
    console.log(`\n🌍 Processing language: ${lang}`)

    try {
      // Generate blog index for this language
      await generateStaticBlogIndex(lang as Lang, englishCategories)

      // Process each category
      for (const category of englishCategories) {
        console.log(`\n📁 Processing ${lang}/${category}`)

        try {
          const categoryData = await getBlogCategoryLandingData(
            lang as Lang,
            category,
          )
          if (!categoryData?.sections) {
            console.warn(`⚠️  No data found for ${lang}/${category}`)
            continue
          }

          const slugs = categoryData.sections.flatMap((section) =>
            section.articles.map((article) => article.slug),
          )

          console.log(`📄 Found ${slugs.length} articles in ${category}`)

          if (slugs.length > 0) {
            const throttledTasks = slugs.map((slug) =>
              limit(() =>
                addShortLinksForArticles(lang as Lang, category, [slug]),
              ),
            )
            await Promise.all(throttledTasks)
          }
        } catch (categoryError) {
          console.error(
            `❌ Failed to process category ${lang}/${category}:`,
            categoryError,
          )
        }
      }
    } catch (langError) {
      console.error(`❌ Failed to process language ${lang}:`, langError)
    }
  }

  console.log('\n🎉 CMS dictionaries generation completed!')
}

main().catch(console.error)
