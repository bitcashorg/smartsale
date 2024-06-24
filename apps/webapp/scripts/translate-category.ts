import { locales } from '@/dictionaries/locales'
import { BlogArticleRecord } from '@/services/datocms'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { openAiTranslate } from '@/services/openai'

import * as fs from 'fs/promises'
import _ from 'lodash'
import * as path from 'path'
import { Dirent } from 'fs'
import { promiseAllWithConcurrencyLimit } from '@/lib/utils'

async function copyJsonFiles(locale: SiteLocale): Promise<void> {
  const sourceDir = path.join('./dictionaries/en/blog')
  const targetDir = path.join(`./dictionaries/${locale}/blog`)

  await fs.mkdir(targetDir, { recursive: true })

  try {
    const files = await fs.readdir(sourceDir, { withFileTypes: true })

    await processFiles(files, sourceDir, targetDir, locale)
  } catch (err) {
    console.error('Error processing files:', err)
  }
}

async function processFiles(
  files: Dirent[],
  sourceDir: string,
  targetDir: string,
  locale: SiteLocale
): Promise<void> {
  for (const file of files) {
    if (file.isDirectory()) {
      await processDirectory(file, sourceDir, targetDir, locale)
    } else {
      await processFile(file.name, sourceDir, targetDir, '', locale)
    }
  }
}

async function processDirectory(
  file: Dirent,
  sourceDir: string,
  targetDir: string,
  locale: SiteLocale
): Promise<void> {
  const subDir = path.join(sourceDir, file.name)
  const subFiles = await fs.readdir(subDir)

  for (const subFile of subFiles) {
    if (subFile.endsWith('-index.json')) {
      const fullPath = path.join(subDir, subFile)
      if (await fs.stat(fullPath).catch(() => false)) {
        console.log('🧑🏻‍💻 File already exists', fullPath)
        return
      }
      await processFile(subFile, subDir, targetDir, file.name, locale)
    }
  }
}

async function processFile(
  subFile: string,
  subDir: string,
  targetDir: string,
  directoryName: string,
  locale: SiteLocale
): Promise<void> {
  // console.log('process file', subFile, subDir, targetDir, directoryName, locale)
  const sourcePath = path.join(subDir, subFile)
  const targetPath = path.join(targetDir, directoryName, subFile)
  await fs.mkdir(path.join(targetDir, directoryName), { recursive: true })
  console.log('🧑🏻‍💻 New Translation Started ', targetPath)

  try {
    const englishVersion: BlogPageIndexProps = JSON.parse(
      await fs.readFile(sourcePath, 'utf8')
    )
    const optimized = extractDataForTranslation(englishVersion)

    let translatedContent: BlogPageIndexProps = {
      sections: [] as Section[],
      pageSeo: {}
    }

    // translate page seo
    if (optimized.pageSeoDescription || optimized.pageSeoTitle) {
      const seoTranslation = await openAiTranslate(
        JSON.stringify(_.pick(optimized, 'pageSeoDescription', 'pageSeoTitle')),
        locale
      )
      if (
        seoTranslation.finishReason === 'stop' &&
        seoTranslation.translation
      ) {
        const textTranslated = JSON.parse(seoTranslation.translation)
        translatedContent.pageSeo = {
          ...englishVersion.pageSeo,
          title: textTranslated.pageSeoTitle,
          description: textTranslated.pageSeoDescription
        }
      } else {
        console.log('ERROR TRANSLATING PAGE SEO')
      }
    }

    console.log('🧑🏻‍💻 PageSeo translated!')

    // translate section names
    let translatedSectionNames: string[] = []
    const sectionTranslation = await openAiTranslate(
      JSON.stringify(englishVersion.sections.map(s => s.name)),
      locale
    )
    if (
      sectionTranslation.finishReason === 'stop' &&
      sectionTranslation.translation
    ) {
      console.log('🧑🏻‍💻 Section names translated!')
      translatedSectionNames = JSON.parse(sectionTranslation.translation)
    } else {
      console.log('ERROR TRANSLATING SECTION NAMES')
    }

    //translate sections
    const sectionPromises = englishVersion.sections.map(
      async (section, index) => {
        const newSection: Section = {
          ...section,
          name: translatedSectionNames[index],
          articles: []
        }
        // translate articles in section
        const _articles =
          optimized.sections.find(s => s.name === section.name)?.articles || []
        const articleOpenAICalls = _articles.map(article => async () => {
          console.log(`🧑🏻‍💻 Translting ${article.title}!`)
          const articleTranslation = await openAiTranslate(
            JSON.stringify(article),
            locale
          )
          if (
            articleTranslation.finishReason === 'stop' &&
            articleTranslation.translation
          ) {
            return JSON.parse(articleTranslation.translation)
          } else {
            console.log('ERROR TRANSLATING ARTICLE', article.title)
          }
        })

        console.log('🧑🏻‍💻 Articles translating!')
        newSection.articles = await promiseAllWithConcurrencyLimit(
          articleOpenAICalls,
          3
        )
        console.log('🧑🏻‍💻 Articles translated!')
        return newSection
      }
    )

    translatedContent.sections = await Promise.all(sectionPromises)

    await fs.writeFile(
      targetPath,
      JSON.stringify(
        {
          ...englishVersion,
          sections: englishVersion.sections.map((section, index) => ({
            ...section,
            articles: section.articles.map((article, articleIndex) => ({
              ...article,
              ...translatedContent.sections[index]?.articles[articleIndex]
            }))
          }))
        },
        null,
        2
      )
    )
    console.log('✅ New Translation completed', targetPath)
  } catch (error) {
    console.log('ERROR', error)
  }
}

type Section = {
  name: string
  slug: string
  articles: BlogArticleRecord[]
}
type BlogPageIndexProps = {
  sections: Section[]
  pageSeo?: any
}

let activeTasks = 0
async function processLocale(): Promise<void> {
  while (activeTasks < 2 && locales.length > 0) {
    const locale = locales.shift()
    if (locale && locale !== 'en') {
      activeTasks++
      await copyJsonFiles(locale)
      activeTasks--
    }
  }
  process.exit(0)
}

processLocale()

type ExtractedData = {
  pageSeoTitle: string
  pageSeoDescription: string
  sections: {
    name: string
    articles: {
      topics: string[]
      title: string
      description: string
    }[]
  }[]
}

function extractDataForTranslation(data: BlogPageIndexProps): ExtractedData {
  return {
    pageSeoTitle: data.pageSeo?.title || '',
    pageSeoDescription: data.pageSeo?.description || '',
    sections: data.sections.map(section => ({
      name: section.name,
      articles: section.articles.map(article => ({
        topics: article.topics,
        title: article.title,
        description: article.description
      }))
    }))
  }
}
