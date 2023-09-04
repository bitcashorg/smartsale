import { useMemo } from 'react'

import { Token, TokenAmount } from '@josojo/honeyswap-sdk'
import { useContractRead } from 'wagmi'

import ERC20_ABI from '../constants/abis/erc20.json'

export function useTokenAllowance(
  token?: Token,
  owner?: string,
  spender?: string,
): TokenAmount | undefined {
  const { data: allowance } = useContractRead({
    // @ts-ignore
    address: token?.address,
    abi: ERC20_ABI,
    functionName: 'allowance',
    args: [owner, spender],
    watch: true,
    enabled: !!token?.address,
  })

  return useMemo(
    () =>
      token && (allowance || allowance === BigInt(0))
        ? new TokenAmount(token, allowance.toString())
        : undefined,
    [token, allowance],
  )
}
