import express from 'express'
import { getCurrentBlockHeight } from '../lib/issuer-client'

export function startExpress() {
  const app = express()
  const port = 8080

  app.get('/', async (_req, res) => {
    try {
      // TODO: respond with last indexed block
      const blockHeight = await getCurrentBlockHeight()
      res.send(`Current Block Height: ${blockHeight}`)
    } catch (error) {
      res.status(500).send('Failed to fetch current block height')
    }
  })

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}
