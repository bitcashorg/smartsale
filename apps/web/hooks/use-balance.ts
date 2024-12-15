import { wagmiConfig } from '@/components/layout/providers'
import { eosEvmMainnet } from '@smartsale/chains'
import { formatCurrency } from '@smartsale/lib'
import { watchBlockNumber } from '@wagmi/core'
import { useEffect } from 'react'
import { type Abi, type Address, formatUnits } from 'viem'
import { useBalance, useReadContracts } from 'wagmi'

export function useNativeBalance(address?: Address) {
  const balance = useBalance({
    address,
    chainId: eosEvmMainnet.id,
  })

  const formatted =
    balance.data &&
    formatCurrency({
      value: formatUnits(balance.data.value, balance.data.decimals),
    })

  useEffect(() => {
    const unwatch = watchBlockNumber(wagmiConfig, {
      onBlockNumber() {
        balance.refetch()
      },
    })
    return () => unwatch()
  })

  return { formatted, ...balance }
}

export function useErc20Balance({
  contract,
  address,
  abi,
  chainId,
}: UseErc20BalanaceParams) {
  const common = {
    address: contract,
    abi,
    chainId,
  } as const

  const result = useReadContracts({
    contracts: [
      {
        functionName: 'balanceOf',
        ...common,
        args: [address],
      },
      {
        functionName: 'symbol',
        ...common,
      },
      {
        functionName: 'decimals',
        ...common,
      },
    ],
  })

  // console.log('data', stringify(result.data && result.data))

  const data = result.data && {
    value: BigInt((result.data[0].result as bigint) || 0),
    symbol: result.data[1].result as string,
    decimals: result.data[2].result as number,
  }

  const formatted =
    data?.value && data?.decimals
      ? formatCurrency({ value: formatUnits(data.value, data.decimals) })
      : 0

  useEffect(() => {
    const unwatch = watchBlockNumber(wagmiConfig, {
      onBlockNumber() {
        result.refetch()
      },
    })
    return () => unwatch()
  })

  return { ...result, data, formatted }
}

interface UseErc20BalanaceParams {
  contract: Address
  address: Address
  abi: Abi
  chainId: number
}
