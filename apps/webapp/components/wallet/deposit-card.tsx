'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  genBitusdDepositSigningRequest,
  genUsdtDepositSigningRequest
} from '@/lib/eos'
import { useState } from 'react'
import {
  EVMTokenContractData,
  TestnetUSDT,
  TokenContractData
} from 'smartsale-contracts'
import { smartsaleEnv } from 'smartsale-env'
import { parseUnits } from 'viem'
import { useAccount, useSwitchChain, useWriteContract } from 'wagmi'
import { useSignatureRequest } from '../esr-dialog'
import { Input } from '../ui/input'
import { useGlobalData } from '@/hooks/use-global-data'

const usdtMap = new Map<string, TokenContractData>()
smartsaleEnv.test.usdt.forEach(t => {
  const key = JSON.stringify(t)
  return usdtMap.set(key, t)
})

export function DepositCard() {
  const { address } = useAccount()
  const { writeContract, ...other } = useWriteContract()
  const { setGlobalError } = useGlobalData()
  const [amount, setAmount] = useState<number>(42)
  const { switchChain } = useSwitchChain()
  const [token, setToken] = useState<TokenContractData>(TestnetUSDT)
  const { requestSignature } = useSignatureRequest()

  const deposit = async () => {
    if (!address)
      setGlobalError(
        'EVM Adress not found. Make sure your wallet is connected.'
      )
    if (!amount) return
    // console.log('deposit', token)

    if (token.chainType === 'evm') {
      const evmToken = token as EVMTokenContractData
      switchChain({ chainId: evmToken.chainId })
      writeContract({
        abi: evmToken.abi,
        address: evmToken.address,
        functionName: 'transfer',
        args: [
          '0x2C9DAAb3F463d6c6D248aCbeaAEe98687936374a', // dev only
          parseUnits(amount.toString(), evmToken.decimals)
        ],
        chainId: evmToken.chainId
      })
    } else {
      // handle eos token bitusd and usdt
      const esr =
        token.symbol === 'USDT'
          ? await genUsdtDepositSigningRequest(amount, address)
          : await genBitusdDepositSigningRequest(amount, address)
      requestSignature(esr)
    }
  }

  return (
    <Card className="w-full dark:bg-[#1a1a1a] bg-gray-200 rounded-xl p-4">
      <CardContent>
        <div className="flex flex-col space-y-4">
          <label htmlFor="deposit" className="text-sm">
            Convert to USDCred
          </label>
          <div className="flex items-center justify-between">
            <div className="flex flex-col min-w-[40%]">
              <span className="text-2xl font-semibold">
                <Input
                  type="number"
                  id="deposit"
                  name="deposit"
                  placeholder="0.00"
                  value={amount}
                  onChange={e => setAmount(parseInt(e.target.value))}
                />
              </span>
            </div>
            <Select onValueChange={chainId => setToken(usdtMap.get(chainId)!)}>
              <SelectTrigger id="currency-out">
                <SelectValue
                  placeholder={`${token.symbol} on ${token.chainName}`}
                />
              </SelectTrigger>
              <SelectContent position="popper">
                {Array.from(usdtMap.values()).map(t => {
                  const key = JSON.stringify(t)
                  const usdt = usdtMap.get(key)

                  return (
                    <SelectItem key={key} value={key}>
                      {usdt?.symbol} on {usdt?.chainName}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button
          className="w-full bg-[#bd1e59]"
          // disabled={!session?.account}
          onClick={deposit}
        >
          Deposit
        </Button>
      </CardFooter>
    </Card>
  )
}
