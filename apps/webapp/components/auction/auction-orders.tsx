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
import Link from 'next/link'
import { formatAddress } from '@/lib/utils'
import { TestnetEasyAuction } from 'smartsale-contracts'
import BN from 'bn.js'
import { format } from 'date-fns'
import { supabase } from '@/lib/supabase'

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

  const fetchOrders = async (userId: number) => {
    // console.log('fetch orders...')
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) return
    setOrders(data)
  }

  useEffect(() => {
    if (!userId.data) return
    fetchOrders(new BN(userId.data!.toString()).toNumber())
    // console.log(
    //   `subscribing to supabase channel filtering by userId=${userId.data}`
    // )
    const channel = supabase
      .channel('orders')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'orders' },
        payload => {
          // Check if the inserted order's user_id matches the desired userId
          const isSameUserId =
            BigInt(payload.new.user_id) === BigInt(String(userId.data) || 0)
          // console.log(
          //   'supabase payload.new',
          //   payload.new,
          //   userId.data,
          //   isSameUserId
          // )
          if (!isSameUserId) return
          setOrders(orders => {
            // console.log('setOrders', payload.new, orders[0])
            return [payload.new, ...orders]
          })
        }
      )
      .subscribe()
    // console.log('subscribed to supabase...')

    return () => {
      supabase.removeChannel(channel)
    }
  }, [userId.data, setOrders])

  // console.log(stringify(orders))

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
                  {formatAddress(order.transactionHash)}
                </Link>
              </TableCell>
              <TableCell>
                {format(new Date(order.created_at), "MMMM d, yyyy 'at' h:mm a")}
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
