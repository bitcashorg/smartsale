'use server'

import { createSupabaseServerClient } from '@/services/supabase'
import { Tables, TablesInsert, transferInsertSchema } from '@repo/supabase'

export async function saveDeposit(transfer: TablesInsert<'transfer'>): Promise<{
  success: boolean
  message: string
  data?: Tables<'transfer'>
  error?: any
}> {
  try {
    const parseResult = transferInsertSchema.safeParse(transfer)
    if (!parseResult.success) {
      return {
        success: false,
        message: 'Invalid transfer data',
        error: parseResult.error.flatten()
      }
    }

    const supabase = await createSupabaseServerClient()
    const { data, error } = await supabase
      .from('transfer')
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
      data: data[0]
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return { success: false, message: 'An unexpected error occurred' }
  }
}
