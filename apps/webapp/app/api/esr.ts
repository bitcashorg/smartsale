// pages/api/logPostBody.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Ensure the request body can be parsed as JSON
    try {
      const body = req.body
      console.log(body) // Log the body to the console

      res.status(200).json({ message: 'Successfully logged the request body' })
    } catch (error) {
      res.status(400).json({ error: 'Could not parse the request body' })
    }
  } else {
    // Handle any request methods other than POST
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
