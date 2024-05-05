'use server'

import { createServerClient, CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Database } from '@repo/supabase'
import { appConfig } from '../config'

export async function createSupabaseServerClient() {
  const cookieStore = cookies()

  return createServerClient<Database>(
    appConfig.supabase.url,
    appConfig.supabase.anonKey,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        }
      }
    }
  )
}
