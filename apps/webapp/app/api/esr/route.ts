import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const res = await req.json()
    console.log(res) // Log the body to the console

    Response.json({
      message: 'Successfully logged the request body'
    })
  } catch (error) {
    console.log(error)
    Response.json({
      message: 'Could not parse the request body'
    })
  }
}
