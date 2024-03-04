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
import { TestnetUSDCred } from 'smartsale-contracts'
import { useAccount } from 'wagmi'

export function WalletBalances() {
  const { address } = useAccount()
  console.log('address', address)
  const usdCredBalance = useErc20Balance({
    contract: TestnetUSDCred.address,
    abi: TestnetUSDCred.abi,
    address: address || '0x'
  })
  const eosEvmBalance = useNativeBalance(address)

  const coins = [
    {
      coin: 'USDCred',
      totalAmount: `${usdCredBalance.formatted || 0}`,
      nertwork: 'EOS EVM'
    },
    {
      coin: 'EOS (gas)',
      totalAmount: `${eosEvmBalance.formatted || 0}`,
      nertwork: 'EOS EVM'
    },
    {
      coin: 'BITUSD',
      totalAmount: '0',
      nertwork: 'EOS Mainnet'
    },
    {
      coin: 'EOS (gas)',
      totalAmount: '0',
      nertwork: 'EOS Mainnet'
    }
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Coin</TableHead>
          <TableHead>Network</TableHead>
          <TableHead className="text-right">Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coins.map(coin => (
          <TableRow key={coin.coin + coin.nertwork}>
            <TableCell className="font-medium">{coin.coin}</TableCell>
            <TableCell>{coin.nertwork}</TableCell>
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
