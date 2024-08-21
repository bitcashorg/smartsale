import { getErrorMessage } from 'app-lib'
import { logger } from './lib/logger'
import { startExpress } from './routes/index'

async function main() {
  logger.info(`Launchpad indexer starting up ...`)
  try {
    startExpress()
    // startPresaleService()
    // startSwapsService()
    // startAuctionIndexer()
  } catch (error) {
    logger.error(getErrorMessage(error))
  }
}

main()
