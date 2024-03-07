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
import { useSession } from '@/hooks/use-session'
import { useAccount, useSwitchChain, useWriteContract } from 'wagmi'
import { useState } from 'react'
import { sepolia } from 'viem/chains'
import {
  ERC20ContractData,
  SepoliaUSDT,
  TestnetUSDT
} from 'smartsale-contracts'
import { parseUnits } from 'viem'
import { smartsaleChains } from 'smartsale-chains'

const tokens = [SepoliaUSDT, TestnetUSDT]

export function DepositCard() {
  const { address } = useAccount()
  const { writeContract, ...other } = useWriteContract()
  const [amount, setAmount] = useState<number>(50)
  const { switchChain } = useSwitchChain()
  const [token, setToken] = useState<ERC20ContractData>(TestnetUSDT)

  const deposit = () => {
    if (!amount || !address) return

    switchChain({ chainId: token.chainId })
    writeContract({
      abi: token.abi,
      address: token.address,
      functionName: 'transfer',
      args: [
        '0x2C9DAAb3F463d6c6D248aCbeaAEe98687936374a', // dev only
        parseUnits(amount.toString(), token.decimals)
      ],
      chainId: token.chainId
    })
  }

  return (
    <Card className="w-full bg-[#1a1a1a] rounded-xl p-4 text-white">
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="text-sm">Deposit USDT</div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col min-w-[50%]">
              <span className="text-2xl font-semibold">
                <Input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={e => setAmount(parseInt(e.target.value))}
                />
              </span>
            </div>
            <Select onValueChange={i => setToken(tokens[parseInt(i)])}>
              <SelectTrigger id="currency-out">
                <SelectValue
                  placeholder={
                    smartsaleChains.testnet.get(tokens[0].chainId)?.name
                  }
                />
              </SelectTrigger>
              <SelectContent position="popper">
                {tokens.map((o, i) => (
                  <SelectItem key={i} value={i.toString()}>
                    {smartsaleChains.testnet.get(o.chainId)?.name}
                  </SelectItem>
                ))}
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
