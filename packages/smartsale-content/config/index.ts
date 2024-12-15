const path = require('node:path')
const dotenv = require('dotenv')

// Load environment variables from root .env files
const rootPath = path.join(__dirname, '../..')
dotenv.config({ path: path.join(rootPath, '.env') })
dotenv.config({ path: path.join(rootPath, '.env.local') })

// Define environment variable types
interface EnvVars {
  NEXT_PUBLIC_AVAILABLE_LANGS: string
  DATOCMS_API_KEY: string
  DATOCMS_ENDPOINT: string
  ANTHROPIC_API_KEY: string
  DUB_API_KEY: string
  OPENAI_API_KEY: string
}

// Validate and get environment variables
function getEnvVar(name: keyof EnvVars): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing required environment variable: ${name}`)
  return value
}

// Get all required environment variables
const env = {
  NEXT_PUBLIC_AVAILABLE_LANGS: getEnvVar('NEXT_PUBLIC_AVAILABLE_LANGS'),
  DATOCMS_API_KEY: getEnvVar('DATOCMS_API_KEY'),
  DATOCMS_ENDPOINT: getEnvVar('DATOCMS_ENDPOINT'),
  ANTHROPIC_API_KEY: getEnvVar('ANTHROPIC_API_KEY'),
  DUB_API_KEY: getEnvVar('DUB_API_KEY'),
  OPENAI_API_KEY: getEnvVar('OPENAI_API_KEY'),
} satisfies EnvVars

export const contentConfig = {
  openai: {
    key: env.OPENAI_API_KEY,
  },
  datocms: {
    key: env.DATOCMS_API_KEY,
    endpoint: env.DATOCMS_ENDPOINT,
  },
  anthropic: {
    key: env.ANTHROPIC_API_KEY,
  },
  dub: {
    key: env.DUB_API_KEY,
  },
  i18n: {
    langs: env.NEXT_PUBLIC_AVAILABLE_LANGS.split(','),
  },
} as const
