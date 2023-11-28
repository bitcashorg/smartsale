import { useEffect, useState } from 'react'

import { useActiveWeb3React } from '.'
import { additionalServiceApi } from '../api'
import { getLogger } from '../utils/logger'

const logger = getLogger('useGetUserId')

export function useGetUserId(account: string | null | undefined): Maybe<string> {
  const [userId, setUserId] = useState<Maybe<string>>(null)
  const { chainId } = useActiveWeb3React()

  useEffect(() => {
    let cancelled = false

    const fetchApiData = async (): Promise<void> => {
      if (!account || !chainId) {
        return
      }
      try {
        if (!additionalServiceApi) {
          throw new Error('missing dependencies in useInterestingAuctionInfo callback')
        }
        const userId = await additionalServiceApi.getUserId({
          address: account,
          networkId: chainId,
        })

        if (cancelled) return

        setUserId(userId)
      } catch (error) {
        if (cancelled) return
        setUserId(null)
        logger.error(`Error getting user id for address ${account}`, error)
      }
    }
    fetchApiData()

    return (): void => {
      cancelled = true
    }
  }, [account, chainId])

  return userId
}
