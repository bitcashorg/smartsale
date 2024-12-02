import { execSync } from 'node:child_process'
import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// Generate TypeScript types from Supabase schema
console.log('Generating types...')
execSync('supabase gen types --lang=typescript --local > src/supa.types.ts', {
  stdio: 'inherit',
})

// Read and preprocess types
const typesPath = join(import.meta.dir, '..', 'src', 'supa.types.ts')
let content = readFileSync(typesPath, 'utf8')

// Remove supabase_url from types as it's not needed
content = content.replace(/supabase_url:\s*{[^}]*},?/g, '')

// Correctly derive the directory path in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

// Create temporary file in the same directory as the script
const tempFile = join(__dirname, 'temp-types.ts')
try {
  writeFileSync(tempFile, content)
} catch (error) {
  console.error(`Failed to create temporary file: ${error}`)
  process.exit(1)
}

// Check if the file was created successfully
if (!existsSync(tempFile)) {
  console.error(`Failed to create temporary file at ${tempFile}`)
  process.exit(1)
}

// Generate Zod schemas from the preprocessed types
console.log('Generating schemas...')
try {
  if (!existsSync(tempFile)) {
    throw new Error(`Temporary file does not exist at ${tempFile}`)
  }
  execSync(
    'supabase-to-zod --input ./scripts/temp-types.ts --output src/supa.schemas.ts',
    {
      stdio: 'inherit',
    },
  )
  console.log('Schemas generated successfully 😎')
} catch (error) {
  console.error('Error generating schemas:', error)
  process.exit(1)
}

// Clean up temporary file
try {
  unlinkSync(tempFile)
} catch (error) {
  console.error(`Failed to delete temporary file: ${error}`)
}
