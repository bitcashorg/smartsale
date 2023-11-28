import { useCallback } from 'react'

import { useAccount, useConnect, useDisconnect, useSwitchNetwork as usn } from 'wagmi'

const useSwitchNetwork = () => {
  const { switchNetworkAsync } = usn()
  const { disconnectAsync } = useDisconnect()
  const { connectAsync } = useConnect()
  const { connector } = useAccount()

  return useCallback(
    (newChainId: number) => {
      if (switchNetworkAsync && newChainId)
        switchNetworkAsync(newChainId).catch(() => {
          localStorage.removeItem('walletconnect')
          disconnectAsync().then(() => connectAsync({ connector, chainId: newChainId }))
        })
    },
    [switchNetworkAsync, connectAsync, connector, disconnectAsync],
  )
}

export default useSwitchNetwork
