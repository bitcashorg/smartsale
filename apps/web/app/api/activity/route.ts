import crypto from 'node:crypto'
import { appConfig } from '@/lib/config'
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
import { evmTokens } from '@repo/tokens'
import { TriggerClient } from '@trigger.dev/sdk'
import { Alchemy, type Network } from 'alchemy-sdk'
import { NextResponse } from 'next/server'
import { type Address, getAddress, parseUnits } from 'viem'

console.log('appConfig.trigger.apiKey', appConfig.trigger.apiKey)
const trigger = new TriggerClient({
  id: 'web',
  apiKey: appConfig.trigger.apiKey,
})

const networks: AlchemyNetwork[] = evmChains
  .map((chain) => chainIdAlchemyNetwork[chain.id])
  .filter((network): network is AlchemyNetwork => network !== undefined)

// TODO: get from db
const presaleAddress: Address = '0x6F76670A66e7909Af9B76f0D84E39317FCc0B2e1'

export async function POST(req: Request) {
  const payload = await req.text()
  const evt = JSON.parse(payload) as AlchemyWebhookEvent
  const { network, activity } = evt.event as AlchemyActivityEvent

  const isValidSignature = await validateAlchemySignature(
    req,
    evt.webhookId,
    evt.event.network,
    payload,
  )
  if (!isValidSignature)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

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

    const maxAllocationInUnits = presaleData.max_allocation

    const deposits = await getPresaleDeposits({
      address: getAddress(txn.fromAddress),
      projectId: 1,
      supabase,
    })
    const totalDeposits = deposits.reduce(
      (acc, deposit) => acc + Number(deposit.amount),
      0,
    )
    const txnValueInUnits = parseUnits(txn.value?.toString() ?? '0', stableCoinDecimals)
    const totalDepositsInUnits = BigInt(totalDeposits)
    const isValidAmount = txnValueInUnits + totalDepositsInUnits >= maxAllocationInUnits
    const currentTimestamp = Date.now()
    const isWithinPresalePeriod = true // currentTimestamp >= Number(presaleData.start_timestamptz) && currentTimestamp <= Number(presaleData.end_timestamptz)

    const validationErrors = [
      !isValidAsset && `asset: ${txn.asset}`,
      !isValidToAddress && `to address: ${txn.toAddress}`,
      !isSupportedToken && `token: ${txnTokenAddress}`,
      !txn.log && 'missing transaction log',
      !isRegisteredForPresale && 'address is not registered for presale',
      !isValidAmount &&
        `amount exceeds max allocation: ${txn.value} > ${maxAllocationInUnits}`,
      !isWithinPresalePeriod &&
        `transaction outside presale period: current time ${currentTimestamp}, presale start ${presaleData.start_timestamptz}, presale end ${presaleData.end_timestamptz}`,
    ].filter(Boolean)

    if (validationErrors.length) {
      console.error(`Invalid transaction: ${validationErrors.join(', ')}`)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await trigger.sendEvent({
      name: 'address-activity',
      payload: evt,
    })

    console.info(`Triggered address activity event for webhook ${evt.id}`)

    console.info(`Webhook ${evt.id} processed`)
    return NextResponse.json({ message: `Webhook ${evt.id} processed` }, { status: 200 })
  }
}

async function validateAlchemySignature(
  req: Request,
  webhookId: string,
  network: Network,
  payload: string,
): Promise<boolean> {
  const alchemySignature = req.headers.get('x-alchemy-signature')

  if (!alchemySignature) return false
  const settings = {
    authToken: appConfig.alchemy.notifyToken,
    network,
  }

  const alchemy = new Alchemy(settings)
  const { webhooks } = await alchemy.notify.getAllWebhooks()
  const signingKey = webhooks.find((webhook) => webhook.id === webhookId)?.signingKey
  if (!signingKey) {
    console.error(`Webhook ${webhookId} not found`)
    return false
  }

  const hmac = crypto.createHmac('sha256', signingKey)
  hmac.update(payload)
  return alchemySignature === hmac.digest('hex')
}
