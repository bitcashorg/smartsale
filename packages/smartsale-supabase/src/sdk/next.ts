'use server'

import type { Database } from '@opyn/supabase'
import { opynConfig } from '@smartsale/lib'
import { type CookieOptions, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createSupabaseNextClient() {
  const cookieStore = cookies()

  return createServerClient<Database>(
    opynConfig.supabase.url,
    process.env.SUPABASE_SERVICE_ROLE_KEY as string,
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
        },
      },
    },
  )
}
