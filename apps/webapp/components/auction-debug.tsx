'use client'

import { useAuctionData } from "@/hooks/use-auction-data"

export function AuctionDebug() {
  const auction = useAuctionData(1)
  return <pre><code>{JSON.stringify(auction,null,2)}</code></pre>
}