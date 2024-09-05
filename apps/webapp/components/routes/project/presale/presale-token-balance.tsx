'use client'

import { useErc20Balance } from '@/hooks/use-balance'
import { TestnetBLPL } from '@repo/contracts'
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

  return <div className="text-lg mt-5 text-center">{formatted} BPBL</div>
}
