import express from 'express'

const app = express()
const port = 8080

// Assuming `startIndexer` initializes Viem and sets it up for use
import { startIndexer } from './indexer'
import { client } from './viem-client'
import { startIssuer } from './issuer'

async function getCurrentBlockHeight() {
  try {
    const blockNumber = await client.getBlockNumber()
    return blockNumber
  } catch (error) {
    console.error('Failed to fetch current block height:', error)
    throw error // Rethrow the error for handling upstream
  }
}

async function main() {
  console.log('indexer operational')
  // startIndexer()
  startIssuer()

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

main()
