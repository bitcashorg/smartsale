'use client'

import type { Database } from '@opyn/supabase'
import { opynConfig } from '@smartsale/lib'
import { createBrowserClient } from '@supabase/ssr'
import { useMemo } from 'react'

export function getSupabaseBrowserClient() {
  return createBrowserClient<Database>(
    opynConfig.supabase.url,
    opynConfig.supabase.anonKey,
  )
}

export function useSupabaseClient() {
  return useMemo(getSupabaseBrowserClient, [])
}
