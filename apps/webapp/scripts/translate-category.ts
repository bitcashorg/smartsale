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
  console.log('Copying locale', locale)
  if (locale == 'en') return
  const sourceDir = path.join('./dictionaries/en/blog')
  const targetDir = path.join(`./dictionaries/${locale}/blog`)

  await fs.mkdir(targetDir, { recursive: true })

  try {
    const files = await fs.readdir(sourceDir, { withFileTypes: true })
    // console.log(
    //   '🧑🏻‍💻 files',
    //   files.map(file => file.name)
    // )
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
  // const fileNames = files.map(file => file.name)
  // console.log('🧑🏻‍💻 process files', fileNames, sourceDir, targetDir, locale)
  for (const file of files) {
    if (file.isDirectory()) {
      await processDirectory(file, sourceDir, targetDir, locale)
    }
  }
}

async function processDirectory(
  file: Dirent,
  sourceDir: string,
  targetDir: string,
  locale: SiteLocale
): Promise<void> {
  const subDir = path.join(targetDir, file.name)
  console.log('🧑🏻‍💻 Processing directory', subDir)
  const sourceFiles = await fs.readdir(path.join(sourceDir, file.name))

  for (const fileName of sourceFiles) {
    if (fileName.endsWith('-index.json')) {
      // console.log('🧑🏻‍💻 Processing fileName', fileName)
      const fullPath = path.join(subDir, fileName)
      // console.log('🧑🏻‍💻 File path', fullPath)
      // if (await fs.stat(fullPath).catch(() => false)) {
      //   console.log('🧑🏻‍💻 File already exists', fullPath)
      //   return
      // }
      // console.log('🧑🏻‍💻 Go process file path', fullPath)
      await processFile(fileName, sourceDir, targetDir, file.name, locale)
    }
  }
}

async function processFile(
  fileName: string,
  sourceDir: string,
  targetDir: string,
  directoryName: string,
  locale: SiteLocale
): Promise<void> {
  const sourcePath = path.join(sourceDir, directoryName, fileName)
  const targetPath = path.join(targetDir, directoryName, fileName)
  // console.log({ sourcePath, targetPath, directoryName })
  await fs.mkdir(path.join(targetDir, directoryName), { recursive: true })
  console.log('🧑🏻‍💻 New Translation Started ', targetPath, sourcePath)

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

    // console.log('🧑🏻‍💻 PageSeo translated!')

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
      // console.log('🧑🏻‍💻 Section names translated!')
      translatedSectionNames = JSON.parse(sectionTranslation.translation).map(
        (name: string) => name.trim()
      )
      // console.log('translatedSectionNames', translatedSectionNames)
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
        // console.log('newSection.name', newSection.name)
        // translate articles in section
        const _articles =
          optimized.sections.find(s => s.name === section.name)?.articles || []
        const articleOpenAICalls = _articles.map(article => async () => {
          // console.log(`🧑🏻‍💻 Translting ${article.title}!`)
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

        // console.log('🧑🏻‍💻 Articles translating!')
        newSection.articles = await promiseAllWithConcurrencyLimit(
          articleOpenAICalls,
          3
        )
        // console.log('🧑🏻‍💻 Articles translated!')
        return newSection
      }
    )

    translatedContent.sections = await Promise.all(sectionPromises)

    await fs.writeFile(
      targetPath,
      JSON.stringify(
        {
          ...englishVersion,
          pageSeo: translatedContent.pageSeo,
          sections: englishVersion.sections.map((section, index) => ({
            ...section,
            name: translatedSectionNames[index],
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

async function processLocale(): Promise<void> {
  await promiseAllWithConcurrencyLimit(
    locales
      .filter(locale => locale !== 'en')
      .map(locale => () => copyJsonFiles(locale)),
    2
  )
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
