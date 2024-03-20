import { getErrorMessage } from 'smartsale-lib'
import { startAuctionIndexer } from './modules/auction'
import { startSwapsService } from './modules/swaps'

async function main() {
  console.log(`Indexer running ...`)
  try {
    // startAuctionIndexer()
    startSwapsService()
  } catch (error) {
    console.log('ERROR:' + getErrorMessage(error), JSON.stringify(error))
  }
}

main()
