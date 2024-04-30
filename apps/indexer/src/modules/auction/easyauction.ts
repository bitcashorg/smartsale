import { getContract } from 'viem'
import { client } from '../../lib/evm-client'
import { TestnetEasyAuction } from 'smartsale-contracts'

export const easyAuction = getContract({
  ...TestnetEasyAuction,
  client: {
    public: client,
  },
})
