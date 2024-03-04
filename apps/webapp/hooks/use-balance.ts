import { numberWithCommas } from '@/lib/utils'
import { Abi, Address, formatUnits, stringify } from 'viem'
import { useBalance, useReadContracts } from 'wagmi'

export function useNativeBalance(address?: Address) {
  const balance = useBalance({ address })

  const formatted =
    balance.data &&
    numberWithCommas(formatUnits(balance.data.value, balance.data.decimals))

  return { formatted, ...balance }
}

export function useErc20Balance({
  contract,
  address,
  abi
}: UseErc20BalanaceParams) {
  const common = {
    address: contract,
    abi
  } as const

  const result = useReadContracts({
    contracts: [
      {
        functionName: 'balanceOf',
        ...common,
        args: [address]
      },
      {
        functionName: 'symbol',
        ...common
      },
      {
        functionName: 'decimals',
        ...common
      }
    ]
  })

  console.log('data', stringify(result.data && result.data))

  const data = result.data && {
    value: BigInt((result.data[0].result as bigint) || 0),
    symbol: result.data[1].result as string,
    decimals: result.data[2].result as number
  }

  const formatted =
    data?.value && data?.decimals
      ? numberWithCommas(formatUnits(data.value, data.decimals))
      : null

  return { ...result, data, formatted }
}

interface UseErc20BalanaceParams {
  contract: Address
  address: Address
  abi: Abi
}
