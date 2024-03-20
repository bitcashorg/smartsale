import express from 'express'

const app = express()
const port = 8080

// Assuming `startIndexer` initializes Viem and sets it up for use
import { startAuctionIndexer } from './modules/auction'
import { startSwapsService } from './modules/swaps'

async function main() {
  startAuctionIndexer()
  startSwapsService()

  app.listen(port, () => {
    console.log(`Indexer running ...`)
  })
}

main()
