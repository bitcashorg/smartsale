import { TestnetEasyAuction } from '@repo/contracts'
import { eosEvmTestnet } from 'app-env'
import { createPublicClient, getContract, http } from 'viem'

const client = createPublicClient({
  chain: eosEvmTestnet,
  transport: http(),
})

export const easyAuction = getContract({
  ...TestnetEasyAuction,
  client: {
    public: client,
  },
})
