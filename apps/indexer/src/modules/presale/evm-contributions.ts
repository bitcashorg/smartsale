import { EVMTokenContractData, appContracts } from 'app-contracts'
import { runPromisesInSeries } from '~/lib/utils'
import { Address, Log, PublicClient, createPublicClient, http, parseAbiItem, stringify } from 'viem'
import { TransferEvent } from '~/modules/auction/auction.type'
import { upsertTransfers } from '~/lib/supabase-client'

const presaleWallet = '0xf7bb6BD787FFbA43539219560E3B8162Ba8EEF09'
const tokens: EVMTokenContractData[] = appContracts.dev.tokens.evm && appContracts.prod.tokens.evm

export async function listenToEvmContributions() {
  console.log('subscribing to evm usdt transfers ...')
  tokens.map(listenToEvmTransfersFn)
}

async function listenToEvmTransfersFn(token: EVMTokenContractData) {
  console.log(`listening usdt transfers for token ${token.symbol} on chain ${token.chain.name}`)
  const client: PublicClient = createPublicClient({
    chain: token.chain,
    transport: http(),
  })
  try {
    const latestBlock = await client.getBlockNumber()
    const logs = await client.getLogs({
      address: token.address,
      event: parseAbiItem(
        'event Transfer(address indexed from, address indexed to, uint256 value)',
      ),
      args: {
        to: presaleWallet,
      },
      fromBlock: latestBlock,
    })

    // delay prevents idempotent transactions:
    processLogs(logs, token, 3000)

    // Watch for new event logs
    client.watchEvent({
      address: token.address,
      event: parseAbiItem(
        'event Transfer(address indexed from, address indexed to, uint256 value)',
      ),
      args: {
        to: presaleWallet,
      },
      onLogs: (logs) => {
        console.log('real time transfer', stringify(logs, null, 2))
        processLogs(logs, token)
      },
    })
  } catch (error) {
    console.error(error)
  }
}

// takes the generic logs and if the eventName matches one of the eventHandlers keys
// it passes the log to corresponding hanlder function
async function processLogs(logs: Log[], token: EVMTokenContractData, delay = 0) {
  const actions = logs
    .map((log) => {
      const eventName = (log as any).eventName.toString()
      if (!(eventName in eventHandlers)) return null
      return async () => {
        try {
          eventHandlers[eventName] && eventHandlers[eventName](log, token)
        } catch (error) {
          //TODO: sent sentry reports
          console.error(error)
        }
      }
    })
    .filter((action): action is () => Promise<void> => action !== null)

  runPromisesInSeries(actions, delay)
}

const eventHandlers: { [key: string]: (log: any, token: EVMTokenContractData) => void } = {
  Transfer: handleTransfer,
}

async function handleTransfer(log: TransferEvent, token: EVMTokenContractData) {
  const data = {
    trx_hash: log.transactionHash!,
    from: log.args.from as Address,
    to: log.args.to as Address,
    amount: Number(log.args.value),
    token: log.address,
    chain_id: token.chainId,
    type: 'presale',
  }

  console.log('new transfer')
  console.log(data)

  upsertTransfers(data)

  // console.log('result', result)
  // if (result.usdcred_trx || data.from === '0x0000000000000000000000000000000000000000') return

  // const usdcred_trx = (await issuePresaleTokens(data.from, data.amount)) as Address

  // console.log('tokens issued', { usdcred_trx, trx: log.transactionHash })
}
