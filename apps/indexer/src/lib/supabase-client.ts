import { createClient } from '@supabase/supabase-js'
import { Database, TablesInsert } from '@repo/supabase'
import { appenv } from '~/config'

// Initialize Supabase client
const supabase = createClient<Database>(appenv.supabase.url, appenv.supabase.anonKey)

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

export async function upsertTransfers(data: TablesInsert<'transfer'>) {
  console.log('upsert transfers', data)
  const { data: result, error } = await supabase
    .from('transfer')
    .upsert(data, { onConflict: 'trx_hash' })
    .select()

  if (error) console.error('Error:', error)

  console.log('Result:', result)

  return data
}
