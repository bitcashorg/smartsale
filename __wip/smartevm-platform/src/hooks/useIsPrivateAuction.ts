import { useEffect, useState } from 'react'

import { additionalServiceApi } from '../api'
import { AuctionIdentifier } from '../state/orderPlacement/reducer'
import { getLogger } from '../utils/logger'

const logger = getLogger('useIsPrivateAuction')

export const useIsPrivateAuction = (
  auctionIdentifier: AuctionIdentifier,
): {
  auctionSigner: Maybe<`0x${string}`>
  isPrivateAuction: boolean
  isLoading: boolean
  error: string | null
} => {
  const { auctionId, chainId } = auctionIdentifier
  const [loading, setLoading] = useState<boolean>(false)
  const [auctionSigner, setAuctionSigner] = useState<Maybe<`0x${string}`>>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const fetchApiData = async () => {
      if (!cancelled) {
        setAuctionSigner(null)
      }
      try {
        if (!chainId || !auctionId) {
          return
        }

        if (!cancelled) {
          setLoading(true)
        }

        const params = {
          networkId: chainId,
          auctionId,
        }

        const auctionInfo = await additionalServiceApi.getAuctionDetails(params)
        const { allowListSigner, isPrivateAuction } = auctionInfo
        if (isPrivateAuction && !cancelled) {
          setAuctionSigner(`0x${allowListSigner.substring(26)}`)
        }
        setLoading(false)
      } catch (error) {
        logger.error('Error getting auction details', error)
        if (!cancelled) {
          setLoading(false)
          setError(error as string)
        }
      }
    }

    fetchApiData()

    return () => {
      cancelled = true
    }
  }, [auctionId, chainId])

  return {
    auctionSigner,
    isPrivateAuction: !!auctionSigner,
    isLoading: loading,
    error,
  }
}
