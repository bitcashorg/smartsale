import crypto from 'node:crypto'
import {
  createSupabaseServerClient,
  getPresaleData,
  getPresaleDeposits,
} from '@/services/supabase'
import type {
  AlchemyActivityEvent,
  AlchemyNetwork,
  AlchemyWebhookEvent,
} from '@repo/alchemy'
import { chainIdAlchemyNetwork } from '@repo/alchemy'
import { evmChains } from '@repo/chains'
import { addressActivityTask } from '@repo/jobs'
import { evmTokens } from '@repo/tokens'
import { NextResponse } from 'next/server'
import { type Address, getAddress, parseUnits } from 'viem'

const networks: AlchemyNetwork[] = evmChains
  .map((chain) => chainIdAlchemyNetwork[chain.id])
  .filter((network): network is AlchemyNetwork => network !== undefined)

// TODO: get from db
const presaleAddress: Address = '0x6F76670A66e7909Af9B76f0D84E39317FCc0B2e1'

export async function POST(req: Request) {
  if (!(await validateAlchemySignature(req))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const evt = (await req.json()) as AlchemyWebhookEvent
  console.info(`Alchemy webhook received: ${JSON.stringify(evt)}`)

  const { network, activity } = evt.event as AlchemyActivityEvent
  const isAddressActivity = evt.type === 'ADDRESS_ACTIVITY'
  const isValidNetwork = networks.includes(network)

  if (!isAddressActivity || !isValidNetwork) {
    const errorMsg = !isAddressActivity
      ? `event type: ${evt.type}`
      : `network: ${network}`
    console.error(`Invalid: ${errorMsg}`)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = await createSupabaseServerClient()

  for (const txn of activity) {
    const isValidAsset = txn.asset === 'USDC' || txn.asset === 'USDT'
    const isValidToAddress = txn.toAddress !== presaleAddress
    const txnTokenAddress =
      txn.rawContract?.address && getAddress(txn.rawContract.address)
    const isSupportedToken =
      txnTokenAddress &&
      evmTokens.some((token) => txnTokenAddress === getAddress(token.address))
    const isRegisteredForPresale = true // await isAddressRegisteredForPresale(txn.fromAddress, 1)
    const presaleData = await getPresaleData({ projectId: 1, supabase })
    const stableCoinDecimals = 6

    const maxAllocationInUnits = parseUnits(
      presaleData.max_allocation.toString(),
      stableCoinDecimals,
    )
    const deposits = await getPresaleDeposits({
      address: getAddress(txn.fromAddress),
      projectId: 1,
      supabase,
    })
    const totalDeposits = deposits.reduce(
      (acc, deposit) => acc + Number(deposit.amount),
      0,
    )
    const txnValueInUnits = parseUnits(txn.value.toString(), stableCoinDecimals)
    const totalDepositsInUnits = BigInt(totalDeposits)

    const isValidAmount =
      txnValueInUnits + totalDepositsInUnits >= presaleData.max_allocation
    const currentTimestamp = Date.now()
    const isWithinPresalePeriod = true // currentTimestamp >= Number(presaleData.start_timestamptz) && currentTimestamp <= Number(presaleData.end_timestamptz)

    const validationErrors = [
      !isValidAsset && `asset: ${txn.asset}`,
      !isValidToAddress && `to address: ${txn.toAddress}`,
      !isSupportedToken && `token: ${txnTokenAddress}`,
      !txn.log && 'missing transaction log',
      !isRegisteredForPresale && 'address is not registered for presale',
      !isValidAmount &&
        `amount exceeds max allocation: ${txn.value} > ${presaleData.max_allocation}`,
      !isWithinPresalePeriod &&
        `transaction outside presale period: current time ${currentTimestamp}, presale start ${presaleData.start_timestamptz}, presale end ${presaleData.end_timestamptz}`,
    ].filter(Boolean)

    if (validationErrors.length) {
      console.error(`Invalid transaction: ${validationErrors.join(', ')}`)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const handle = await addressActivityTask.trigger(evt)
    console.info(`Triggered address activity task: ${JSON.stringify(handle)}`)
  }

  console.info(`Webhook ${evt.id} processed`)
  return NextResponse.json({ message: `Webhook ${evt.id} processed` }, { status: 200 })
}

async function validateAlchemySignature(req: Request): Promise<boolean> {
  const alchemySignature = req.headers.get('x-alchemy-signature')
  if (!alchemySignature) return false
  // TODO: get from db
  const activitySigningKey = ''

  const payload = await req.text()
  const hmac = crypto.createHmac('sha256', activitySigningKey)
  hmac.update(payload)
  return alchemySignature === hmac.digest('hex')
}
