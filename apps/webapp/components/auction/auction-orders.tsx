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
import { useAccount, useReadContract } from 'wagmi'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { formatAddress } from '@/lib/utils'
import { TestnetEasyAuction } from 'smartsale-contracts'
import BN from 'bn.js'
import { stringify } from 'viem'

const supabase = createClient(
  'https://dvpusrbojetnuwbkyhzj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2cHVzcmJvamV0bnV3Ymt5aHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczNDE2NjcsImV4cCI6MjAyMjkxNzY2N30.bW2V9YKuBkEQzzQh0wDh1LYW2JP3mO4UaxnVoShCW3k'
)

export function AuctionOrders() {
  const { address } = useAccount()
  const [orders, setOrders] = useState<any[]>([])
  const userId = useReadContract({
    ...TestnetEasyAuction,
    functionName: 'getUserId',
    args: [address],
    query: {
      enabled: !!address
    }
  })

  // console.log(orders)

  const fetchOrders = async (userId: number) => {
    console.log('fetch orders...')
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', userId)

    if (error) return
    setOrders(data)
  }

  useEffect(() => {
    if (!userId.data) return
    fetchOrders(new BN(userId.data!.toString()).toNumber())

    const channel = supabase
      .channel('*')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'orders' },
        payload => {
          // Check if the inserted order's user_id matches the desired userId
          if (payload.new && payload.new.user_id === userId) {
            setOrders(orders => [...orders, payload.new])
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [userId.data])

  console.log(stringify(orders))

  return (
    <div className="pt-8">
      <h2>Order history</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Max Price</TableHead>
            <TableHead>Min Buy Amount</TableHead>
            <TableHead>Bid Amount</TableHead>
            <TableHead>Transaction</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>
                {(
                  Number(formatTokenAmount(order.sell_amount)) /
                  order.buy_amount
                ).toFixed(2)}
              </TableCell>
              <TableCell>{order.buy_amount}</TableCell>
              <TableCell>
                {formatTokenAmount(order.sell_amount.toString())}
              </TableCell>

              <TableCell>
                <Link
                  href={`https://explorer.testnet.evm.eosnetwork.com/tx/${formatAddress(order.transactionHash)}`}
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

// Function to format token amounts
const formatTokenAmount = (amount = '', decimals = 6) => {
  return (Number(amount) / Math.pow(10, decimals)).toFixed(2) // Adjust precision as needed
}
