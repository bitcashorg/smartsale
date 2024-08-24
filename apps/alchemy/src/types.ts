import type { Network } from 'alchemy-sdk'
export interface AlchemyWebhookEvent {
  webhookId: string
  id: string
  createdAt: Date
  type: AlchemyWebhookType
  event: Record<any, any>
}

export type AlchemyWebhookType =
  | 'MINED_TRANSACTION'
  | 'DROPPED_TRANSACTION'
  | 'ADDRESS_ACTIVITY'

export interface AlchemyActivity {
  fromAddress: string
  toAddress: string
  blockNum: string
  hash: string
  value: number
  asset: string
  category: string
  rawContract: {
    rawValue: string
    address: string
    decimals: number
  }
  log?: {
    address: string
    topics: string[]
    data: string
    blockNumber: string
    transactionHash: string
    transactionIndex: string
    blockHash: string
    logIndex: string
    removed: boolean
  }
}

export interface AlchemyActivityEvent {
  network: AlchemyNetwork
  activity: AlchemyActivity[]
}

export type AlchemyNetwork = keyof typeof Network
