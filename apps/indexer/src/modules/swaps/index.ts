import { listenToEosTransfers } from './eos-transfers'
import { listenToEvmTransfers } from './evm-tranfers'

export function startSwapsService() {
  listenToEosTransfers()
  listenToEvmTransfers()
}
