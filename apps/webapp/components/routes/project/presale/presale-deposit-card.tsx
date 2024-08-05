'use client'

import { useSigningRequest } from '@/hooks/use-signing-request'
import { Button, buttonVariants } from '@/components/ui/button'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
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
import { useState, useMemo } from 'react'
import { EVMTokenContractData, TokenContractData } from 'app-contracts'
import { parseUnits } from 'viem'
import { useAccount, useSwitchChain, useWriteContract } from 'wagmi'
import { appConfig } from '@/lib/config'
import { cn } from '@/lib/utils'
import { ProjectGridCard } from '@/components/routes/project/project-grid-card'
import { ProjectInfo } from '@/components/routes/project/project-info'
import { ProjectWithAuction } from '@/lib/projects'
import { useSession } from '@/hooks/use-session'
import toast from 'react-hot-toast'
import { saveDeposit } from '@/app/actions/save-deposit'

export function PresaleDepositCard({
  project
}: {
  project: ProjectWithAuction
}) {
  return (
    <ProjectGridCard>
      <div className="mb-5">
        <ProjectInfo project={project} presale={true} />
      </div>

      <PresaleDeposit />
    </ProjectGridCard>
  )
}

function PresaleDeposit() {
  const { address } = useAccount()
  const { writeContract } = useWriteContract()
  const [amount, setAmount] = useState<number>(42)
  const { switchChain } = useSwitchChain()
  const [selectedToken, setSelectedToken] = useState('USDT')
  const [selectedChain, setSelectedChain] = useState<string>('')
  const { requestSignature } = useSigningRequest()
  const { loginOrConnect } = useSession()

  const presaleAddress = '0x2C9DAAb3F463d6c6D248aCbeaAEe98687936374a'

  const availableChains = useMemo(() => {
    return appConfig.stables
      .filter(token => token.symbol === selectedToken)
      .map(token => token.chainName)
  }, [selectedToken])

  const deposit = async () => {
    if (!address) return loginOrConnect()
    if (!amount) return toast.error('Amount is undefined')

    const tokenData = appConfig.stables.find(
      token =>
        token.symbol === selectedToken && token.chainName === selectedChain
    )
    if (!tokenData) return toast.error('Token data not found')

    if (tokenData.chainType === 'evm') {
      const evmToken = tokenData as EVMTokenContractData
      switchChain({ chainId: evmToken.chainId })
      writeContract(
        {
          abi: evmToken.abi,
          address: evmToken.address,
          functionName: 'transfer',
          args: [
            presaleAddress,
            parseUnits(amount.toString(), evmToken.decimals)
          ],
          chainId: evmToken.chainId
        },
        {
          onError: error => {
            console.log('error', error.message)
            toast.error(error.message.split('Contract Call:')[0])
          },
          onSuccess: trxId => {
            console.log('Transaction ID:', trxId)
            toast.success(`Deposit successful ${trxId}`)
            saveDeposit({
              amount,
              chain_id: evmToken.chainId,
              from: address,
              to: presaleAddress,
              token: evmToken.address,
              trx_hash: trxId,
              type: 'deposit'
            })
          }
        }
      )
    } else {
      // handle eos token bitusd and usdt
      const esr =
        selectedToken === 'USDT'
          ? await genUsdtDepositSigningRequest(amount, address)
          : await genBitusdDepositSigningRequest(amount, address)
      requestSignature(esr)
    }
  }

  return (
    <div>
      <CardHeader className="p-0 pb-5">
        <CardTitle>Presale Contributions</CardTitle>
        <CardDescription>
          Transfer tokens to participate in the presale.
        </CardDescription>
      </CardHeader>
      <div className="flex flex-col mb-5">
        <label htmlFor="deposit" className="text-sm font-bold"></label>
        <div className="flex items-center justify-between gap-2 mb-5">
          <Input
            type="number"
            id="deposit"
            name="deposit"
            placeholder="0.00"
            value={amount}
            onChange={e => setAmount(parseInt(e.target.value))}
          />

          <Select onValueChange={setSelectedToken} defaultValue={'USDT'}>
            <SelectTrigger id="token-select">
              <SelectValue placeholder={`USDT`} />
            </SelectTrigger>
            <SelectContent position="popper">
              {['USDT', 'USDC', 'BITUSD'].map(token => (
                <SelectItem key={token} value={token}>
                  {token}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Select onValueChange={setSelectedChain} value={selectedChain}>
          <SelectTrigger id="chain-select">
            <SelectValue placeholder="Select Chain" />
          </SelectTrigger>
          <SelectContent position="popper">
            {availableChains.map(chain => (
              <SelectItem key={chain} value={chain}>
                {chain}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col space-y-2">
        <Button
          className={cn(
            buttonVariants({
              variant: 'outline',
              radius: 'full'
            }),
            'h-auto w-full whitespace-normal border border-solid border-accent-secondary bg-background px-10 py-2'
          )}
          onClick={deposit}
        >
          Contribute Now
        </Button>
      </div>
    </div>
  )
}
