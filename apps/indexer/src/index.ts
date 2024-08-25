import { getErrorMessage } from '@repo/utils'
import { startExpress } from './api/index'
import { logger } from './lib/logger'

async function main() {
  logger.info('Launchpad indexer starting up ...')
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
