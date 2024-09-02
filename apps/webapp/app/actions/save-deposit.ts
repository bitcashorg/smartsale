'use server'

import { appErrors } from '@/lib/errors'
import type { AppError } from '@/lib/errors'
import { createSupabaseServerClient } from '@/services/supabase'
import {
  type Tables,
  type TablesInsert,
  presaleDepositInsertSchema,
} from '@repo/supabase'
import { type Result, err, ok } from 'neverthrow'

// This function saves deposit intents to the database as pending records
// until the transaction is confirmed on-chain. The indexer receives the
// transaction confirmation upon finality, issues the tokens, and updates
// the deposit status to "confirmed".

// An atomic transaction is not used to ensure that the transaction is
// recorded even if the deposit processing encounters an error.

export async function saveDeposit(
  transfer: TablesInsert<'presale_deposit'>,
): Promise<Result<Tables<'presale_deposit'>, AppError>> {
  const parseResult = presaleDepositInsertSchema.safeParse(transfer)
  if (!parseResult.success) return err(appErrors.INVALID_INPUT)

  const supabase = await createSupabaseServerClient()

  // Save the transaction details to the database
  const transaction = await supabase
    .from('transaction')
    .upsert(
      {
        hash: parseResult.data.deposit_hash,
        trx_type: 'presale_deposit',
        ...parseResult.data,
      },
      { onConflict: 'hash' },
    )
    .select()

  if (transaction.error) {
    console.error('Supabase error:', JSON.stringify(transaction.error))
    return err(appErrors.DB_OP_FAILURE)
  }

  // Save the deposit record to the database
  const deposit = await supabase
    .from('presale_deposit')
    .upsert(parseResult.data, { onConflict: 'deposit_hash' })
    .select()

  if (deposit.error) {
    console.error('Supabase error:', JSON.stringify(deposit.error))
    return err(appErrors.DB_OP_FAILURE)
  }

  return ok(deposit.data[0])
}
