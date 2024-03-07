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
import { eosEvmTestnet } from 'smartsale-chains'
import { TestnetUSDCred } from 'smartsale-contracts'
import { useAccount } from 'wagmi'

export function WalletBalances() {
  const { address } = useAccount()
  const usdCredBalance = useErc20Balance({
    contract: TestnetUSDCred.address,
    abi: TestnetUSDCred.abi,
    address: address || '0x',
    chainId: TestnetUSDCred.chainId || eosEvmTestnet.id
  })
  const eosEvmBalance = useNativeBalance(address)

  const coins = [
    {
      coin: 'USDCred',
      totalAmount: `${usdCredBalance.formatted || 0}`,
      nertwork: 'EOS EVM',
      description: 'USD Bidding Token'
    },
    {
      coin: 'EOS (gas)',
      totalAmount: `${eosEvmBalance.formatted || 0}`,
      nertwork: 'EOS EVM',
      description: 'Wrapped EOS on EOS EVM'
    },
    {
      coin: 'MBOTSPL',
      totalAmount: '0',
      nertwork: 'EOS EVM',
      description: 'Auctioning Prelaunch Token'
    },
    {
      coin: 'BITUSD',
      totalAmount: '0',
      nertwork: 'EOS Mainnet',
      description: 'Bitcash USD stable coin'
    },
    {
      coin: 'MBOTS',
      totalAmount: '0',
      nertwork: 'EOS Mainnet',
      description: 'MBOTS Token'
    },
    {
      coin: 'EOS (gas)',
      totalAmount: '0',
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
