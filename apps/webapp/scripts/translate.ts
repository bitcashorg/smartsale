import { BlogArticleData } from '@/services/datocms'
import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import {
  extractTextForTranslation,
  extractTitleAndDescriptionNested,
  injectTextAfterTranslation
} from '@/services/datocms/translation/utils'
import { openAiTranslate } from '@/services/openai'

import * as fs from 'fs/promises'
import * as path from 'path'

const locales: SiteLocale[] = ['es']

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
          if (subFile.endsWith('.json')) {
            const sourcePath = path.join(subDir, subFile)
            const targetPath = path.join(targetDir, file.name, subFile)

            // Check if the targetPath file already exists
            try {
              await fs.access(targetPath)
              console.log(`Translation already exists for ${targetPath}`)
              continue
            } catch (err) {
              // File does not exist, proceed with translation
            }
            console.log('🧑🏻‍💻 New Translation Started ', targetPath)

            await fs.mkdir(path.join(targetDir, file.name), { recursive: true })

            try {
              const englishVersion: BlogArticleData = JSON.parse(
                await fs.readFile(sourcePath, 'utf8')
              )

              // TODO: optimize even more
              const optimized = extractTextForTranslation(
                englishVersion.blogContent
              )

              const blogContentPayload = JSON.stringify({
                blogContent: optimized
              })
              // console.log('blogContentPayload', blogContentPayload)
              const relatedBlogsPayload = JSON.stringify({
                ...englishVersion,
                blogContent: undefined,
                relatedBlogs: englishVersion.relatedBlogs.map(
                  extractTitleAndDescriptionNested
                )
              })

              const {
                translation: blogTranslation,
                finishReason: blogFinishReason
              } = await openAiTranslate(blogContentPayload, locale)
              const {
                translation: blogsTranslation,
                finishReason: blogsFinishReason
              } = await openAiTranslate(relatedBlogsPayload, locale)

              if (
                blogFinishReason !== 'stop' ||
                !blogTranslation ||
                blogsFinishReason !== 'stop' ||
                !blogsTranslation
              ) {
                console.log('ERROR TRANSLATING')
                break
              }

              const parsedBlogTranslation = JSON.parse(blogTranslation)
              const parsedBlogsTranslation = JSON.parse(blogsTranslation)

              const translatedContent = {
                ...englishVersion,
                blogContent: injectTextAfterTranslation(
                  englishVersion.blogContent,
                  parsedBlogTranslation.blogContent
                ),
                relatedBlogs: englishVersion.relatedBlogs.map(
                  (blog, index) => ({
                    ...blog,
                    ...parsedBlogsTranslation.relatedBlogs[index]
                  })
                )
              }
              await fs.writeFile(
                targetPath,
                JSON.stringify(translatedContent, null, 2)
              )
              console.log('✅ New Translation completed', targetPath)
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

locales.forEach(locale => {
  copyJsonFiles(locale)
})
