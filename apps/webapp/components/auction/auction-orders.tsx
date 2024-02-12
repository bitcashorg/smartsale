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
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { formatAddress } from '@/lib/utils'

const supabase = createClient(
  'https://dvpusrbojetnuwbkyhzj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2cHVzcmJvamV0bnV3Ymt5aHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczNDE2NjcsImV4cCI6MjAyMjkxNzY2N30.bW2V9YKuBkEQzzQh0wDh1LYW2JP3mO4UaxnVoShCW3k'
)

export function AuctionOrders() {
  const { address } = useAccount()
  const [orders, setOrders] = useState<any[]>([])

  console.log(orders)

  const fetchOrders = async (userId: number) => {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', userId)

    if (error) return

    setOrders(data)
  }

  useEffect(() => {
    if (!address) return
    fetchOrders(4)

    const channel = supabase
      .channel('*')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'orders' },
        payload => setOrders(orders => [...orders, payload.new as any])
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [fetchOrders])

  return (
    <div className="pt-8">
      <h2>Order history</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Max Price</TableHead>
            <TableHead>Bid Amount</TableHead>
            <TableHead>Transaction</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.sell_amount}</TableCell>
              <TableCell>{order.buy_amount}</TableCell>
              <TableCell>
                <Link
                  href={`https://explorer.testnet.evm.eosnetwork.com/tx/${order.transactionHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  {formatAddress(order.transactionHash)}
                </Link>
              </TableCell>
              <TableCell>{order.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
