import { locales } from '@/dictionaries/locales'
import { BlogArticleData, BlogArticleRecord } from '@/services/datocms'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import {
  extractTextForTranslation,
  extractTitleAndDescriptionNested,
  injectTextAfterTranslation
} from '@/services/datocms/translation/utils'
import { openAiTranslate } from '@/services/openai'

import * as fs from 'fs/promises'
import _ from 'lodash'
import * as path from 'path'

async function copyJsonFiles(locale: SiteLocale) {
  // this is called from the root of the repo
  const sourceDir = path.join('./dictionaries/en/blog')
  const targetDir = path.join(`./dictionaries/${locale}/blog`)

  // Ensure the target directory exists before proceeding
  await fs.mkdir(targetDir, { recursive: true })

  try {
    const files = await fs.readdir(sourceDir, { withFileTypes: true })

    for (const file of files) {
      if (file.isDirectory()) {
        const subDir = path.join(sourceDir, file.name)
        const subFiles = await fs.readdir(subDir)

        for (const subFile of subFiles) {
          if (subFile.endsWith('-index.json')) {
            const sourcePath = path.join(subDir, subFile)
            const targetPath = path.join(targetDir, file.name, subFile)

            // // Check if the targetPath file already exists
            // try {
            //   await fs.access(targetPath)
            //   console.log(`Translation already exists for ${targetPath}`)
            //   continue
            // } catch (err) {
            //   // File does not exist, proceed with translation
            // }
            console.log('🧑🏻‍💻 New Translation Started ', targetPath)

            await fs.mkdir(path.join(targetDir, file.name), { recursive: true })

            try {
              const englishVersion: BlogPageIndexProps = JSON.parse(
                await fs.readFile(sourcePath, 'utf8')
              )
              const optimized = extractDataForTranslation(englishVersion)

              let translatedContent: BlogPageIndexProps = {
                sections: [] as Section[],
                pageSeo: {}
              }

              const translatePromises: Promise<void>[] = []

              // Translate page SEO
              if (optimized.pageSeoDescription || optimized.pageSeoTitle) {
                openAiTranslate(
                  JSON.stringify(
                    _.pick(optimized, 'pageSeoDescription', 'pageSeoTitle')
                  ),
                  locale
                ).then(({ translation, finishReason }) => {
                  if (finishReason === 'stop' && translation) {
                    const textTranslated = JSON.parse(translation)
                    translatedContent.pageSeo = {
                      ...englishVersion.pageSeo,
                      title: textTranslated.pageSeoTitle,
                      description: textTranslated.pageSeoDescription
                    }
                  } else {
                    console.log('ERROR TRANSLATING PAGE SEO')
                  }
                })
              }

              englishVersion.sections.forEach((section, index) => {
                // Translate section name
                translatePromises.push(
                  openAiTranslate(
                    JSON.stringify({ name: section.name }),
                    locale
                  ).then(({ translation, finishReason }) => {
                    if (finishReason !== 'stop' || !translation) {
                      console.log(
                        'ERROR TRANSLATING SECTION NAME',
                        section.name
                      )
                      return // Skip this section if translation fails
                    }
                    const translatedSection = JSON.parse(translation)
                    const newSection: Section = {
                      ...section,
                      name: translatedSection.name,
                      articles: []
                    }

                    // Translate articles within the section
                    optimized.sections[index].articles.forEach(article => {
                      translatePromises.push(
                        openAiTranslate(JSON.stringify(article), locale).then(
                          ({ translation, finishReason }) => {
                            if (finishReason !== 'stop' || !translation) {
                              console.log(
                                'ERROR TRANSLATING ARTICLE',
                                article.title
                              )
                              return // Skip this article if translation fails
                            }
                            newSection.articles.push(JSON.parse(translation))
                          }
                        )
                      )
                    })

                    translatedContent.sections.push(newSection)
                  })
                )
              })

              // Ensure all translation promises are processed recursively
              const processAllPromises = async () => {
                const maxConcurrency = 1
                while (translatePromises.length > 0) {
                  const currentBatch = translatePromises.splice(
                    0,
                    maxConcurrency
                  )
                  await Promise.all(currentBatch)
                    .then(() => {
                      console.log(
                        '🧑🏻‍💻 Translation progres ...'
                        // translatedContent.sections.length
                      )
                    })
                    .catch(error => {
                      console.error('Error processing translations:', error)
                    })
                }
              }

              processAllPromises().then(async () => {
                await fs.writeFile(
                  targetPath,
                  JSON.stringify(
                    {
                      ...englishVersion,
                      sections: englishVersion.sections.map(
                        (section, index) => ({
                          ...section,
                          articles: section.articles.map(
                            (article, articleIndex) => ({
                              ...article,
                              ...translatedContent.sections[index]?.articles[
                                articleIndex
                              ]
                            })
                          )
                        })
                      )
                    },
                    null,
                    2
                  )
                  // End of  Selection
                )
                console.log('✅ New Translation completed', targetPath)
              })
            } catch (error) {
              console.log('ERRRORSHSHS', error)
            }
            // await fs.copyFile(sourcePath, targetPath)
            // console.log(`Copied ${sourcePath} to ${targetPath}`)
          }
        }
      }
    }
  } catch (err) {
    console.error('Error processing files:', err)
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

const maxConcurrent = 2
let activeTasks = 0

function processLocale() {
  if (activeTasks < maxConcurrent && locales.length > 0) {
    const locale = locales.shift()
    if (locale && locale !== 'en') {
      // Skip if locale is 'en'
      activeTasks++
      copyJsonFiles(locale).then(() => {
        activeTasks--
        processLocale() // Process next locale after finishing current one
      })
      processLocale() // Start another task if under maxConcurrent
    } else {
      processLocale() // Continue to the next locale if 'en' is skipped
    }
  }
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
