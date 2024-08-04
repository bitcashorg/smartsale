import { getErrorMessage } from 'app-lib'
// import { startAuctionIndexer } from './modules/auction'
// import { startSwapsService } from './modules/swaps'
import { startExpress } from './routes/healthcheck'
import { startPresaleService } from './modules/presale'

async function main() {
  console.log(`Launchpad indexer starting up ...`)
  try {
    startExpress()
    startPresaleService()
    // startAuctionIndexer()
    // startSwapsService()
  } catch (error) {
    console.log('ERROR:' + getErrorMessage(error), JSON.stringify(error))
  }
}

main()
