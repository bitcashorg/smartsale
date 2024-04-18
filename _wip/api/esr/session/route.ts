import { createSupabaseServerClient } from '@/services/supabase'
import { NextRequest, NextResponse } from 'next/server'


export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { session_id: string }
    const supabase = await createSupabaseServerClient()
    const { data: session, error } = await supabase
      .from('session')
      .select('*')
      .eq('id', body.session_id)
      .single()

    if (error) {
      console.error('Database error:', error.message)
      return NextResponse.json({
        success: false,
        error: `Database error: ${error.message}`
      })
    }

    if (!session) {
      console.error('Session not found for ID:', body.session_id)
      return NextResponse.json({
        success: false,
        error: 'Session not found'
      })
    }

    return NextResponse.json({
      success: true,
      data: session
    })
  } catch (error: any) {
    console.error('Unexpected error during POST request:', error)
    return NextResponse.json({
      success: false,
      error: 'An unexpected error occurred during the request.'
    })
  }
}
