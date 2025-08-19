import * as fs from 'node:fs'
import path from 'node:path'

export function parseFile(filePath: string) {
  const fullPath = getFilePath(filePath)
  return JSON.parse(fs.readFileSync(fullPath, 'utf8'))
}

export function getFilePath(filePath: string) {
  const isDeployed = process.env.VERCEL || process.env.NODE_ENV === 'production'
  const root = isDeployed ? process.cwd() : path.resolve('./')
  const fullPath = path.join(root, filePath)
  // console.log('🍓 file paths', { root, isDeployed, filePath, fullPath, __dirname })
  return fullPath
}
