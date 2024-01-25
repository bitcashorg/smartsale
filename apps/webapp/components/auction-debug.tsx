'use client'

import { useAuctionData } from '@/hooks/use-auction-data'

export function AuctionDebug({ auctionId }: { auctionId: number }) {
  const auction = useAuctionData(auctionId)
  return (
    <pre>
      <code>{JSON.stringify(auction, null, 2)}</code>
    </pre>
  )
}
