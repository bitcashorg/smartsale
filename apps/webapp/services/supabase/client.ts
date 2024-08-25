import { appConfig } from '@/lib/config'
import { createBrowserClient } from '@supabase/ssr'
import { useMemo } from 'react'
import type { Database } from '../../../../packages/supabase/src'

export function getSupabaseBrowserClient() {
  return createBrowserClient<Database>(
    appConfig.supabase.url,
    appConfig.supabase.anonKey,
  )
}

export function useSupabaseClient() {
  return useMemo(getSupabaseBrowserClient, [])
}
