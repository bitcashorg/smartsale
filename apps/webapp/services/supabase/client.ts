import { useMemo } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { Database } from '@repo/supabase'

export function getSupabaseBrowserClient() {
  console.log(
    'getSupabaseBrowserClient',
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export function useSupabaseClient() {
  return useMemo(getSupabaseBrowserClient, [])
}
