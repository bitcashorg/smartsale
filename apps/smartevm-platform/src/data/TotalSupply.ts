import { BigNumber } from '@ethersproject/bignumber'
import { Token, TokenAmount } from '@josojo/honeyswap-sdk'
import { useContractRead } from 'wagmi'

import ERC20_ABI from '../constants/abis/erc20.json'

// returns undefined if input token is undefined, or fails to get token contract,
// or contract total supply cannot be fetched
export function useTotalSupply(token?: Token): TokenAmount | undefined {
  const { data } = useContractRead<typeof ERC20_ABI, 'totalSupply', Array<BigNumber>>({
    // @ts-ignore
    address: token?.address,
    abi: ERC20_ABI,
    functionName: 'totalSupply',
  })

  const totalSupply: BigNumber | undefined = data?.[0]

  return token && totalSupply ? new TokenAmount(token, totalSupply.toString()) : undefined
}
