import crypto from 'node:crypto'
import { appConfig } from '@/lib/config'
import { createSupabaseServerClient, getPresaleData } from '@/services/supabase'
import {
  getPresaleByAddress,
  getProcessedPresaleDeposits,
  isAddressRegisteredForPresale,
  isDepositProcessing,
  setPresaleDepositStatus,
} from '@/services/supabase/service'
import type {
  AlchemyActivity,
  AlchemyActivityEvent,
  AlchemyNetwork,
  AlchemyWebhookEvent,
} from '@repo/alchemy'
import { chainIdAlchemyNetwork } from '@repo/alchemy'
import { evmChains } from '@repo/chains'
import { evmTokens } from '@repo/tokens'
import type { SupabaseClient } from '@supabase/supabase-js'
import { tasks } from '@trigger.dev/sdk/v3'
import { Alchemy, type Network } from 'alchemy-sdk'
import { NextResponse } from 'next/server'
import { type Address, getAddress, parseUnits } from 'viem'

const networks: AlchemyNetwork[] = evmChains
  .map((chain) => chainIdAlchemyNetwork[chain.id])
  .filter((network): network is AlchemyNetwork => network !== undefined)

export async function POST(req: Request) {
  // parse and log the request
  const payload = await req.text()
  const evt = JSON.parse(payload) as AlchemyWebhookEvent
  const { network, activity } = evt.event as AlchemyActivityEvent
  console.log('Received webhook', evt.id, evt.event.network)

  // validate if it's comming from alchemy and if we are interested in the event
  // if (!(await validateAlchemySignature(req, evt.webhookId, evt.event.network, payload)))
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  if (!isValidEvent(evt, network))
    return NextResponse.json({ error: 'Invalid event' }, { status: 400 })

  const supabase = await createSupabaseServerClient()

  // validate each transaction in the alchemy activity event
  for (const txn of activity) {
    const validationResult = await validateTransaction(txn, supabase)
    if (!validationResult.isValid) {
      console.error(`Invalid transaction: ${validationResult.errors.join(', ')}`)
      return NextResponse.json({ error: 'Invalid transaction' }, { status: 400 })
    }

    // update the deposit status to processing
    if (!(await processDeposit(txn, supabase)))
      return NextResponse.json({ error: 'Error processing deposit' }, { status: 500 })

    // trigger the address activity event
    const result = await tasks.trigger('address-activity', evt)
    console.info(`Triggered address activity event for webhook ${evt.id}`, result)
  }

  console.info(`Webhook ${evt.id} processed`)
  return NextResponse.json({ message: `Webhook ${evt.id} processed` }, { status: 200 })
}

function isValidEvent(evt: AlchemyWebhookEvent, network: AlchemyNetwork): boolean {
  const isAddressActivity = evt.type === 'ADDRESS_ACTIVITY'
  const isValidNetwork = networks.includes(network)
  if (!isAddressActivity || !isValidNetwork) {
    const errorMsg = !isAddressActivity
      ? `event type: ${evt.type}`
      : `network: ${network}`
    console.error(`Invalid: ${errorMsg}`)
    return false
  }
  return true
}

async function validateTransaction(txn: AlchemyActivity, supabase: SupabaseClient) {
  const isValidAsset = txn.asset === 'USDC' || txn.asset === 'USDT'
  const presaleByAddress = await getPresaleByAddress(txn.toAddress as Address, supabase)
  const txnTokenAddress = txn.rawContract?.address && getAddress(txn.rawContract.address)
  const isSupportedToken =
    txnTokenAddress &&
    evmTokens.some((token) => txnTokenAddress === getAddress(token.address))
  const isRegisteredForPresale = await isAddressRegisteredForPresale(
    txn.fromAddress,
    1,
    supabase,
  )
  const presaleData = await getPresaleData({ projectId: 1, supabase })
  const stableCoinDecimals = 6

  const maxAllocationInUnits = presaleData.max_allocation
  const deposits = await getProcessedPresaleDeposits({
    address: getAddress(txn.fromAddress),
    projectId: 1,
    supabase,
  })
  const isDepositProcessed = await isDepositProcessing({
    depositHash: txn.hash,
    supabase,
  })
  const totalDeposits = deposits.reduce((acc, deposit) => acc + Number(deposit.amount), 0)
  const txnValueInUnits = parseUnits(txn.value?.toString() ?? '0', stableCoinDecimals)
  const totalDepositsInUnits = BigInt(totalDeposits)
  // const isValidAmount = true // TODO: check

  const isValidAmount = txnValueInUnits + totalDepositsInUnits >= maxAllocationInUnits
  console.info({
    txnValueInUnits,
    totalDepositsInUnits,
    maxAllocationInUnits,
    isValidAmount,
  })
  const currentTimestamp = Date.now()
  const isWithinPresalePeriod = true // currentTimestamp >= Number(presaleData.start_timestamptz) && currentTimestamp <= Number(presaleData.end_timestamptz)

  const errors = [
    isDepositProcessed && 'deposit already processed',
    !isValidAsset && `asset: ${txn.asset}`,
    !presaleByAddress && `to address: ${txn.toAddress}`,
    !isSupportedToken && `token: ${txnTokenAddress}`,
    !txn.log && 'missing transaction log',
    !isRegisteredForPresale && 'address is not registered for presale',
    !isValidAmount &&
      `amount exceeds max allocation: ${txn.value} > ${maxAllocationInUnits}`,
    !isWithinPresalePeriod &&
      `transaction outside presale period: current time ${currentTimestamp}, presale start ${presaleData.start_timestamptz}, presale end ${presaleData.end_timestamptz}`,
  ].filter(Boolean)

  return { isValid: errors.length === 0, errors }
}

async function processDeposit(
  txn: AlchemyActivity,
  supabase: SupabaseClient,
): Promise<boolean> {
  const processingDeposit = await setPresaleDepositStatus({
    depositHash: txn.hash,
    supabase,
    state: 'processing',
  })
  if (!processingDeposit) {
    console.error(`Error processing deposit: ${txn.hash}`)
    return false
  }
  return true
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
