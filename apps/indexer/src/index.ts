import { getErrorMessage } from '@repo/errors'
import { startExpress } from './api'
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
