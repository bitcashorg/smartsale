'use client'

import { savePresaleDepositIntent } from '@/app/actions/save-deposit'
import { PresaleTokenBalance } from '@/components/routes/project/presale/presale-token-balance'
import { ProjectGridCard } from '@/components/routes/project/project-grid-card'
import { ProjectInfo } from '@/components/routes/project/project-info'
import { Button } from '@/components/ui/button'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useSession } from '@/hooks/use-session'
import { useSigningRequest } from '@/hooks/use-signing-request'
import { genBitusdDepositSigningRequest, genUsdtDepositSigningRequest } from '@/lib/eos'
import type { ProjectWithAuction } from '@/lib/projects'
import { tokens } from '@repo/tokens'
import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { type Address, erc20Abi, getAddress, parseUnits } from 'viem'
import { useAccount, useChainId, useSwitchChain, useWriteContract } from 'wagmi'

export function PresaleDepositCard({
  project,
  presaleAddress,
}: {
  project: ProjectWithAuction
  presaleAddress: Address
}) {
  return (
    <ProjectGridCard>
      <div className="mb-5">
        <ProjectInfo project={project} presale={true} />
        <PresaleTokenBalance />
      </div>

      <PresaleDeposit presaleAddress={presaleAddress} />
    </ProjectGridCard>
  )
}

const stables = ['USDT', 'USDC', 'BITUSD']

function PresaleDeposit({ presaleAddress }: { presaleAddress: Address }) {
  const { address } = useAccount()
  const { writeContract } = useWriteContract()
  const [amount, setAmount] = useState<string>('42')
  const { switchChain } = useSwitchChain()
  const [selectedToken, setSelectedToken] = useState('USDT')
  const [selectedChain, setSelectedChain] = useState<string>('')
  const { requestSignature } = useSigningRequest()
  const { loginOrConnect, session } = useSession()
  const chainId = useChainId()

  const availableChains = useMemo(() => {
    return tokens
      .filter((token) => token.symbol === selectedToken)
      .map((token) => token.chainName)
  }, [selectedToken])

  const deposit = async () => {
    if (!session?.account || !address) return loginOrConnect()
    if (!amount) return toast.error('Please enter a deposit amount')
    if (!selectedChain) return toast.error('Please select a blockchain network')
    // Find the token data for the selected token and chain
    const tokenData = tokens.find(
      (token) => token.symbol === selectedToken && token.chainName === selectedChain,
    )
    // Show an error if the token data is not found
    if (!tokenData) return toast.error('Token data not found')

    if (tokenData.chainType === 'evm') {
      const evmToken = tokenData
      if (chainId !== evmToken.chainId) {
        await switchChain({ chainId: evmToken.chainId })
      } else {
        writeContract(
          {
            abi: erc20Abi,
            address: getAddress(evmToken.address),
            functionName: 'transfer',
            args: [presaleAddress, parseUnits(amount.toString(), evmToken.decimals)],
            chainId: evmToken.chainId,
          },
          {
            onError: (error) => {
              console.error('Deposit error:', error.message)
              toast.error(
                'Unable to complete deposit. Please try again, contact support if the problem persist.',
              )
            },
            onSuccess: async (trxHash) => {
              console.log('Transaction hash:', trxHash)
              toast.success('Deposit successful')
              const deposit = await savePresaleDepositIntent({
                amount: Number(parseUnits(amount, evmToken.decimals)),
                created_at: new Date().toISOString(),
                deposit_hash: trxHash,
                issuance_hash: null,
                presale_id: 1,
                address,
                project_id: 1,
                account: session?.account,
                chain_type: evmToken.chainType,
                chainId: evmToken.chainId,
              })
              console.log('deposit', deposit)
            },
          },
        )
      }
    } else {
      // handle eos token bitusd and usdt
      const esr =
        selectedToken === 'USDT'
          ? await genUsdtDepositSigningRequest(Number(amount), address)
          : await genBitusdDepositSigningRequest(Number(amount), address)
      requestSignature(esr)
    }
  }

  return (
    <div>
      <CardHeader className="p-0 pb-5">
        <CardTitle>Presale Contributions</CardTitle>
        <CardDescription>Transfer tokens to participate in the presale.</CardDescription>
      </CardHeader>
      <div className="flex flex-col mb-5">
        <label htmlFor="deposit" className="text-sm font-bold" />
        <div className="flex items-center justify-between gap-2 mb-5">
          <Input
            type="number"
            id="deposit"
            name="deposit"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <Select onValueChange={setSelectedToken} defaultValue={'USDT'}>
            <SelectTrigger id="token-select">
              <SelectValue placeholder={'USDT'} />
            </SelectTrigger>
            <SelectContent position="popper">
              {stables.map((token) => (
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
            {availableChains.map((chain) => (
              <SelectItem key={chain} value={chain}>
                {chain}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col space-y-2">
        <Button variant="accent" onClick={deposit}>
          Contribute Now
        </Button>
      </div>
    </div>
  )
}
