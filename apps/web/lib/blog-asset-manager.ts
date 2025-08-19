import * as fs from 'node:fs'
import { createWriteStream } from 'node:fs'
import * as path from 'node:path'
import { pipeline } from 'node:stream/promises'

export interface BlogAsset {
  url: string
  filename: string
  category: string
  articleSlug: string
  isAuthorPicture?: boolean
  isThumbnail?: boolean
  isContentImage?: boolean
}

export interface AssetDownloadResult {
  success: boolean
  filename: string
  localPath: string
  url: string
  error?: string
}

export class BlogAssetManager {
  private readonly blogDirectory = './dictionaries/en/blog'
  private readonly publicImagesDir = './public/images/blog'
  private readonly baseUrl = 'https://www.datocms-assets.com'

  /**
   * Extract ALL unique assets from blog articles (improved comprehensive extraction)
   */
  async extractAllAssets(): Promise<BlogAsset[]> {
    const assets: BlogAsset[] = []
    const seenUrls = new Set<string>()

    try {
      const categories = fs
        .readdirSync(path.resolve(this.blogDirectory))
        .filter((item) =>
          fs.statSync(path.resolve(this.blogDirectory, item)).isDirectory(),
        )

      console.log(`🔍 Scanning ${categories.length} categories...`)

      for (const category of categories) {
        const categoryPath = path.resolve(this.blogDirectory, category)
        const files = fs
          .readdirSync(categoryPath)
          .filter((file) => file.endsWith('.json') && !file.includes('-index'))

        console.log(`📁 Category ${category}: ${files.length} articles`)

        for (const file of files) {
          const filePath = path.resolve(categoryPath, file)
          const articleSlug = file.replace('.json', '')

          try {
            const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
            const articleAssets = this.extractAssetsFromArticle(
              content,
              category,
              articleSlug,
            )

            // Only add unique assets
            for (const asset of articleAssets) {
              if (!seenUrls.has(asset.url)) {
                seenUrls.add(asset.url)
                assets.push(asset)
              }
            }
          } catch (error) {
            console.warn(`⚠️ Failed to parse ${filePath}:`, error)
          }
        }
      }
    } catch (error) {
      console.error('❌ Failed to extract assets:', error)
    }

    console.log(`✅ Found ${assets.length} unique assets total`)
    return assets
  }

  /**
   * Enhanced extraction using comprehensive regex search
   */
  async extractAllAssetsByRegex(): Promise<BlogAsset[]> {
    const assets: BlogAsset[] = []
    const seenUrls = new Set<string>()
    const assetUrlRegex =
      /https:\/\/www\.datocms-assets\.com\/[^\s"']+\.(png|jpg|jpeg|gif|webp|svg)/gi

    try {
      const categories = fs
        .readdirSync(path.resolve(this.blogDirectory))
        .filter((item) =>
          fs.statSync(path.resolve(this.blogDirectory, item)).isDirectory(),
        )

      console.log(
        `🔍 Performing regex extraction on ${categories.length} categories...`,
      )

      for (const category of categories) {
        const categoryPath = path.resolve(this.blogDirectory, category)
        const files = fs
          .readdirSync(categoryPath)
          .filter((file) => file.endsWith('.json') && !file.includes('-index'))

        for (const file of files) {
          const filePath = path.resolve(categoryPath, file)
          const articleSlug = file.replace('.json', '')

          try {
            const content = fs.readFileSync(filePath, 'utf-8')
            const matches = content.match(assetUrlRegex)

            if (matches) {
              for (const url of matches) {
                if (!seenUrls.has(url)) {
                  seenUrls.add(url)
                  assets.push({
                    url,
                    filename: this.extractFilename(url),
                    category,
                    articleSlug,
                    isContentImage: true,
                  })
                }
              }
            }
          } catch (error) {
            console.warn(`⚠️ Failed to read ${filePath}:`, error)
          }
        }
      }
    } catch (error) {
      console.error('❌ Failed to extract assets by regex:', error)
    }

    console.log(`✅ Regex extraction found ${assets.length} unique assets`)
    return assets
  }

  /**
   * Extract assets from a single article
   */
  private extractAssetsFromArticle(
    articleData: any,
    category: string,
    articleSlug: string,
  ): BlogAsset[] {
    const assets: BlogAsset[] = []

    try {
      // Extract author picture
      if (articleData.blogContent?.authorPicture?.url) {
        const url = articleData.blogContent.authorPicture.url
        if (url.includes(this.baseUrl)) {
          assets.push({
            url,
            filename: this.extractFilename(url),
            category,
            articleSlug,
            isAuthorPicture: true,
          })
        }
      }

      // Extract thumbnail
      if (articleData.blogContent?.thumbnail?.url) {
        const url = articleData.blogContent.thumbnail.url
        if (url.includes(this.baseUrl)) {
          assets.push({
            url,
            filename: this.extractFilename(url),
            category,
            articleSlug,
            isThumbnail: true,
          })
        }
      }

      // Extract SEO image
      if (articleData.blogContent?.seo?.image?.url) {
        const url = articleData.blogContent.seo.image.url
        if (url.includes(this.baseUrl)) {
          assets.push({
            url,
            filename: this.extractFilename(url),
            category,
            articleSlug,
            isThumbnail: true,
          })
        }
      }

      // Extract content block images
      if (articleData.blogContent?.contentBlock) {
        this.extractContentBlockAssets(
          articleData.blogContent.contentBlock,
          assets,
          category,
          articleSlug,
        )
      }
    } catch (error) {
      console.warn(
        `⚠️ Failed to extract assets from article ${articleSlug}:`,
        error,
      )
    }

    return assets
  }

  /**
   * Recursively extract assets from content blocks
   */
  private extractContentBlockAssets(
    contentBlocks: any[],
    assets: BlogAsset[],
    category: string,
    articleSlug: string,
  ): void {
    if (!Array.isArray(contentBlocks)) return

    for (const block of contentBlocks) {
      // Handle main content with DAST structure
      if (block.mainContent?.value?.document) {
        this.extractDastAssets(
          block.mainContent.value.document,
          assets,
          category,
          articleSlug,
        )
      }

      // Handle direct image blocks
      if (block.image?.url?.includes(this.baseUrl)) {
        assets.push({
          url: block.image.url,
          filename:
            block.image.filename || this.extractFilename(block.image.url),
          category,
          articleSlug,
          isContentImage: true,
        })
      }

      // Handle nested content blocks
      if (block.contentBlock) {
        this.extractContentBlockAssets(
          block.contentBlock,
          assets,
          category,
          articleSlug,
        )
      }
    }
  }

  /**
   * Extract assets from DAST (DatoCMS AST) structure
   */
  private extractDastAssets(
    node: any,
    assets: BlogAsset[],
    category: string,
    articleSlug: string,
  ): void {
    if (!node) return

    // Handle image nodes
    if (node.type === 'image' && node.url && node.url.includes(this.baseUrl)) {
      assets.push({
        url: node.url,
        filename: node.filename || this.extractFilename(node.url),
        category,
        articleSlug,
        isContentImage: true,
      })
    }

    // Handle blocks with image references
    if (node.item?.image?.url?.includes(this.baseUrl)) {
      assets.push({
        url: node.item.image.url,
        filename:
          node.item.image.filename || this.extractFilename(node.item.image.url),
        category,
        articleSlug,
        isContentImage: true,
      })
    }

    // Recursively process children
    if (Array.isArray(node.children)) {
      for (const child of node.children) {
        this.extractDastAssets(child, assets, category, articleSlug)
      }
    }
  }

  /**
   * Extract filename from DatoCMS URL
   */
  private extractFilename(url: string): string {
    try {
      const urlObj = new URL(url)
      const pathname = urlObj.pathname
      const parts = pathname.split('/')

      // DatoCMS URLs typically have format: /101962/timestamp-filename.ext
      if (parts.length >= 3) {
        const filenameWithTimestamp = parts[parts.length - 1]
        // Remove timestamp prefix (e.g., "1712270604-" from "1712270604-screenshot.png")
        const match = filenameWithTimestamp.match(/^\d+-(.+)$/)
        return match ? match[1] : filenameWithTimestamp
      }

      return parts[parts.length - 1] || 'unknown-asset'
    } catch (error) {
      console.warn(`⚠️ Failed to extract filename from URL: ${url}`)
      return `asset-${Date.now()}`
    }
  }

  /**
   * Download an asset if it doesn't already exist
   */
  async downloadAsset(asset: BlogAsset): Promise<AssetDownloadResult> {
    const localPath = path.resolve(this.publicImagesDir, asset.filename)

    // Check if file already exists
    if (fs.existsSync(localPath)) {
      return {
        success: true,
        filename: asset.filename,
        localPath,
        url: asset.url,
      }
    }

    try {
      // Ensure directory exists
      fs.mkdirSync(path.dirname(localPath), { recursive: true })

      // Download the file
      const response = await fetch(asset.url)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const fileStream = createWriteStream(localPath)

      if (response.body) {
        await pipeline(response.body as any, fileStream)
      }

      return {
        success: true,
        filename: asset.filename,
        localPath,
        url: asset.url,
      }
    } catch (error) {
      return {
        success: false,
        filename: asset.filename,
        localPath,
        url: asset.url,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  /**
   * Download all assets using comprehensive extraction
   */
  async downloadAllAssetsComprehensive(
    onProgress?: (current: number, total: number, asset: BlogAsset) => void,
  ): Promise<AssetDownloadResult[]> {
    const assets = await this.extractAllAssetsByRegex()
    const results: AssetDownloadResult[] = []

    console.log(
      `📁 Found ${assets.length} unique assets to download (comprehensive scan)`,
    )

    for (let i = 0; i < assets.length; i++) {
      const asset = assets[i]
      onProgress?.(i + 1, assets.length, asset)

      const result = await this.downloadAsset(asset)
      results.push(result)

      if (result.success) {
        console.log(`✅ Downloaded: ${result.filename}`)
      } else {
        console.error(
          `❌ Failed to download: ${result.filename} - ${result.error}`,
        )
      }

      // Small delay to avoid overwhelming the server
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    const successful = results.filter((r) => r.success).length
    const failed = results.filter((r) => !r.success).length

    console.log(
      `\n🎉 Comprehensive download complete: ${successful} successful, ${failed} failed`,
    )

    return results
  }

  /**
   * Download all assets
   */
  async downloadAllAssets(
    onProgress?: (current: number, total: number, asset: BlogAsset) => void,
  ): Promise<AssetDownloadResult[]> {
    const assets = await this.extractAllAssets()
    const results: AssetDownloadResult[] = []

    console.log(`📁 Found ${assets.length} unique assets to download`)

    for (let i = 0; i < assets.length; i++) {
      const asset = assets[i]
      onProgress?.(i + 1, assets.length, asset)

      const result = await this.downloadAsset(asset)
      results.push(result)

      if (result.success) {
        console.log(`✅ Downloaded: ${result.filename}`)
      } else {
        console.error(
          `❌ Failed to download: ${result.filename} - ${result.error}`,
        )
      }

      // Small delay to avoid overwhelming the server
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    const successful = results.filter((r) => r.success).length
    const failed = results.filter((r) => !r.success).length

    console.log(
      `\n🎉 Download complete: ${successful} successful, ${failed} failed`,
    )

    return results
  }

  /**
   * Get comprehensive download statistics
   */
  async getAssetStats(): Promise<{
    totalAssets: number
    existingAssets: number
    missingAssets: number
    assetsByCategory: Record<string, number>
    assetsByType: {
      authorPictures: number
      thumbnails: number
      contentImages: number
    }
    regexTotalAssets?: number
  }> {
    const assets = await this.extractAllAssets()
    const regexAssets = await this.extractAllAssetsByRegex()

    const existing = assets.filter((asset) =>
      fs.existsSync(path.resolve(this.publicImagesDir, asset.filename)),
    )

    const assetsByCategory: Record<string, number> = {}
    const assetsByType = {
      authorPictures: 0,
      thumbnails: 0,
      contentImages: 0,
    }

    for (const asset of assets) {
      assetsByCategory[asset.category] =
        (assetsByCategory[asset.category] || 0) + 1

      if (asset.isAuthorPicture) assetsByType.authorPictures++
      else if (asset.isThumbnail) assetsByType.thumbnails++
      else if (asset.isContentImage) assetsByType.contentImages++
    }

    return {
      totalAssets: assets.length,
      existingAssets: existing.length,
      missingAssets: assets.length - existing.length,
      assetsByCategory,
      assetsByType,
      regexTotalAssets: regexAssets.length,
    }
  }
}
