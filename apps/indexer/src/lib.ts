import fs from 'fs/promises'
import { erc20Abi } from 'abitype/abis'
import { client } from './evm-client'
import { Abi, Address } from 'viem'

export async function writeToFile(data: string, filePath: string) {
  try {
    // Write the data to the specified file
    // If the file does not exist, it will be created.
    await fs.writeFile(filePath, data, 'utf8')

    console.log('Logs have been written to the file successfully.')
  } catch (error) {
    console.error('Error writing logs to file:', error)
  }
}

export function runPromisesInSeries<T>(promiseFns: (() => Promise<T>)[]): Promise<T | void> {
  // Start with a Promise<void> to ensure compatibility with the accumulator's type
  return promiseFns.reduce<Promise<T | void>>((prevPromise, currentPromiseFn) => {
    // Chain the current promise to the accumulator after the previous one completes
    // Here, we ignore the result of the previous promise, as we're focusing on chaining
    return prevPromise.then(() => currentPromiseFn())
  }, Promise.resolve())
}

export async function getTokenDetails({ address }: { address: Address }) {
  const results = await client.multicall({
    contracts: [
      {
        address,
        abi: erc20Abi,
        functionName: 'decimals',
        args: [],
      },
      {
        address,
        abi: erc20Abi,
        functionName: 'symbol',
        args: [],
      },
    ],
    multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11'
  })

  return { address, decimals: Number(results[0].result), symbol: String(results[1].result) }
}


export function bigintToPostgresTimestamp(timestamp: bigint): string {
  const date = new Date(Number(timestamp) * 1000); // Convert seconds to milliseconds
  return date.toISOString().replace('T', ' ').replace('Z', ''); // Convert to PostgreSQL timestamp format
}


export const getEvents = (abi: Abi) => abi.filter(item => item.type === 'event');