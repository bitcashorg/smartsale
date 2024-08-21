import { getErrorMessage } from 'app-lib'
import { startExpress } from './routes/index'

async function main() {
  console.log(`Launchpad indexer starting up ...`)
  try {
    startExpress()
    // startPresaleService()
    // startSwapsService()
    // startAuctionIndexer()
  } catch (error) {
    console.log('ERROR:' + getErrorMessage(error), JSON.stringify(error))
  }
}

main()
