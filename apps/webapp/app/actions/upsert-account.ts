'use server'

import { createSupabaseServerClient } from '@/services/supabase'
import { createSafeActionClient } from 'next-safe-action'
import { z } from 'zod'
import type { ActionResponse } from './actions'

const schema = z.object({
  account: z.string().min(1, 'Account is required'),
})

export const upsertAccount = createSafeActionClient()
  .schema(schema)
  .action(async (input): Promise<ActionResponse> => {
    const { account } = input.parsedInput
    const supabase = await createSupabaseServerClient()

    const { data, error } = await supabase
      .from('account')
      .upsert({ account })
      .select('*')
      .single()

    if (error) {
      return {
        success: false,
        error: new Error(`Error upserting account: ${error.message}`),
      }
    }

    return { success: true, data }
  })
