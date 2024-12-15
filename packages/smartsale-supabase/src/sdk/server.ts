import type { Database } from '@smartsale/supabase'
import { createClient } from '@supabase/supabase-js'

// TODO: secure this, use anon key for now
export const createSupabaseServerClient = () => {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  )
}
