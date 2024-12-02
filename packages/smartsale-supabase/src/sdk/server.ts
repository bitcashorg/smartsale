import type { Database } from '@opyn/supabase'
import { opynConfig } from '@smartsale/lib'
import { createClient } from '@supabase/supabase-js'

// TODO: secure this, use anon key for now
export const createSupabaseServerClient = () => {
  return createClient<Database>(
    opynConfig.supabase.url,
    // opynConfig.supabase.serviceRoleKey,
    opynConfig.supabase.anonKey,
  )
}
