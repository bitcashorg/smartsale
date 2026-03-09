#!/usr/bin/env node

const fs = require('node:fs')
const path = require('node:path')

function copyDictionaries() {
  const sourceDir = path.join(process.cwd(), 'dictionaries')
  const targetDir = path.join(process.cwd(), 'public', 'dictionaries')

  console.log('📚 Copying dictionaries to public folder for deployment...')
  console.log('Source:', sourceDir)
  console.log('Target:', targetDir)

  // Remove existing public/dictionaries if it exists
  if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true })
  }

  // Copy dictionaries to public folder
  if (fs.existsSync(sourceDir)) {
    copyRecursive(sourceDir, targetDir)
    console.log('✅ Dictionaries copied successfully!')
  } else {
    console.warn('⚠️ Source dictionaries folder not found:', sourceDir)
  }
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

// Run if called directly
if (require.main === module) {
  copyDictionaries()
}

module.exports = { copyDictionaries }
