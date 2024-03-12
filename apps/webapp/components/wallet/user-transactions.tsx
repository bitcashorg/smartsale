'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { supabase } from '@/lib/supabase'
import { formatAddress } from '@/lib/utils'
import { format } from 'date-fns'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Address } from 'viem'
import { useAccount } from 'wagmi'

export function UserTransactions() {
  const { address } = useAccount()
  const [transactions, setTransactions] = useState<any[]>([])

  const fetchOrders = async (address: Address) => {
    const { data, error } = await supabase
      .from('transfers')
      .select('*')
      .eq('from', address)
      .order('created_at', { ascending: false })

    if (error) return
    setTransactions(data)
  }

  useEffect(() => {
    if (!address) return
    fetchOrders(address)
    const channel1 = supabase
      .channel('transfers')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'transfers' },
        payload => {
          const isSameAddress = payload.new.from === address
          if (!isSameAddress) return
          setTransactions(transactions => {
            return [payload.new, ...transactions]
          })
        }
      )
      .subscribe()

    const channel2 = supabase
      .channel('transfers')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'transfers' },
        payload => {
          const isSameAddress = payload.new.from === address
          if (!isSameAddress) return
          setTransactions(transactions => {
            return [payload.new, ...transactions]
          })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel1)
      supabase.removeChannel(channel2)
    }
  }, [setTransactions, address])

  return (
    <div className="pt-8">
      <h2 className="px-2 py-4 text-3xl font-bold">Transaction History</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Deposit Trx</TableHead>
            <TableHead>Issuance Trx</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((trx, index) => (
            <TableRow key={index}>
              <TableCell>{trx.type}</TableCell>

              <TableCell>{formatTokenAmount(trx.amount.toString())}</TableCell>

              <TableCell>
                <Link
                  href={`https://sepolia.etherscan.io/tx/${formatAddress(trx.trx_hash)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formatAddress(trx.trx_hash)}
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  href={`https://explorer.testnet.evm.eosnetwork.com/tx/${formatAddress(trx.usdcred_trx)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formatAddress(trx.usdcred_trx)}
                </Link>
              </TableCell>
              <TableCell>
                {format(new Date(trx.created_at), "MMMM d, yyyy 'at' h:mm a")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// Function to format token amounts
const formatTokenAmount = (amount = '', decimals = 6) => {
  return (Number(amount) / Math.pow(10, decimals)).toFixed(2) // Adjust precision as needed
}
