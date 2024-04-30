import { createClient } from '@supabase/supabase-js'
import { Database, TablesInsert } from '@repo/supabase'
import { appenv } from '~/config'

// Initialize Supabase client
const supabase = createClient<Database>(appenv.supabase.url, appenv.supabase.anonKey)

export async function upsertAuctionDetail(data: TablesInsert<'auction_details'>) {
  const { data: result, error } = await supabase.from('auction_details').upsert(
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
