// 'use client'
// import { useSupabaseClient } from '@smartsale/supabase'
// import { TestnetEasyAuction } from '@smartsale/auction'
// import { formatAddress } from '@smartsale/lib'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@smartsale/ui'
// import { format } from 'date-fns'
// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import { useAccount, useReadContract } from 'wagmi'

// export function AuctionOrders() {
//   const supabase = useSupabaseClient()
//   const { address } = useAccount()
//   // biome-ignore lint/suspicious/noExplicitAny: <explanation>
//   const [orders, setOrders] = useState<any[]>([])
//   const userId = useReadContract({
//     ...TestnetEasyAuction,
//     functionName: 'getUserId',
//     args: [address],
//     query: {
//       enabled: !!address,
//     },
//   })

//   useEffect(() => {
//     if (!userId.data) return
//     const fetchOrders = async (userId: number) => {
//       const { data, error } = await supabase
//         .from('auction_order')
//         .select('*')
//         .eq('user_id', userId)
//         .order('created_at', { ascending: false })

//       if (error) return
//       setOrders(data)
//     }
//     fetchOrders(Number(userId.data?.toString()))

//     const channel = supabase
//       .channel('orders')
//       .on(
//         'postgres_changes',
//         { event: 'INSERT', schema: 'public', table: 'orders' },
//         (payload) => {
//           const isSameUserId =
//             BigInt(payload.new.user_id) ===
//             BigInt(userId.data?.toString() || '0')
//           if (!isSameUserId) return
//           setOrders((orders) => [payload.new, ...orders])
//         },
//       )
//       .subscribe()

//     return () => {
//       supabase.removeChannel(channel)
//     }
//   }, [userId.data, supabase])

//   return (
//     <>
//       <h2 className="heading3 px-2 py-5">Orders</h2>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Max Price</TableHead>
//             <TableHead>Min Buy Amount</TableHead>
//             <TableHead>Bid Amount</TableHead>
//             <TableHead>Transaction</TableHead>
//             <TableHead>Date</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {orders.map((order) => (
//             <TableRow key={order.id}>
//               <TableCell>
//                 {(
//                   Number(formatTokenAmount(order.sell_amount)) /
//                   Number(order.buy_amount)
//                 ).toFixed(2)}
//               </TableCell>
//               <TableCell>{formatTokenAmount(order.buy_amount)}</TableCell>
//               <TableCell>
//                 {formatTokenAmount(order.sell_amount.toString())}
//               </TableCell>

//               <TableCell>
//                 <Link
//                   href={`https://explorer.testnet.evm.eosnetwork.com/tx/${formatAddress(order.transactionHash)}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {formatAddress(order.transactionHash)}
//                 </Link>
//               </TableCell>
//               <TableCell>
//                 {format(new Date(order.created_at), "MMMM d, yyyy 'at' h:mm a")}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </>
//   )
// }

// // Updated token amount formatting function to handle BigInt more effectively
// const formatTokenAmount = (amount: string | bigint = '', decimals = 6) => {
//   try {
//     // Convert to BigInt if string
//     const amountBigInt = typeof amount === 'string' ? BigInt(amount) : amount
//     const divisor = BigInt(10) ** BigInt(decimals)

//     // Calculate whole and fractional parts
//     const wholePart = amountBigInt / divisor
//     const fractionalPart = amountBigInt % divisor

//     // Format fractional part to exactly 2 decimal places
//     const paddedFractional = fractionalPart.toString().padStart(decimals, '0')
//     const twoDecimalPlaces = paddedFractional.slice(0, 2)

//     return `${wholePart}.${twoDecimalPlaces}`
//   } catch (error) {
//     console.error('Error formatting token amount:', error)
//     return '0.00'
//   }
// }

export function AuctionOrders() {
  return <div>Work in progress</div>
}
