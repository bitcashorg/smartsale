import * as fs from 'node:fs'
import path from 'node:path'

export function parseFile(filePath: string) {
  const fullPath = getFilePath(filePath)
  return JSON.parse(fs.readFileSync(fullPath, 'utf8'))
}

export function getFilePath(filePath: string) {
  const isDeployed = process.env.VERCEL || process.env.NODE_ENV === 'production'

  if (isDeployed) {
    const cwd = process.cwd()

    // In production, try public/dictionaries first (for Vercel deployments)
    const publicPath = path.join(cwd, 'public', filePath)
    if (fs.existsSync(publicPath)) {
      console.log('🍓 Found file in public folder:', publicPath)
      return publicPath
    }

    // Try multiple possible root directories in order of preference
    const possibleRoots = [
      cwd, // Current working directory (if already in apps/web)
      path.join(cwd, 'apps/web'), // If in monorepo root
      path.join(cwd, '..'), // If in a subdirectory
      path.join(cwd, '../..'), // If in a deeper subdirectory
    ]

    for (const root of possibleRoots) {
      const fullPath = path.join(root, filePath)
      if (fs.existsSync(fullPath)) {
        console.log('🍓 Found file at:', fullPath)
        return fullPath
      }
    }

    // If no existing file found, use the most likely path for creation
    const isInWebApp = cwd.endsWith('/apps/web') || cwd.includes('apps/web')
    const defaultRoot = isInWebApp ? cwd : path.join(cwd, 'apps/web')
    const defaultPath = path.join(defaultRoot, filePath)

    console.log('🍓 Production file paths (fallback)', {
      cwd,
      isInWebApp,
      defaultRoot,
      filePath,
      defaultPath,
      exists: fs.existsSync(defaultPath),
      publicPath,
      publicExists: fs.existsSync(publicPath),
      possibleRoots: possibleRoots.map((root) => ({
        root,
        fullPath: path.join(root, filePath),
        exists: fs.existsSync(path.join(root, filePath)),
      })),
    })

    return defaultPath
  }

  // Development: use current working directory
  const root = path.resolve('./')
  const fullPath = path.join(root, filePath)
  return fullPath
}
