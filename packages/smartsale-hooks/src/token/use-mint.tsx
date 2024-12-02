'use client'
/**
 * Hook to mint tokens to a user's wallet
 * @param address Optional address to mint tokens to. Defaults to connected wallet
 * @param tokenAddress Token contract address to mint tokens from
 * @param amount Amount of tokens to mint in wei
 * @returns Mint function and transaction state
 */
import { testnetTokenAbi } from '@smartsale/core'
import { type Address, getAddress, toHex } from 'viem'
import { useAccount, useWriteContract } from 'wagmi'

export function useMint({
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

  const mint = () => {
    writeContract({
      abi: testnetTokenAbi,
      address: getAddress(tokenAddress),
      functionName: 'mint',
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      args: [address || account.address!, amount],
    })
  }

  return {
    hash: o.data && toHex(o.data),
    mint,
    ...o,
  }
}
