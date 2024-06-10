'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useErc20Balance, useNativeBalance } from '@/hooks/use-balance'
import { useEosBalances } from '@/hooks/use-eos-balances'

import { TestnetMBOTSPL, TestnetUSDCred } from 'smartsale-contracts'
import { useAccount } from 'wagmi'

export function BalancesTable() {
  const { address } = useAccount()
  const eosBalances = useEosBalances()

  const usdCredBalance = useErc20Balance({
    contract: TestnetUSDCred.address,
    abi: TestnetUSDCred.abi,
    address: address || '0x',
    chainId: TestnetUSDCred.chainId
  })

  const usdMbotsplBalance = useErc20Balance({
    contract: TestnetMBOTSPL.address,
    abi: TestnetMBOTSPL.abi,
    address: address || '0x',
    chainId: TestnetMBOTSPL.chainId
  })

  const eosEvmBalance = useNativeBalance(address)

  const coins = [
    {
      coin: 'MOR',
      totalAmount: `${usdCredBalance.formatted || 0}`,
      nertwork: 'Arbitrum One',
      description: 'MOR Tokens'
    },
    {
      coin: 'EOS (gas)',
      totalAmount: `${eosEvmBalance.formatted || 0}`,
      nertwork: 'EOS EVM',
      description: 'Wrapped EOS on EOS EVM'
    },
    {
      coin: 'MBOTSPL',
      totalAmount: `${usdMbotsplBalance.formatted || 0}`,
      nertwork: 'EOS EVM',
      description: 'Auctioning Prelaunch Token'
    },
    {
      coin: 'MBOTS',
      totalAmount: eosBalances.mbots,
      nertwork: 'EOS Mainnet',
      description: 'MBOTS Token'
    },
    {
      coin: 'EOS (gas)',
      totalAmount: eosBalances.eos,
      nertwork: 'EOS Mainnet',
      description: 'Native EOS token'
    }
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Coin</TableHead>
          <TableHead>Network</TableHead>
          <TableHead>Info</TableHead>
          <TableHead className="text-right">Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coins.map(coin => (
          <TableRow key={coin.coin + coin.nertwork}>
            <TableCell className="font-medium">{coin.coin}</TableCell>
            <TableCell>{coin.nertwork}</TableCell>
            <TableCell>{coin.description}</TableCell>
            <TableCell className="text-right">{coin.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}
