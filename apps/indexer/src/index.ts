import { getErrorMessage } from 'smartsale-lib'
import { startAuctionIndexer } from './modules/auction'
import { startSwapsService } from './modules/swaps'
import { startExpress } from './routes/healthcheck'

async function main() {
  console.log(`Launchpad indexer starting up ...`)
  try {
    startExpress()
    startAuctionIndexer()
    startSwapsService()
  } catch (error) {
    console.log('ERROR:' + getErrorMessage(error), JSON.stringify(error))
  }
}

main()
