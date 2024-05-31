import { useMemo } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { Database } from '@repo/supabase'
import { appConfig } from '@/lib/config'

export function getSupabaseBrowserClient() {
  return createBrowserClient<Database>(
    appConfig.supabase.url,
    appConfig.supabase.anonKey
  )
}

export function useSupabaseClient() {
  return useMemo(getSupabaseBrowserClient, [])
}
