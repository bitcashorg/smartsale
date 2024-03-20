import { getErrorMessage } from 'smartsale-lib'
import { startAuctionIndexer } from './modules/auction'
import { startSwapsService } from './modules/swaps'
import { startExpress } from './healthcheck'

async function main() {
  console.log(`Indexer running ...`)
  try {
    startExpress()
    startAuctionIndexer()
    startSwapsService()
  } catch (error) {
    console.log('ERROR:' + getErrorMessage(error), JSON.stringify(error))
  }
}

main()
