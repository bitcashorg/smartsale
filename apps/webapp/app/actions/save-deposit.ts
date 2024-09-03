'use server'

import { type ActionResult, failure, success } from '@/lib/actions'
import { createSupabaseServerClient } from '@/services/supabase'
import { type Tables, presaleDepositInsertSchema } from '@repo/supabase'

import { createSafeActionClient } from 'next-safe-action'

//Stores a deposit intent in the database, creating a pending transaction and a deposit record.
export const savePresaleDepositIntent = createSafeActionClient()
  .schema(presaleDepositInsertSchema)
  .action(async ({ parsedInput: transfer }): Promise<ActionResult<Tables<'presale_deposit'>>> => {
    try {
      const supabase = await createSupabaseServerClient()

      const transaction = await supabase
        .from('transaction')
        .upsert(
          {
            hash: transfer.deposit_hash,
            trx_type: 'presale_deposit',
            ...transfer,
          },
          { onConflict: 'hash' },
        )
        .select()

      if (transaction.error) return failure('DB_OP_FAILURE', transaction.error)

      const deposit = await supabase
        .from('presale_deposit')
        .upsert(transfer, { onConflict: 'deposit_hash' })
        .select()

      if (deposit.error) return failure('DB_OP_FAILURE', deposit.error)

      return success(deposit.data[0])
    } catch (error) {
      return failure('UNEXPECTED_ERROR', error)
    }
  })
