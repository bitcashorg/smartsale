'use client'

import { useAuctionData } from '@/hooks/use-auction-data'

export function AuctionDebug() {
  const auction = useAuctionData(3) //MBOTCred
  return (
    <pre>
      <code>{JSON.stringify(auction, null, 2)}</code>
    </pre>
  )
}
