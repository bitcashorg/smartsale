import { createBitcashClient } from "bitcash-genql";
import { serverEnv } from "../config";
import ws from 'ws';

export const shouldSetAllActions = !serverEnv.actions.length || serverEnv.actions.includes('*')

export const bitcashProdClient = createBitcashClient({
  env: 'prod',
  config: {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': serverEnv.db.adminSecret
    }
  },
  options: {
    webSocketImpl: ws.WebSocket,
  },
})
export const bitcashDevClient = createBitcashClient({
  env: 'test',
  config: {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': serverEnv.db.adminSecret
    }
  },
  options: {
    webSocketImpl: ws.WebSocket,
  },
})

export const isTestContracts = (contract: string) => serverEnv.contracts.development.includes(contract)

export const printBlock = (blockId: string, blockNum: number): string => `${blockId.slice(0, 8)}...${blockId.slice(-8)} (${blockNum})`

export const RESET_TIMEOUT_MS = 1000 * 60 * 60 * 24 * 6 // ms * s * m * h * d
// export const RESET_TIMEOUT_MS = 185000 // ? Test value: 3min 5seg until next confirmed blocks