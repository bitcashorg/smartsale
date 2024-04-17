import { createSupabaseServerClient } from '@/services/supabase'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const body = (await req.json()) as { session_id: string }
  const supabase = await createSupabaseServerClient()
  const { data: session, error } = await supabase
    .from('session') // Assume your table is named 'sessions'
    .select('*')
    .eq('id', body.session_id)
    .single()
  if (error) throw new Error(error.message)
  if (!session) throw new Error('Session not found')

  return Response.json({
    success: true,
    data: { session }
  })
}
