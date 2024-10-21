import { openai } from '@ai-sdk/openai'
import { createClient } from '@supabase/supabase-js'
import { embed } from 'ai'
import dotenv from 'dotenv'
import type { Database } from '../functions/_lib/database'

dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceRoleKey) {
  console.error('Missing environment variables.')
  process.exit(1)
}

const supabase = createClient<Database>(supabaseUrl, supabaseServiceRoleKey)

const table = 'document_sections'
const contentColumn = 'content'

async function generateEmbeddings() {
  const { data: document, error: documentError } = await supabase
    .from('documents_with_storage_path')
    .select()
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (documentError || !document?.id) {
    console.error('Failed to find uploaded document:', documentError)
    return
  }

  const { data: rows, error: selectError } = await supabase
    .from(table)
    .select('id, content')
    .eq('document_id', document.id)

  if (selectError) {
    console.error(`Failed to select rows from '${table}' table:`, selectError)
    return
  }

  console.log('Rows to process:', rows?.length)

  for (const row of rows || []) {
    const { id, [contentColumn]: content } = row

    if (!content) {
      console.error(`No content available in column '${contentColumn}' for id ${id}`)
      continue
    }

    try {
      const { embedding } = await embed({
        model: openai.embedding('text-embedding-3-small'),
        value: content,
      })

      const { error } = await supabase
        .from(table)
        .update({
          embedding: `[${embedding.join(',')}]`,
        })
        .eq('id', id)

      if (error) {
        console.error(
          `Failed to save embedding on '${table}' table with id ${id}:`,
          error,
        )
      } else {
        console.log(`Generated embedding for id ${id}`)
      }
    } catch (error) {
      console.error(`Failed to generate embedding for id ${id}:`, error)
    }
  }

  console.log('Embedding generation complete')
}

generateEmbeddings().catch(console.error)
