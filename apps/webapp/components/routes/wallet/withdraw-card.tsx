'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useState } from 'react'
import { TestnetUSDCred } from 'smartsale-contracts'
import { parseUnits } from 'viem'
import { useAccount, useSwitchChain, useWriteContract } from 'wagmi'
import { Input } from '../../ui/input'
import { cn } from '@/lib/utils'

export function WithdrawCard() {
  const { address } = useAccount()
  const { writeContract, ...other } = useWriteContract()
  const [amount, setAmount] = useState<number>(50)
  const { switchChain } = useSwitchChain()

  const withdraw = () => {
    if (!amount || !address) return

    switchChain({ chainId: TestnetUSDCred.chainId })
    writeContract({
      abi: TestnetUSDCred.abi,
      address: TestnetUSDCred.address,
      functionName: 'burn',
      args: [parseUnits(amount.toString(), TestnetUSDCred.decimals)],
      chainId: TestnetUSDCred.chainId
    })
  }

  // console.log('burn tokens state', other)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Convert to BITUSD</CardTitle>
        <CardDescription>
          Burn your USD Credits and receive BITUSD on your Bitcash account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex min-w-[40%] flex-col">
              <span className="text-2xl font-semibold">
                <Input
                  type="number"
                  id="withdraw"
                  name="withdraw"
                  placeholder="0.00"
                  value={amount}
                  onChange={e => setAmount(parseInt(e.target.value))}
                />
              </span>
            </div>
            <Select>
              {/* @ts-ignore */}
              <SelectTrigger id="currency-out">
                <SelectValue placeholder="USDCred" />
              </SelectTrigger>
              {/* @ts-ignore */}
              <SelectContent position="popper">
                {coins.map((o, i) => (
                  // @ts-ignore
                  <SelectItem key={i} value={o.coin}>
                    {o.coin}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button
          className={cn(
            buttonVariants({
              variant: 'outline',
              radius: 'full'
            }),
            'h-auto w-full whitespace-normal border border-solid border-accent-secondary bg-background px-10 py-2'
          )}
          // disabled={!session?.account}
          onClick={withdraw}
        >
          Convert
        </Button>
      </CardFooter>
    </Card>
  )
}

const coins = [
  {
    coin: 'USDCred',
    nertwork: 'EOS EVM'
  }
  // {
  //   coin: 'EOS (gas)',
  //   nertwork: 'EOS EVM'
  // },
  // {
  //   coin: 'MBOTSPL',
  //   nertwork: 'MBOTS Prelaunch Token'
  // }
]
