import { useMemo } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { Database } from '@repo/supabase'
import { appConfig } from '../config'

export function getSupabaseBrowserClient() {
  console.log(
    'getSupabaseBrowserClient',
    appConfig.supabase.url,
    appConfig.supabase.anonKey
  )
  return createBrowserClient<Database>(
    appConfig.supabase.url,
    appConfig.supabase.anonKey
  )
}

export function useSupabaseClient() {
  return useMemo(getSupabaseBrowserClient, [])
}
