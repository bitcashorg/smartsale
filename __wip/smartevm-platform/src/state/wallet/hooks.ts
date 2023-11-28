import { useMemo } from 'react'

import { ChainId, JSBI, Token, TokenAmount, WETH } from '@josojo/honeyswap-sdk'
import { useBalance, useContractReads } from 'wagmi'

import ERC20_ABI from '../../constants/abis/erc20.json'
import { useActiveWeb3React } from '../../hooks'
import { useAllTokens } from '../../hooks/Tokens'
import { isAddress } from '../../utils'

/**
 * Returns a map of token addresses to their eventually consistent token balances for a single account.
 */
export function useTokenBalances(
  address?: string,
  tokens?: (Token | undefined)[],
): { [tokenAddress: string]: TokenAmount | undefined } {
  const validatedTokens: Token[] = useMemo(
    () => tokens?.filter((t?: Token): t is Token => isAddress(t?.address) !== false) ?? [],
    [tokens],
  )

  const validatedTokenAddresses = useMemo(
    () => validatedTokens.map((vt) => vt.address),
    [validatedTokens],
  )

  const { data: balances } = useContractReads({
    // @ts-ignore
    contracts: validatedTokenAddresses.map((validatedTokenAddress) => ({
      address: validatedTokenAddress,
      abi: ERC20_ABI,
      functionName: 'balanceOf',
      args: [address],
    })),
  })

  return useMemo(
    () =>
      address && validatedTokens.length > 0
        ? validatedTokens.reduce<{
            [tokenAddress: string]: TokenAmount | undefined
          }>((memo, token, i) => {
            const value = balances?.[i]
            const amount =
              value?.result || value?.result === BigInt(0)
                ? JSBI.BigInt(value.result.toString())
                : undefined
            if (amount) {
              memo[token.address] = new TokenAmount(token, amount)
            }
            return memo
          }, {})
        : {},
    [address, validatedTokens, balances],
  )
}

// contains the hacky logic to treat the WETH token input as if it's ETH to
// maintain compatibility until we handle them separately.
export function useTokenBalancesTreatWETHAsETH(
  address?: string,
  tokens?: (Token | undefined)[],
): { [tokenAddress: string]: TokenAmount | undefined } {
  const { chainId } = useActiveWeb3React()
  const { includesWETH, tokensWithoutWETH } = useMemo(() => {
    if (!tokens || tokens.length === 0 || !chainId) {
      return { includesWETH: false, tokensWithoutWETH: [] }
    }
    let includesWETH = false
    const tokensWithoutWETH = tokens.filter((t) => {
      if (!chainId) return true
      // @ts-ignore
      const isWETH = (!!WETH[chainId as ChainId] && t?.equals(WETH[chainId as ChainId])) ?? false
      if (isWETH) includesWETH = true
      return !isWETH
    })
    return { includesWETH, tokensWithoutWETH }
  }, [tokens, chainId])

  const balancesWithoutWETH = useTokenBalances(address, tokensWithoutWETH)
  const ETHBalance = useBalance({
    //@ts-ignore
    address,
    enabled: includesWETH,
  })

  return useMemo(() => {
    if (!chainId || !address) return {}
    if (includesWETH && ETHBalance?.data) {
      // @ts-ignore
      const weth = WETH[chainId as ChainId]
      const ethBalance = ETHBalance.data.value
      return {
        ...balancesWithoutWETH,
        ...(ethBalance && weth ? { [weth.address]: new TokenAmount(weth, ethBalance) } : null),
      }
    } else {
      return balancesWithoutWETH
    }
  }, [balancesWithoutWETH, ETHBalance, includesWETH, address, chainId])
}

// get the balance for a single token/account combo
export function useTokenBalance(account?: string, token?: Token): TokenAmount | undefined {
  const tokenBalances = useTokenBalances(account, [token])
  if (!token) return
  return tokenBalances[token.address]
}

// mimics the behavior of useAddressBalance
export function useTokenBalanceTreatingWETHasETHonXDAI(
  account?: string,
  token?: Token,
): TokenAmount | undefined {
  const balances = useTokenBalancesTreatWETHAsETH(account, [token])
  if (!token) return
  return balances?.[token.address]
}

// mimics useAllBalances
export function useAllTokenBalancesTreatingWETHasETH(): {
  [tokenAddress: string]: TokenAmount | undefined
} {
  const { account } = useActiveWeb3React()
  const allTokens = useAllTokens()
  const allTokensArray = useMemo(() => Object.values(allTokens ?? {}), [allTokens])
  const balances = useTokenBalancesTreatWETHAsETH(account ?? undefined, allTokensArray)
  return balances ?? {}
}
