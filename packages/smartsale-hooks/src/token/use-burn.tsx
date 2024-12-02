'use client'
/**
 * Hook to burn tokens from a user's wallet
 * @param address Optional address to burn tokens from. Defaults to connected wallet
 * @param tokenAddress Token contract address to burn tokens from
 * @param amount Amount of tokens to burn in wei
 * @returns Burn function and transaction state
 */
import { testnetTokenAbi } from '@smartsale/core'
import { type Address, getAddress, toHex } from 'viem'
import { useAccount, useWriteContract } from 'wagmi'

export function useBurn({
  address,
  tokenAddress,
  amount,
}: {
  address?: Address
  tokenAddress: Address
  amount: bigint
}) {
  const account = useAccount()

  const { writeContract, ...o } = useWriteContract()

  const burn = () => {
    writeContract({
      abi: testnetTokenAbi,
      address: getAddress(tokenAddress),
      functionName: 'burn',
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      args: [address || account.address!, amount],
    })
  }

  return {
    hash: o.data && toHex(o.data),
    burn,
    ...o,
  }
}
