import { listenToEosContributions } from './eos-contributions'
import { listenToEvmContributions } from './evm-contributions'

export function startPresaleService() {
  listenToEosContributions()
  listenToEvmContributions()
}
