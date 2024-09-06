import type { Database } from '@repo/supabase'
import { createClient } from '@supabase/supabase-js'
import { appConfig } from '~/config'

// Initialize Supabase client
const supabase = createClient<Database>(
  appConfig.supabase.url,
  appConfig.supabase.anonKey,
)

export async function upsertPresaleDeposits({
  valueInTokenUnits,
  depositHash,
  issuanceHash,
}: { valueInTokenUnits: bigint; depositHash: string; issuanceHash: string }) {
  const transaction = await supabase
    .from('transaction')
    .update({
      final: true,
    })
    .eq('trx_hash', depositHash)
    .select()
    .single()

  if (transaction.error) {
    console.error('Error:', transaction.error)
    return false
  }

  console.log('Result:', transaction.data)

  const deposit = await supabase
    .from('presale_deposit')
    .update({
      issuance_hash: issuanceHash,
    })
    .eq('deposit_hash', depositHash)
    .select()
    .single()

  if (deposit.error) {
    console.error('Error updating presale deposit:', deposit.error)
    return false
  }

  const currentPresale = await supabase
    .from('presale')
    .select('total_raised')
    .eq('presale_id', deposit.data.presale_id)
    .single()

  if (currentPresale.error) {
    console.error('Error fetching current total raised:', currentPresale.error)
    return false
  }

  const newTotalRaised =
    Number(currentPresale.data.total_raised) + Number(valueInTokenUnits)

  const presale = await supabase
    .from('presale')
    .update({
      total_raised: newTotalRaised,
    })
    .eq('presale_id', deposit.data.presale_id)
    .select()
    .single()

  if (presale.error) {
    console.error('Error updating presale total raised:', presale.error)
    return false
  }

  return true
}
