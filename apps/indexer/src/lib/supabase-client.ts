import { createClient } from '@supabase/supabase-js'
import { Database, TablesInsert } from '@repo/supabase'

// Initialize Supabase client
const supabase = createClient<Database>('your-supabase-url', 'your-supabase-anon-key')

async function upsertAuctionDetail(data: TablesInsert<'auction_details'>) {
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

  if (error) {
    console.error('Error:', error)
    return
  }

  console.log('Result:', result)
}
