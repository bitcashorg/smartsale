'use server'

import { appConfig } from '@/lib/config'
import type { Database } from '@repo/supabase'
import { type CookieOptions, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createSupabaseServerClient() {
  const cookieStore = cookies()

  // ! Signaled as deprecated: createServerClient,
  /** (from IDE)
   * @deprecated Please specify `getAll` and `setAll` cookie methods instead of the `get`, `set` and `remove`.These will not be supported in the next major version.
   **/

  console.log(
    '🥵 createSupabaseServerClient',
    appConfig.supabase.url,
    appConfig.supabase.anonKey,
  )
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
        },
      },
    },
  )
}
