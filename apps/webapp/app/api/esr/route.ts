// pages/api/logPostBody.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = req.body
    console.log(body) // Log the body to the console

    res.status(200).json({ message: 'Successfully logged the request body' })
  } catch (error) {
    res.status(400).json({ error: 'Could not parse the request body' })
  }
}
