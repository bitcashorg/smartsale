import { Authorization, DfuseClient, OnStreamMessage, StreamOptions } from "@dfuse/client"

export interface InboundMessageDataTrace {
  account: string
  name: string
  authorization: Authorization[]
  data: any
  hex_data: string
}

export type InitStreamerStreamProps = {
  client: DfuseClient,
  dispatcher: OnStreamMessage
  options: StreamOptions
}
