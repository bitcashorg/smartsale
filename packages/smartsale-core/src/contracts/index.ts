import { getAddress, getContract } from 'viem'
import type { PublicClient } from 'viem'
import { smartsaleAbis } from '../abis'
import type { SmartsaleAddresses, SmartsaleContractName } from '../types'

export function getSmartsaleContracts({
  client,
  smartsaleAddresses,
}: {
  client: PublicClient
  smartsaleAddresses: SmartsaleAddresses
}) {
  const contracts = Object.keys(smartsaleAbis).reduce(
    (acc, key) => {
      const contractName = key as SmartsaleContractName
      const address = getAddress(smartsaleAddresses[contractName])
      if (!address) {
        console.error(`Address not found for contract: ${key}`)
        return acc
      }

      acc[contractName] = getContract({
        abi: smartsaleAbis[contractName],
        address,
        client,
      })
      return acc
    },
    {} as Record<SmartsaleContractName, ReturnType<typeof getContract>>,
  )

  return contracts
}
