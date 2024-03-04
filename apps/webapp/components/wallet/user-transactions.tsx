'use client'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import Link from 'next/link'
import { formatAddress } from '@/lib/utils'
import { format } from 'date-fns'
import { supabase } from '@/lib/supabase'
import { Address } from 'viem'

export function UserTransactions() {
  const { address } = useAccount()
  const [transactions, setTransactions] = useState<any[]>([])

  const fetchOrders = async (address: Address) => {
    console.log('fetch transactions...')
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
    console.log(`subscribing to supabase transfer filtering by from=${address}`)
    const channel = supabase
      .channel('transfers')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'transfers' },
        payload => {
          const isSameAddress = payload.new.from === address
          console.log('supabase payload.new', payload.new, isSameAddress)
          if (!isSameAddress) return
          setTransactions(transactions => {
            console.log('setTransactions', payload.new, transactions[0])
            return [payload.new, ...transactions]
          })
        }
      )
      .subscribe()
    console.log('subscribed to supabase transactions...')

    return () => {
      supabase.removeChannel(channel)
    }
  }, [setTransactions, address])

  // console.log(stringify(transactions))
  // trx_hash    String   @id
  // created_at  DateTime @default(now()) @db.Timestamptz(6)
  // chain_id    Decimal? @db.Decimal
  // token       String?
  // from        String?
  // to          String?
  // type        String?  @default("")
  // amount      BigInt?
  // usdcred_trx String?
  return (
    <div className="pt-8">
      <h2>Transaction history</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Deposit Trx</TableHead>
            <TableHead>Issuance Trx</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((trx, index) => (
            <TableRow key={index}>
              <TableCell>{trx.type}</TableCell>
              <TableCell>
                {format(new Date(trx.created_at), "MMMM d, yyyy 'at' h:mm a")}
              </TableCell>
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
