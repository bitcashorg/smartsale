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
import { useSession } from '@/hooks/use-session'
import { useState } from 'react'
import { eosEvmTestnet } from 'smartsale-chains'
import { SepoliaUSDT } from 'smartsale-contracts'
import { useAccount, useSwitchChain, useWriteContract } from 'wagmi'
import { Input } from '../ui/input'

export function WithdrawCard() {
  const { session } = useSession()
  const { address } = useAccount()
  const { writeContract, ...other } = useWriteContract()
  const [amount, setAmount] = useState<number>(50)
  const { switchChain } = useSwitchChain()

  console.log(session?.account)

  const withdraw = () => {
    console.log({ amount, address })
    if (!amount || !address) return
    console.log('withdraw')

    switchChain({ chainId: SepoliaUSDT.chainId || eosEvmTestnet.id })
    // writeContract({
    //   abi: SepoliaUSDT.abi,
    //   address: SepoliaUSDT.address,
    //   functionName: 'burn',
    //   args: [
    //     '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', // dev only
    //     parseUnits(amount.toString(), SepoliaUSDT.decimals)
    //   ],
    //   chainId: sepolia.id
    // })
  }

  return (
    <Card className="w-full dark:bg-[#1a1a1a] bg-gray-200 rounded-xl p-4">
      <CardContent>
        <div className="flex flex-col space-y-4">
          <label htmlFor="withdraw" className="text-sm">
            Convert to BITUSD
          </label>
          <div className="flex items-center justify-between">
            <div className="flex flex-col min-w-[50%]">
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
              <SelectTrigger id="currency-out">
                <SelectValue placeholder="USDCred" />
              </SelectTrigger>
              <SelectContent position="popper">
                {coins.map((o, i) => (
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
          className="w-full bg-[#bd1e59]"
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
