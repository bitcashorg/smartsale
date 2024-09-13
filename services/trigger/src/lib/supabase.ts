import type { Database, TablesInsert } from '@repo/supabase'
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { uniqBy } from 'lodash'
import type { Address } from 'viem'
import { appConfig } from '../config'

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
    .eq('hash', depositHash)
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
  console.log('🚀 deposit', deposit.data)

  const currentPresale = await supabase
    .from('presale')
    .select('total_raised')
    .eq('id', deposit.data.presale_id)
    .single()

  if (currentPresale.error) {
    console.error('Error fetching current total raised:', currentPresale.error)
    return false
  }
  const allAccounts = await supabase
    .from('presale_deposit')
    .select('account')
    .eq('presale_id', deposit.data.presale_id)

  if (allAccounts.error) {
    console.error('Error fetching counting accounts:')
    return false
  }

  const uniqueAccounts = uniqBy(allAccounts.data, 'account')

  console.log('🚀 uniqueAccounts', uniqueAccounts)

  console.log('Total unique presale_deposit accounts:', uniqueAccounts)

  const newTotalRaised =
    Number(currentPresale.data.total_raised) + Number(valueInTokenUnits)
  console.log(
    '==> 😎 Current Total Raised:',
    currentPresale.data.total_raised,
    'Value in Token Units:',
    valueInTokenUnits,
    'New Total Raised:',
    newTotalRaised,
  )

  const presale = await supabase
    .from('presale')
    .update({
      total_raised: newTotalRaised,
      contributors: uniqueAccounts.length,
    })
    .eq('id', deposit.data.presale_id)
    .select()

  if (presale.error) {
    console.error('Error updating presale total raised:', presale.error)
    return false
  }

  return true
}

export async function insertTransaction(transaction: TablesInsert<'transaction'>) {
  const result = await supabase.from('transaction').insert(transaction).select()
  console.log('🚀 result', result)
  if (!result) {
    console.error('Error inserting transaction:', transaction)
    return false
  }

  return true
}

export async function getPresaleByAddress(address: Address) {
  console.log('🚀 getPresaleByAddress', address)
  const { data, error } = await supabase
    .from('presale')
    .select('*, project(*)') // Fetch associated project through presale.project_id
    .ilike('address', address)
    .single()

  if (error) {
    console.error('Error fetching presale by address:', error)
    return null
  }

  return data
}

export async function setPresaleDepositStatus({
  depositHash,
  state,
}: {
  depositHash: string
  state: Database['public']['Enums']['state']
}) {
  const { data, error } = await supabase
    .from('presale_deposit')
    .update({ state })
    .eq('deposit_hash', depositHash)
    .select()
    .single()

  if (error) {
    console.error('Error updating presale deposit status:', error)
    return null
  }

  return data
}