import { smartsaleEnv } from 'smartsale-env'

// required by dfuse/client
import { issueTokens } from './evm-tranfers'
import { stringify } from 'viem/utils'
import { createFirehoseSubscription } from '~/modules/swaps/dfuse-client'

export async function listenToEosTransfers(env: 'test' | 'prod' = 'test') {
  const usdt = smartsaleEnv[env].usdt.find((t) => (t.chainType = 'antelope'))?.address
  const bank = smartsaleEnv[env].bitcash.bank
  const launchpad = smartsaleEnv[env].smartsale.bk
  // https://docs.dfuse.eosnation.io/platform/public-apis/search-query-language/
  // https://docs.dfuse.eosnation.io/eosio/public-apis/reference/search/terms/
  // receiver: means the account with code that has executed the action.
  const usdtDeposits = await createFirehoseSubscription(
    `receiver:${bank} action:stbtransfer data.to:${launchpad}`,
  )
  const bitusdDeposits = await createFirehoseSubscription(
    `receiver:${usdt} action:transfer data.to:${launchpad}`,
  )

  // only first action for now
  usdtDeposits.on('data', ({ trxId, actions }) =>
    handleDeposit({ trxId, from: actions[0].from, quantity: actions[0].quantity }),
  )
  bitusdDeposits.on('data', ({ trxId, actions }) =>
    handleDeposit({ trxId, from: actions[0].from, quantity: actions[0].quantity.quantity }),
  )
}

async function handleDeposit(data: { trxId: string; from: string; quantity: string }) {
  console.log('handle deposit', data)

  const response = await issueTokens(
    '0x7472312e4e1a373df751f84bd871a4c7a16128fa',
    BigInt(data.quantity),
  )
  console.log('tokens issued', stringify(response))
}
