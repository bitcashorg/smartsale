import * as fs from 'node:fs'
import path from 'node:path'

export function parseFile<T>(filePath: string): T {
  const absolutePath = path.join(process.cwd(), filePath)
  const fileContents = fs.readFileSync(absolutePath, 'utf8')
  return JSON.parse(fileContents) as T
}

export function getFilePath(partialPath: string): string {
  return path.join(process.cwd(), partialPath)
}
