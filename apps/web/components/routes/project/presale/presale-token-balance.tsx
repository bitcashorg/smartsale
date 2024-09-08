'use client'

import { useErc20Balance } from '@/hooks/use-balance'
import { TestnetBLPL } from '@repo/auction'
import type { Address } from 'viem'
import { useAccount } from 'wagmi'

export function PresaleTokenBalance() {
  const { address } = useAccount()
  const { formatted } = useErc20Balance({
    contract: TestnetBLPL.address,
    abi: TestnetBLPL.abi,
    address: address as Address,
    chainId: TestnetBLPL.chainId,
  })

  return (
    <div className="text-5xl mt-5 font-bold text-center">
      <span className="text-green-500">{formatted}</span> <br />
      <span className="text-4xl ">BLPL</span>
      <p>Bitlauncher Presale Tokens</p>
    </div>
  )
}
