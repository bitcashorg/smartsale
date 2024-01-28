import { ActionTrace, ActionTraceInboundMessage, GetActionTracesMessageData, InboundMessage, ProgressInboundMessage, Stream } from '@dfuse/client';
import { captureException, startTransaction } from "@sentry/node";
import { InboundMessageDataTrace, InitStreamerStreamProps } from '~/server/streams/bitcash.types';
import { serverEnv } from "../../config";
import { createBlockNumberFile, getBlockNumbers, shouldSetAllActions, streamBitcashSentryTransaction } from "../../lib";
import { StreamConfirmDataType, StreamOfferDataType, getConfirmOfferData, getOfferData } from "../../services";

let blockNumbers = getBlockNumbers()

export class DfuseStreamer {
  readonly streamActionsConfig: GetActionTracesMessageData = {
    accounts: serverEnv.contracts.all.join('|'),
    action_names: !shouldSetAllActions ? serverEnv.actions.join('|') : undefined,
    with_inline_traces: true,
    with_dbops: true,
    with_dtrxops: true,
    with_tableops: true,
  }

  private actionTracesPendingActions: ActionTrace<InboundMessageDataTrace>[] = [];
  private actionTracesCommittedActions: ActionTrace<InboundMessageDataTrace>[] = [];

  private lastCommittedBlockNum = blockNumbers.highestBlockNumber;

  actionTracesStream?: Stream;

  constructor() {
    this.actionTracesPendingActions = []
    this.actionTracesCommittedActions = []

    startTransaction(streamBitcashSentryTransaction)
  }

  initStreamerStream = async ({
    client,
    dispatcher,
    options,
  }: InitStreamerStreamProps) =>
    await client.streamActionTraces(this.streamActionsConfig, dispatcher, options)

  onStreamerListening = (message: InboundMessage) => {
    console.info('📘::DfuseStreamerEngine::📘::run::Starting blockNumbers', blockNumbers)
    console.info("📘::DfuseStreamerEngine::📘::message::LISTENING::message::JSON.stringify", JSON.stringify(message, null, 2))

    // * Create block number file
    if (this.lastCommittedBlockNum < message.data.next_block) {
      const newBlockHeights = {
        lowestBlockNumber: this.lastCommittedBlockNum,
        highestBlockNumber: message.data.next_block,
      }

      createBlockNumberFile(newBlockHeights)
      this.lastCommittedBlockNum = message.data.next_block
      blockNumbers = newBlockHeights

      console.info('📘::DfuseStreamerEngine::📘::message::LISTENING::New Block Numbers Starting Points', newBlockHeights)
    }
  }

  onStreamerAction = async (message: ActionTraceInboundMessage<InboundMessageDataTrace>) => {
    const trace = message.data.trace
    const blockNum: number = message.data.block_num
    const blockId: string = message.data.block_id

    this.actionTracesPendingActions = this.actionTracesPendingActions.concat(trace)
    this.streamerCommit(blockId, blockNum)
    await updateBitcashDB(trace)
  }

  onStreamProgress = (message: ProgressInboundMessage) => {
    const { block_id: blockId, block_num: blockNum } = message.data

    if (blockNum > this.lastCommittedBlockNum) {
      this.streamerCommit(blockId, blockNum)
    }
  }

  onStreamerError = (message: InboundMessage) => {
    console.error("❌::DfuseStreamerEngine::❌::message::ERROR::message::JSON.stringify", JSON.stringify(message, null, 2))

    captureException(message, {
      tags: {
        streamerError: true,
      },
      extra: {
        streamBitcashSentryTransaction,
      }
    })
  }

  private streamerCommit: (blockId: string, blockNum: number) => void = (blockId: string, blockNum: number) => {
    console.info('📘::DfuseStreamerEngine::📘::message::COMMIT::blockId', blockId)

    if (this.actionTracesPendingActions.length > 0) {
      // ? Here we can set a mutation for the database for the pending actions 
      // TODO: Set mutations to update a hasura database with the pending actions for the indexer within this same server (apollo)
      this.actionTracesCommittedActions = this.actionTracesCommittedActions.concat(this.actionTracesPendingActions)
      this.actionTracesPendingActions = []
    }

    const newBlockHeights = {
      lowestBlockNumber: this.lastCommittedBlockNum,
      highestBlockNumber: blockNum,
    }

    // * Create block number file
    createBlockNumberFile(newBlockHeights)
    blockNumbers = newBlockHeights

    console.info('📘::DfuseStreamerEngine::📘::message::ACTION_TRACE::New Block Numbers Starting Points', newBlockHeights)

    this.lastCommittedBlockNum = blockNum

    this.ensureStreamerStream().mark({ atBlockNum: blockNum })
  }

  private ensureStreamerStream: () => Stream = () => {
    if (!this.actionTracesStream) {
      throw new Error('Stream is not initialized')
    }

    return this.actionTracesStream
  }

  public flushPending(): void {
    console.info('📘::DfuseStreamer::📘::message::FLUSH_PENDING::Flushing pending actions')

    this.actionTracesPendingActions = []
  }

  public stop: () => Promise<void> = async () => {
    console.info('📘::DfuseStreamer::📘::message::STOP::Stopping stream')

    if (this.actionTracesStream) {
      await this.ensureStreamerStream().close()
    }
  }

  public restart: () => Promise<void> = async () => {
    try {
      console.info('📘::DfuseStreamer::📘::message::RESTART::Restarting stream')

      await this.ensureStreamerStream().restart()
    } catch (error) {
      console.error('❌::DfuseTransactionBackwards::❌::message::RESTART::error', error)
    }
  }
}

async function updateBitcashDB(trace: ActionTrace<any>) {

  switch (trace.act.name) {
    case 'sellp2plog':
      console.info(`📘::DfuseStreamer::📘::message::ACTION_TRACE::${trace.act.name}::message.data.trace::JSON.stringify`, JSON.stringify(trace, null, 2))
      const offerData: StreamOfferDataType = {
        ...trace.act.data,
        blockNumber: trace.block_num,
        blockTime: trace.block_time,
        transactionId: trace.trx_id,
      }
      await getOfferData(trace.act.account, offerData)
      break
    case 'confirmp2p':
      console.info(`📘::DfuseStreamer::📘::message::ACTION_TRACE::${trace.act.name}::message.data.trace::JSON.stringify`, JSON.stringify(trace, null, 2))
      const confirmData: StreamConfirmDataType = {
        ...trace.act.data,
        blockNumber: trace.block_num,
        blockTime: trace.block_time,
        transactionId: trace.trx_id,
      }
      await getConfirmOfferData(trace.act.account, confirmData)
      break
    default:
      break
  }
}
