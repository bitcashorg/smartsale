import { numberWithCommas } from '@/lib/utils'
import {erc20Abi} from 'abitype/abis'
import { Address, formatUnits } from 'viem'
import { useBalance, useReadContracts } from 'wagmi'

export function useNativeBalance(address?: Address) {
  const balance = useBalance({ address })

  const formatted =
    balance.data &&
    numberWithCommas(formatUnits(balance.data.value, balance.data.decimals))

  return { formatted, ...balance }
}

export function useErc20Balance({ contract, address }: UseErc20BalanaceParams) {
  const common = {
    address: contract,
    abi: erc20Abi
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

  const data = result.data && {
    value: result.data[0].result!,
    symbol: result.data[1].result!,
    decimals: result.data[2].result!
  }

  const formatted =
    data && numberWithCommas(formatUnits(data.value, data.decimals))

  return { ...result, data, formatted }
}

interface UseErc20BalanaceParams {
  contract: Address
  address: Address
}
