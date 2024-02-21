import { NextRequest } from 'next/server'
import { db } from 'smartsale-db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    console.log(body) // Log the body to the console

    const response = db.session.create({
      data: {
        tx: body.tx,
        account: body.sa
      }
    })
    console.log(response)

    return Response.json({
      message: 'Successfully logged the request body'
    })
  } catch (error) {
    console.log(error)
    return Response.json({
      message: 'Could not parse the request body'
    })
  }
}
