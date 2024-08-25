'use server'

import { createSupabaseServerClient } from '@/services/supabase'
import {
  type Tables,
  type TablesInsert,
  presaleDepositInsertSchema,
} from '@repo/supabase'

export async function saveDeposit(
  transfer: TablesInsert<'presale_deposit'>,
): Promise<{
  success: boolean
  message: string
  data?: Tables<'presale_deposit'>
  error?: any
}> {
  try {
    const parseResult = presaleDepositInsertSchema.safeParse(transfer)
    if (!parseResult.success) {
      return {
        success: false,
        message: 'Invalid transfer data',
        error: parseResult.error.flatten(),
      }
    }

    const supabase = await createSupabaseServerClient()
    const transaction = await supabase
      .from('transaction')
      .upsert(
        {
          hash:
            parseResult.data.deposit_hash,
          trx_type: 'presale_deposit',
          ...parseResult.data,
        },
        { onConflict: 'hash' },
      )
      .select()

    if (transaction.error) {
      return {
        success: false,
        message: 'Database operation failed',
        error: 'transaction.error',
      }
    }

    const { data, error } = await supabase
      .from('presale_deposit')
      .upsert(parseResult.data, { onConflict: 'trx_hash' })
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return { success: false, message: 'Database operation failed' }
    }

    if (!data || data.length === 0) {
      return { success: false, message: 'No data returned from database' }
    }

    return {
      success: true,
      message: 'Deposit saved successfully',
      data: data[0],
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return { success: false, message: 'An unexpected error occurred' }
  }
}
