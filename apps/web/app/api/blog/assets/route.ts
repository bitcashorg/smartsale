import * as fs from 'node:fs'
import { createWriteStream } from 'node:fs'
import * as path from 'node:path'
import { pipeline } from 'node:stream/promises'
import archiver from 'archiver'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

interface SimpleAsset {
  url: string
  filename: string
}

class SimpleAssetExtractor {
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

    // Enhanced regex to match all DatoCMS assets including SVG
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

      // DatoCMS URLs: /101962/timestamp-filename.ext
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

  async downloadAsset(
    asset: SimpleAsset,
  ): Promise<{ success: boolean; error?: string }> {
    const localPath = path.join(this.publicImagesDir, asset.filename)

    // Check if file already exists
    if (fs.existsSync(localPath)) {
      return { success: true }
    }

    try {
      // Ensure directory exists
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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action') || 'stats'
  const download = searchParams.get('download') === 'true'

  const assetExtractor = new SimpleAssetExtractor()

  try {
    switch (action) {
      case 'stats':
        return await handleStats(assetExtractor)

      case 'download':
        if (download) {
          return await handleDownloadAssets(assetExtractor)
        }
        return await handlePrepareAssets(assetExtractor)

      case 'zip':
        return await handleZipDownload(assetExtractor)

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use: stats, download, or zip' },
          { status: 400 },
        )
    }
  } catch (error) {
    console.error('❌ API Error:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}

async function handleStats(assetExtractor: SimpleAssetExtractor) {
  const assets = await assetExtractor.extractAllAssets()
  const existingAssets = assets.filter((asset: SimpleAsset) =>
    fs.existsSync(
      path.join(process.cwd(), 'public/images/blog', asset.filename),
    ),
  )

  return NextResponse.json({
    success: true,
    total: assets.length,
    existing: existingAssets.length,
    missing: assets.length - existingAssets.length,
    sampleAssets: assets.slice(0, 10),
    message: `Found ${assets.length} unique assets across all blog articles`,
  })
}

async function handlePrepareAssets(assetExtractor: SimpleAssetExtractor) {
  const assets = await assetExtractor.extractAllAssets()
  const existingAssets = assets.filter((asset: SimpleAsset) =>
    fs.existsSync(
      path.join(process.cwd(), 'public/images/blog', asset.filename),
    ),
  )
  const missingAssets = assets.filter(
    (asset: SimpleAsset) =>
      !fs.existsSync(
        path.join(process.cwd(), 'public/images/blog', asset.filename),
      ),
  )

  return NextResponse.json({
    success: true,
    total: assets.length,
    existing: existingAssets.length,
    missing: missingAssets.length,
    missingAssets: missingAssets.slice(0, 20),
    message: `Ready to download ${missingAssets.length} missing assets`,
    downloadUrl: '/api/blog/assets?action=download&download=true',
  })
}

async function handleDownloadAssets(assetExtractor: SimpleAssetExtractor) {
  const assets = await assetExtractor.extractAllAssets()
  const missingAssets = assets.filter(
    (asset: SimpleAsset) =>
      !fs.existsSync(
        path.join(process.cwd(), 'public/images/blog', asset.filename),
      ),
  )

  const results: { filename: string; error?: string }[] = []
  let successful = 0
  let failed = 0

  console.log(
    `📥 Starting download of ${missingAssets.length} missing assets...`,
  )

  for (let i = 0; i < missingAssets.length; i++) {
    const asset = missingAssets[i]
    console.log(
      `📥 Downloading ${i + 1}/${missingAssets.length}: ${asset.filename}`,
    )

    const result = await assetExtractor.downloadAsset(asset)

    if (result.success) {
      successful++
      console.log(`✅ Downloaded: ${asset.filename}`)
    } else {
      failed++
      console.error(`❌ Failed: ${asset.filename} - ${result.error}`)
      results.push({ filename: asset.filename, error: result.error })
    }

    // Small delay to avoid overwhelming the server
    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  return NextResponse.json({
    success: true,
    downloaded: successful,
    failed: failed,
    totalProcessed: missingAssets.length,
    failedAssets: results,
    message: `Downloaded ${successful} assets successfully, ${failed} failed`,
  })
}

async function handleZipDownload(assetExtractor: SimpleAssetExtractor) {
  try {
    const publicImagesDir = path.join(process.cwd(), 'public/images/blog')

    // Check if directory exists
    if (!fs.existsSync(publicImagesDir)) {
      return NextResponse.json(
        { error: 'Blog images directory not found. Download assets first.' },
        { status: 404 },
      )
    }

    // Get all files in the blog images directory
    const files = fs.readdirSync(publicImagesDir)
    if (files.length === 0) {
      return NextResponse.json(
        { error: 'No blog assets found. Download assets first.' },
        { status: 404 },
      )
    }

    // Create zip stream
    const archive = archiver('zip', {
      zlib: { level: 9 }, // Maximum compression
    })

    // Add all files to the zip
    for (const file of files) {
      const filePath = path.join(publicImagesDir, file)
      const stats = fs.statSync(filePath)

      if (stats.isFile()) {
        archive.file(filePath, { name: file })
      }
    }

    // Finalize the archive
    await archive.finalize()

    // Convert archive to readable stream
    const chunks: Buffer[] = []

    return new Promise<NextResponse>((resolve, reject) => {
      archive.on('data', (chunk: Buffer) => {
        chunks.push(chunk)
      })

      archive.on('end', () => {
        const buffer = Buffer.concat(chunks)
        const filename = `blog-assets-${new Date().toISOString().split('T')[0]}.zip`

        resolve(
          new NextResponse(buffer, {
            status: 200,
            headers: {
              'Content-Type': 'application/zip',
              'Content-Disposition': `attachment; filename="${filename}"`,
              'Content-Length': buffer.length.toString(),
            },
          }),
        )
      })

      archive.on('error', (error: Error) => {
        console.error('❌ Zip creation error:', error)
        reject(
          new NextResponse(
            JSON.stringify({ error: 'Failed to create zip file' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } },
          ),
        )
      })
    })
  } catch (error) {
    console.error('❌ Zip download error:', error)
    return NextResponse.json(
      { error: 'Failed to create zip file' },
      { status: 500 },
    )
  }
}
