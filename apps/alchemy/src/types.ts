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

