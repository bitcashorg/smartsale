import { SepoliaUSDT } from 'smartsale-contracts'
import { runPromisesInSeries } from './lib'
import { sepoliaClient } from './viem-client'
import { Log, parseAbiItem, stringify } from 'viem'
import { ApprovalEvent, TransferEvent } from './types'
import { db } from 'smartsale-db'
import { sepolia } from 'viem/chains'

export async function startIssuer() {
  console.log('indexing usdt transfers')

  try {
    const logs = await sepoliaClient.getLogs({
      address: SepoliaUSDT.address,
      event: parseAbiItem(
        'event Transfer(address indexed from, address indexed to, uint256 value)',
      ),
      args: {
        to: '0x2C9DAAb3F463d6c6D248aCbeaAEe98687936374a',
      },
      fromBlock: BigInt(SepoliaUSDT.indexFromBlock),
    })

    processLogs(logs)

    // Watch for new event logs
    sepoliaClient.watchEvent({
      address: SepoliaUSDT.address,
      event: parseAbiItem(
        'event Transfer(address indexed from, address indexed to, uint256 value)',
      ),
      args: {
        to: '0x2C9DAAb3F463d6c6D248aCbeaAEe98687936374a',
      },
      onLogs: (logs) => {
        console.log('real time transfer', stringify(logs, null, 2))
        processLogs(logs)
      },
    })
  } catch (error) {
    console.error(error)
  }
}

// takes the generic logs and if the eventName matches one of the eventHandlers keys
// it passes the log to corresponding hanlder function
async function processLogs(logs: Log[]) {
  const actions = logs
    .map((log) => {
      const eventName = (log as any).eventName.toString()
      if (!(eventName in eventHandlers)) return null
      return async () => {
        try {
          eventHandlers[eventName](log)
        } catch (error) {
          //TODO: sent sentry reports
          console.error(error)
        }
      }
    })
    .filter((action): action is () => Promise<void> => action !== null)

  runPromisesInSeries(actions)
}

const eventHandlers: { [key: string]: (log: any) => void } = {
  Transfer: handleTransfer,
  Approval: handleApproval,
}

async function handleTransfer(log: TransferEvent) {
  console.log('handleTransfer', log)

  const data = {
    trx_hash: log.transactionHash!,
    from: log.args.from,
    to: log.args.to,
    amount: log.args.value.toString(),
    token: log.address,
    chain_id: sepolia.id,
    type: 'deposit',
  }

  const result = await db.transfers.upsert({
    where: {
      trx_hash: log.transactionHash!,
    },
    update: data,
    create: data,
  })

  console.log('result', result)
}

function handleApproval(log: ApprovalEvent) {
  console.log('handleApproval', log)
}
