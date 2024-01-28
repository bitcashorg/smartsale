import { dfuseClient, serverEnv } from './config'
import { RESET_TIMEOUT_MS } from './lib'
import { DfuseClient, InboundMessage, InboundMessageType, waitFor } from '@dfuse/client'
import './server/connections'
import { DfuseTransactionBackwards } from './server/subscriptions/search-transactions-backward.subscriptions'

if (serverEnv.dfuse.apiKey === undefined) {
  console.error('::❌::global::❌::DFUSE_API_KEY is not defined')
  process.exit(1)
}

async function main() {
  // const sellP2PCreateDate = await getSellP2PCreationTime('fa532ecc16aa2afe1750c989767716b0c8baee6c56d8f3916cacf9c866116ad6')
  const dfuseTransactionBackwardsEngine = new DfuseTransactionBackwardsEngine(dfuseClient)
  const dfuseStreamerEngine = new DfuseStreamerEngine(dfuseClient)

  await Promise.allSettled([dfuseStreamerEngine.run(), dfuseTransactionBackwardsEngine.run()])

  dfuseClient.release()

  dfuseStreamerEngine.flushPending()
  dfuseTransactionBackwardsEngine.flushPending()

  await Promise.allSettled([dfuseStreamerEngine.stop(), dfuseTransactionBackwardsEngine.stop()])

  console.info('✅::main::✅::dFuse streamers flushed and stopped. Restarting streamers in 250ms.')

  const timeout = setTimeout(() => {
    console.info('📘::main::📘::dFuse streamers restarting')

    clearTimeout(timeout)
    main()
  }, 250)
}

export class DfuseTransactionBackwardsEngine extends DfuseTransactionBackwards {
  private client: DfuseClient

  constructor(client: DfuseClient) {
    super()

    this.client = client
  }

  public run = async () => {
    try {
      this.transactionBackwardsStream = await this.initSearchTransactionBackwards({
        client: this.client,
        onError: this.onTransactionBackwardsError,
        onResult: this.onTransactionBackwardsResult,
        onComplete: this.onTransactionBackwardsComplete,
      })

      this.transactionBackwardsStream.onPostRestart = this.onTransactionBackwardsPostRestart

      console.info(
        '✅::DfuseTransactionBackwardsEngine::✅::run::Stream connected, ready to receive messages!',
      )

      await this.transactionBackwardsStream.join()
    } catch (error) {
      console.error(
        '❌::DfuseTransactionBackwardsEngine::❌::run::ERROR::Failed to initSearchTransactionBackwards',
        error,
      )
    }
  }
}

export class DfuseStreamerEngine extends DfuseStreamer {
  private client: DfuseClient

  constructor(client: DfuseClient) {
    super()

    this.client = client
  }

  public run = async () => {
    try {
      this.actionTracesStream = await this.initStreamerStream({
        client: this.client,
        dispatcher: async (message: InboundMessage) => {
          switch (message.type) {
            case InboundMessageType.LISTENING:
              return this.onStreamerListening(message)
            case InboundMessageType.ACTION_TRACE:
              return this.onStreamerAction(message)
            case InboundMessageType.ERROR:
              return this.onStreamerError(message)
            case InboundMessageType.PROGRESS:
              return this.onStreamProgress(message)
            default:
              return console.info('📘::DfuseStreamerEngine::📘::message::DEFAULT::message', message)
          }
        },
        options: {
          irreversible_only: true,
        },
      })

      console.info('✅::DfuseStreamerEngine::✅::run::Stream connected, ready to receive messages!')

      // await waitFor(9990)
      await waitFor(RESET_TIMEOUT_MS - 10)
    } catch (error) {
      console.error('❌::DfuseStreamerEngine::❌::run::ERROR::Failed to initStreamerStream', error)
    }
  }
}

// ? Starting the dFuse Engine
main()
