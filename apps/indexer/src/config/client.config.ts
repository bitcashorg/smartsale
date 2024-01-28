import WebSocketClient from "ws"
import { WebSocket, WebSocketFactory, createDfuseClient } from "@dfuse/client"
import { serverEnv } from "./server-env.config"
import nodeFetch from "node-fetch"
import { IncomingMessage } from "http"

(global as any).fetch = require("node-fetch");
(global as any).WebSocket = require("ws");

export const dfuseClient = createDfuseClient({
  apiKey: serverEnv.dfuse.apiKey,
  network: serverEnv.dfuse.rpc,
  authentication: true,
  httpClientOptions: {
    fetch: nodeFetch,
  },
  graphqlStreamClientOptions: {
    socketOptions: {
      // @ts-ignore
      webSocketFactory: url => webSocketFactory(url, ['graphql-ws']),
    },
  },
  streamClientOptions: {
    socketOptions: {
      // @ts-ignore
      webSocketFactory,
    }
  }
})

console.info('📘::dfuseClient::📘::dfuseClient.endpoints', dfuseClient.endpoints)

async function webSocketFactory(url: string, protocols: string[] = []): Promise<WebSocketFactory> {
  const webSocket = new WebSocketClient(url, protocols, {
    handshakeTimeout: 30 * 1000, // 30s
    maxPayload: 100 * 1024 * 100, // 100Mb
  })
  const onUpgrade = (response: IncomingMessage) => {
    // console.log('📘::webSocketFactory::📘::onUpgrade::Socket upgrade response', response)

    // ? Removing the listener at this point since this factory
    // ? is called at each reconnection with the remote endpoint!
    webSocket.removeListener('upgrade', onUpgrade)
  }

  webSocket.on('upgrade', onUpgrade)

  // ! WebSocketFactory is !== from WebSocket type... version coalitions...ignoring for testing
  // @ts-ignore
  return webSocket
}