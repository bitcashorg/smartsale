'use server'

import type { Database } from '@smartsale/supabase'
import { type CookieOptions, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createSupabaseNextClient() {
  const cookieStore = cookies()

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string

  return createServerClient<Database>(supabaseUrl, supabaseKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: CookieOptions) {
        cookieStore.set({ name, value: '', ...options })
      },
    },
  })
}
