import {getContract, http, createPublicClient} from 'viem';
import { TestnetEasyAuction } from 'app-contracts'
import {eosEvmTestnet} from 'app-env';

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
