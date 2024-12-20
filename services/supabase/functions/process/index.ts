import { createClient } from '@supabase/supabase-js'
import type { Database } from '../_lib/database.ts'
import { processMarkdown } from '../_lib/markdown-parser.ts'

const supabaseUrl = Deno.env.get('SUPABASE_URL')
const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')

Deno.serve(async (req) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return new Response(
      JSON.stringify({
        error: 'Missing environment variables.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }

  const authorization = req.headers.get('Authorization')

  if (!authorization) {
    return new Response(
      JSON.stringify({ error: 'No authorization header passed' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }

  const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        authorization,
      },
    },
    auth: {
      persistSession: false,
    },
  })

  // const { document_id } = await req.json();

  // console.log('document_id', document_id);

  // get the most recent document for now
  const { data: document } = await supabase
    .from('documents_with_storage_path')
    .select()
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (!document?.storage_object_path) {
    console.error('Failed to find uploaded document')
    return new Response(
      JSON.stringify({ error: 'Failed to find uploaded document' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }

  const { data: file } = await supabase.storage
    .from('files')
    .download(document.storage_object_path)

  if (!file) {
    console.error(
      'Failed to download storage object',
      document.storage_object_path,
    )
    return new Response(
      JSON.stringify({ error: 'Failed to download storage object' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }

  const fileContents = await file.text()
  const processedMd = processMarkdown(fileContents)

  const { error } = await supabase.from('document_sections').insert(
    processedMd.sections.map(({ content }) => ({
      document_id: document.id as number,
      content,
    })),
  )

  if (error) {
    console.error(error)
    return new Response(
      JSON.stringify({ error: 'Failed to save document sections' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }

  console.log(
    `Saved ${processedMd.sections.length} sections for file '${document.name}'`,
  )

  return new Response(null, {
    status: 204,
    headers: { 'Content-Type': 'application/json' },
  })
})
