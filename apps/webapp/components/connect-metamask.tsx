'use client'
import { useAccount, useConnect, useConnectors } from 'wagmi'
import { Button } from './ui/button'
import { formatAddress } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function ConnectWalletButton() {
  const connectors = useConnectors()
  const { connect } = useConnect()
  const { address } = useAccount()

  const [formattedAddress, setFormattedAddress] = useState('')

  const handleConnect = async () => {
    // Find the WalletConnect connector
    const injectedConnector = connectors.find(
      connector => connector.id === 'injected'
    )
    if (injectedConnector) {
      await connect({ connector: injectedConnector })
    }
  }

  // https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setFormattedAddress(address ? formatAddress(address) : 'Connect Wallet')
  }, [address])

  return (
    <div>
      <Button onClick={handleConnect} disabled={false}>
        {formattedAddress}
      </Button>
      {/* {error && <p style={{ color: 'red' }}>{error.message}</p>} */}
    </div>
  )
}
