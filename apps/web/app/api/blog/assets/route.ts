import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Block in production to prevent accidental usage
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json(
      { error: 'Asset extraction is not allowed in production.' },
      { status: 403 },
    )
  }

  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action') || 'stats'
  const download = searchParams.get('download') === 'true'

  try {
    // Dynamic import to avoid bundling heavy dependencies
    const { SimpleAssetExtractor } = await import(
      '../../../actions/asset-extractor'
    )
    const assetExtractor = new SimpleAssetExtractor()

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

async function handleStats(assetExtractor: any) {
  const { fs, path } = await import('./deps')
  const assets = await assetExtractor.extractAllAssets()
  const existingAssets = assets.filter((asset: any) =>
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

async function handlePrepareAssets(assetExtractor: any) {
  const { fs, path } = await import('./deps')
  const assets = await assetExtractor.extractAllAssets()
  const existingAssets = assets.filter((asset: any) =>
    fs.existsSync(
      path.join(process.cwd(), 'public/images/blog', asset.filename),
    ),
  )
  const missingAssets = assets.filter(
    (asset: any) =>
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

async function handleDownloadAssets(assetExtractor: any) {
  const { fs, path } = await import('./deps')
  const assets = await assetExtractor.extractAllAssets()
  const missingAssets = assets.filter(
    (asset: any) =>
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

async function handleZipDownload(assetExtractor: any) {
  try {
    const { fs, path, archiver } = await import('./deps')
    const publicImagesDir = path.join(process.cwd(), 'public/images/blog')

    if (!fs.existsSync(publicImagesDir)) {
      return NextResponse.json(
        { error: 'Blog images directory not found. Download assets first.' },
        { status: 404 },
      )
    }

    const files = fs.readdirSync(publicImagesDir)
    if (files.length === 0) {
      return NextResponse.json(
        { error: 'No blog assets found. Download assets first.' },
        { status: 404 },
      )
    }

    const archive = archiver('zip', {
      zlib: { level: 9 },
    })

    for (const file of files) {
      const filePath = path.join(publicImagesDir, file)
      const stats = fs.statSync(filePath)

      if (stats.isFile()) {
        archive.file(filePath, { name: file })
      }
    }

    await archive.finalize()

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
