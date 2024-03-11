'use client'

import { Button } from '@/components/ui/button'
import { CardContent, CardFooter, Card } from '@/components/ui/card'
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select
} from '@/components/ui/select'
import { Input } from '../ui/input'

import { useAccount, useSwitchChain, useWriteContract } from 'wagmi'
import { useState } from 'react'

import {
  TokenContractData,
  TestnetUSDT,
  EVMTokenContractData
} from 'smartsale-contracts'
import { parseUnits } from 'viem'
import { smartsaleEnv } from 'smartsale-env'
import { useSignatureRequest } from '../esr-dialog'
import {
  genBitusdDepositSigningRequest,
  genUsdtDepositSigningRequest
} from '@/lib/eos'
import { hashObject } from '@/lib/utils'

const usdtMap = new Map<string, TokenContractData>()
smartsaleEnv.test.usdt.forEach(t => {
  const key = JSON.stringify(t)
  return usdtMap.set(key, t)
})

export function DepositCard() {
  const { address } = useAccount()
  const { writeContract, ...other } = useWriteContract()
  const [amount, setAmount] = useState<number>(42)
  const { switchChain } = useSwitchChain()
  const [token, setToken] = useState<TokenContractData>(TestnetUSDT)
  const { requestSignature } = useSignatureRequest()

  const deposit = async () => {
    if (!amount || !address) return
    console.log('deposit', token)

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
          ? await genUsdtDepositSigningRequest(amount)
          : await genBitusdDepositSigningRequest(amount, address)
      requestSignature(esr)
    }
  }

  return (
    <Card className="w-full bg-[#1a1a1a] rounded-xl p-4 text-white">
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="text-sm">Convert to USDCred</div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col min-w-[40%]">
              <span className="text-2xl font-semibold">
                <Input
                  type="number"
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
