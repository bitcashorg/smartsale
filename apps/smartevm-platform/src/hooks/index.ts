import { useEffect, useMemo, useState } from 'react'

import { isMobile } from 'react-device-detect'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  usePublicClient,
  useWalletClient,
} from 'wagmi'

import { injected, walletConnectConnector } from '../connectors'
import { useOrderPlacementState } from '../state/orderPlacement/hooks'
import { useOrderActionHandlers } from '../state/orders/hooks'
import { getLogger } from '../utils/logger'

const logger = getLogger('hooks/index')

export function useActiveWeb3React() {
  const { address: account, connector: activeConnector } = useAccount()
  const { disconnect } = useDisconnect()
  const { chain } = useNetwork()
  const provider = usePublicClient()
  const { data: signer } = useWalletClient()
  const context = useMemo(
    () => ({
      connector: activeConnector,
      deactivate: disconnect,
      library: provider,
      account,
      signer,
      chainId: chain?.id,
    }),
    [account, chain?.id, activeConnector, provider, disconnect, signer],
  )

  return context
}

export function useEagerConnect() {
  const { connectAsync } = useConnect()
  const { isConnected: active } = useAccount()
  const [tried, setTried] = useState(false)
  const { chainId } = useOrderPlacementState()
  useEffect(() => {
    const previouslyUsedWalletConnect = localStorage.getItem('walletconnect')

    if (previouslyUsedWalletConnect && chainId) {
      connectAsync({ connector: walletConnectConnector }).catch(() => {
        setTried(true)
      })
    } else {
      injected?.isAuthorized().then((isAuthorized) => {
        if (isAuthorized) {
          connectAsync({ connector: injected }).catch(() => {
            setTried(true)
          })
        } else {
          if (isMobile && window.ethereum) {
            connectAsync({ connector: injected }).catch(() => {
              setTried(true)
            })
          } else {
            setTried(true)
          }
        }
      })
    }
  }, [connectAsync, chainId]) // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true)
    }
  }, [active, tried])

  return tried
}

/**
 * Use for network and injected - logs user in
 * and out after checking what network theyre on
 */
export const useInactiveListener = (suppress = false) => {
  const { connectAsync, error } = useConnect()
  const { isConnected: active } = useAccount()

  useEffect(() => {
    const { ethereum } = window

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = () => {
        // eat errors
        connectAsync({ connector: injected }).catch((error) => {
          logger.error('Failed to activate after chain changed', error)
        })
      }

      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          // eat errors
          connectAsync({ connector: injected }).catch((error) => {
            logger.error('Failed to activate after accounts changed', error)
          })
        }
      }

      const handleNetworkChanged = () => {
        // eat errors
        connectAsync({ connector: injected }).catch((error) => {
          logger.error('Failed to activate after networks changed', error)
        })
      }

      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('networkChanged', handleNetworkChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)

      if (ethereum.removeListener) {
        ethereum.removeListener('chainChanged', handleChainChanged)
        ethereum.removeListener('networkChanged', handleNetworkChanged)
        ethereum.removeListener('accountsChanged', handleAccountsChanged)
      }
    }
  }, [connectAsync, error, suppress, active])
}

/**
 * Hook that subscribes to some events
 */
export const useActiveListener = () => {
  const { error } = useConnect()
  const { isConnected: active } = useAccount()
  const { onReloadFromAPI } = useOrderActionHandlers()

  useEffect(() => {
    const { ethereum } = window

    if (ethereum && ethereum.on && active && !error) {
      const handleAccountsChanged = () => {
        // Reload orders on accounts changed
        onReloadFromAPI()
      }

      ethereum.on('accountsChanged', handleAccountsChanged)
    }
  }, [active, error, onReloadFromAPI])
}
