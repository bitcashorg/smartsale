'use client'

import type { Database } from '@smartsale/supabase'
import { createBrowserClient } from '@supabase/ssr'
import { useMemo } from 'react'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export function getSupabaseBrowserClient() {
  return createBrowserClient<Database>(url, anonKey)
}

export function useSupabaseClient() {
  return useMemo(getSupabaseBrowserClient, [])
}
