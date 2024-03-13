import { NextRequest } from 'next/server'
import { db } from 'smartsale-db'

export async function POST(req: NextRequest) {
  const body = (await req.json()) as { session_id: string }

  const session = await db.session.findFirst({ where: { id: body.session_id } })

  if (!session) throw new Error('Session not found')

  return Response.json({
    success: true,
    data: { session }
  })
}
