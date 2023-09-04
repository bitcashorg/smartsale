import { useCallback, useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useBlockNumber } from 'wagmi'

import { updateBlockNumber } from './actions'
import { useActiveWeb3React } from '../../hooks'
import useDebounce from '../../hooks/useDebounce'
import useIsWindowVisible from '../../hooks/useIsWindowVisible'

export default function Updater() {
  const { account, chainId, library } = useActiveWeb3React()
  const dispatch = useDispatch()

  const windowVisible = useIsWindowVisible()
  const [blockchainState, setBlockchainState] = useState<{
    chainId: number | undefined
    blockNumber: number | null
  }>({
    chainId,
    blockNumber: null,
  })

  const blockNumberCallback = useCallback(
    (blockNumber: bigint) => {
      setBlockchainState((currentState) => {
        if (chainId === currentState.chainId) {
          if (typeof currentState.blockNumber !== 'number')
            return { chainId, blockNumber: Number(blockNumber) }
          return { chainId, blockNumber: Math.max(Number(blockNumber), currentState.blockNumber) }
        }
        return currentState
      })
    },
    [chainId, setBlockchainState],
  )

  useBlockNumber({
    onBlock: blockNumberCallback,
    watch: true,
    enabled: !!account && !!library && !!chainId,
  })

  // because blocks arrive in bunches with longer polling periods, we just want
  // to process the latest one.
  const debouncedBlockchainState = useDebounce(blockchainState, 100)

  useEffect(() => {
    if (!account || !debouncedBlockchainState.chainId || !debouncedBlockchainState.blockNumber)
      return
    if (windowVisible) {
      dispatch(
        updateBlockNumber({
          chainId: debouncedBlockchainState.chainId,
          blockNumber: debouncedBlockchainState.blockNumber,
        }),
      )
    }
  }, [
    account,
    windowVisible,
    dispatch,
    debouncedBlockchainState.chainId,
    debouncedBlockchainState.blockNumber,
  ])

  return null
}
