import * as fs from 'node:fs'
import { createWriteStream } from 'node:fs'
import * as path from 'node:path'
import { pipeline } from 'node:stream/promises'

interface SimpleAsset {
  url: string
  filename: string
}

export class SimpleAssetExtractor {
  private readonly blogDirectory = path.join(
    process.cwd(),
    'dictionaries/en/blog',
  )
  private readonly publicImagesDir = path.join(
    process.cwd(),
    'public/images/blog',
  )

  async extractAllAssets(): Promise<SimpleAsset[]> {
    const assets: SimpleAsset[] = []
    const seenUrls = new Set<string>()

    const assetUrlRegex =
      /https:\/\/www\.datocms-assets\.com\/101962\/[^\s"']+\.(png|jpg|jpeg|gif|webp|svg)/gi

    try {
      const categories = fs
        .readdirSync(this.blogDirectory)
        .filter((item) =>
          fs.statSync(path.join(this.blogDirectory, item)).isDirectory(),
        )

      for (const category of categories) {
        const categoryPath = path.join(this.blogDirectory, category)
        const files = fs
          .readdirSync(categoryPath)
          .filter((file) => file.endsWith('.json'))

        for (const file of files) {
          const filePath = path.join(categoryPath, file)

          try {
            const content = fs.readFileSync(filePath, 'utf-8')
            const matches = content.match(assetUrlRegex) || []

            for (const url of matches) {
              if (!seenUrls.has(url)) {
                seenUrls.add(url)
                assets.push({
                  url,
                  filename: this.extractFilename(url),
                })
              }
            }
          } catch (error) {
            console.warn(`⚠️ Failed to read ${filePath}:`, error)
          }
        }
      }
    } catch (error) {
      console.error('❌ Failed to extract assets:', error)
    }

    return assets
  }

  private extractFilename(url: string): string {
    try {
      const urlObj = new URL(url)
      const pathname = urlObj.pathname
      const parts = pathname.split('/')

      if (parts.length >= 3) {
        const filenameWithTimestamp = parts[parts.length - 1]
        const match = filenameWithTimestamp.match(/^\d+-(.+)$/)
        return match ? match[1] : filenameWithTimestamp
      }

      return parts[parts.length - 1] || 'unknown-asset'
    } catch (error) {
      console.warn(`⚠️ Failed to extract filename from URL: ${url}`)
      return `asset-${Date.now()}`
    }
  }

  async downloadAsset(
    asset: SimpleAsset,
  ): Promise<{ success: boolean; error?: string }> {
    const localPath = path.join(this.publicImagesDir, asset.filename)

    if (fs.existsSync(localPath)) {
      return { success: true }
    }

    try {
      fs.mkdirSync(path.dirname(localPath), { recursive: true })

      const response = await fetch(asset.url)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const fileStream = createWriteStream(localPath)

      if (response.body) {
        await pipeline(response.body as any, fileStream)
      }

      return { success: true }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }
}
