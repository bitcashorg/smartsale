import type { Database, TablesInsert } from '@repo/supabase'
import { createClient } from '@supabase/supabase-js'
import { appConfig } from '~/config'

// Initialize Supabase client
const supabase = createClient<Database>(
  appConfig.supabase.url,
  appConfig.supabase.anonKey,
)

export async function upsertAuctionDetail(data: TablesInsert<'auction'>) {
  const { data: result, error } = await supabase.from('auction').upsert(
    [
      {
        ...data,
      },
    ],
    {
      onConflict: 'exact_order_id, chain_id',
    },
  )

  if (error) console.error('Error:', error)

  console.log('Result:', result)

  return data
}

export async function upsertOrder(data: TablesInsert<'order'>) {
  const { data: result, error } = await supabase.from('order').upsert(
    [
      {
        ...data,
      },
    ],
    {
      onConflict: 'transactionHash',
    },
  )

  if (error) console.error('Error:', error)

  console.log('Result:', result)

  return data
}

// export async function upsertTransfers(data: TablesInsert<'transfer'>) {
//   console.log('upsert transfers', data)
//   const { data: result, error } = await supabase
//     .from('transfer')
//     .upsert(data, { onConflict: 'trx_hash' })
//     .select()

//   if (error) console.error('Error:', error)

//   console.log('Result:', result)

//   return data
// }

export async function isAddressRegisteredForPresale(
  address: string,
  projectId: number,
): Promise<boolean> {
  const { data, error } = await supabase
    .from('whitelist')
    .select('*')
    .eq('address', address)
    .eq('id', projectId)
    .single()

  if (error) {
    if (error.code === 'PGRST116') {
      // No matching row found, address is not registered
      return false
    }
    console.error('Error checking presale registration:', error)
    throw error
  }

  return !!data
}
