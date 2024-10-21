import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import type { Database } from '../functions/_lib/database'

// Load environment variables from .env file
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceRoleKey) {
  console.error('Missing environment variables.')
  process.exit(1)
}

const supabase = createClient<Database>(supabaseUrl, supabaseServiceRoleKey)

async function callEdgeFunction() {
  try {
    const { data, error } = await supabase.functions.invoke('embed', {
      body: JSON.stringify({ message: 'Hello from the client!' }),
    })

    if (error) throw error

    console.log('Edge function response:', data)
    return data
  } catch (error) {
    console.error('Error calling edge function:', error)
    throw error
  }
}

// Usage
callEdgeFunction()
  .then((result) => {
    // Handle the result
  })
  .catch((error) => {
    // Handle any errors
  })
