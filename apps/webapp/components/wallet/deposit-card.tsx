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
import { SepoliaUSDT } from 'smartsale-contracts'
import { eosEvmTestnet } from 'smartsale-chains'
import { parseUnits } from 'viem'

export function DepositCard() {
  const { session } = useSession()
  const { address } = useAccount()
  const { writeContract, ...other } = useWriteContract()
  const [amount, setAmount] = useState<number>(50)
  const { switchChain } = useSwitchChain()

  console.log(session?.account)

  const deposit = () => {
    console.log({ amount, address })
    if (!amount || !address) return
    console.log('deposit')

    switchChain({ chainId: SepoliaUSDT.chainId || eosEvmTestnet.id })
    writeContract({
      abi: SepoliaUSDT.abi,
      address: SepoliaUSDT.address,
      functionName: 'transfer',
      args: [
        '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', // dev only
        parseUnits(amount.toString(), SepoliaUSDT.decimals)
      ],
      chainId: sepolia.id
    })
  }

  console.log(other)

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
            <Select>
              <SelectTrigger id="currency-out">
                <SelectValue placeholder="SEPOLIA" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="sepolia">SEPOLIA</SelectItem>
                <SelectItem value="eth">ETHEREUM</SelectItem>
                <SelectItem value="arb">ARBITRUM</SelectItem>
                <SelectItem value="pol">POLYGON</SelectItem>
                <SelectItem value="ava">AVALANCHE</SelectItem>
                <SelectItem value="eos">EOS</SelectItem>
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
