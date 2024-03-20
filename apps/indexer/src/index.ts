import { startAuctionIndexer } from './modules/auction'
import { startSwapsService } from './modules/swaps'

async function main() {
  startAuctionIndexer()
  startSwapsService()

  console.log(`Indexer running ...`)
}

main()
