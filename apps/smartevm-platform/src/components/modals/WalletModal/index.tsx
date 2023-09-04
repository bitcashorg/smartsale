import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { event } from 'react-ga'
import { Connector, useAccount, useConnect, useNetwork } from 'wagmi'

import { injected } from '../../../connectors'
import { WALLET_ICONS } from '../../../constants'
import usePrevious from '../../../hooks/usePrevious'
import { useWalletModalOpen, useWalletModalToggle } from '../../../state/application/hooks'
import { useOrderPlacementState } from '../../../state/orderPlacement/hooks'
import { ExternalLink } from '../../../theme'
import { setupNetwork } from '../../../utils/setupNetwork'
import { AlertIcon } from '../../icons/AlertIcon'
import { Checkbox } from '../../pureStyledComponents/Checkbox'
import { NetworkError, useNetworkCheck } from '../../web3/Web3Status'
import Modal from '../common/Modal'
import { ModalTitle } from '../common/ModalTitle'
import Option from '../common/Option'
import PendingView from '../common/PendingView'
import { Content } from '../common/pureStyledComponents/Content'
import { IconWrapper } from '../common/pureStyledComponents/IconWrapper'
import { Text } from '../common/pureStyledComponents/Text'

const CheckboxWrapper = styled.div`
  align-items: baseline;
  display: flex;
  margin-bottom: 40px;
  margin-top: 12px;
`

const CheckboxText = styled.span`
  color: ${({ theme }) => theme.text1};
  font-size: 15px;
  font-weight: normal;
  line-height: 1.4;
  margin-left: 12px;

  a {
    color: ${({ theme }) => theme.text1};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`

const Link = styled(NavLink)`
  &:hover {
    text-decoration: none;
  }
`

const Footer = styled.div`
  color: ${({ theme }) => theme.text1};
  font-size: 13px;
  font-weight: normal;
  line-height: 1.4;
  margin-left: 12px;
  text-align: center;

  a {
    color: ${({ theme }) => theme.text1};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`

const Options = styled.div`
  min-height: 130px;
`

const WALLET_VIEWS = {
  OPTIONS: 'options',
  OPTIONS_SECONDARY: 'options_secondary',
  ACCOUNT: 'account',
  PENDING: 'pending',
}

const WalletModal: React.FC = () => {
  const { connect, connectors, error, reset } = useConnect()
  const { address: account, connector, isConnected: active } = useAccount()
  const { chain } = useNetwork()
  const unsupported = chain?.unsupported || false
  const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT)
  const [pendingWallet, setPendingWallet] = useState<Connector>()
  const [pendingError, setPendingError] = useState<boolean>()
  const walletModalOpen = useWalletModalOpen()
  const toggleWalletModal = useWalletModalToggle()
  const previousAccount = usePrevious(account)
  const { errorWrongNetwork } = useNetworkCheck()
  const [termsAccepted, setTermsAccepted] = useState(false)
  const { chainId } = useOrderPlacementState()

  useEffect(() => {
    if (account && !previousAccount && walletModalOpen) {
      toggleWalletModal()
    }
  }, [account, previousAccount, toggleWalletModal, walletModalOpen])

  // always reset to account view
  useEffect(() => {
    if (walletModalOpen) {
      reset()
      setPendingError(false)
      setWalletView(WALLET_VIEWS.ACCOUNT)
    }
  }, [walletModalOpen, reset])

  const activePrevious = usePrevious(active)
  const connectorPrevious = usePrevious(connector)

  useEffect(() => {
    if (
      walletModalOpen &&
      ((active && !activePrevious) ||
        (connector &&
          connector !== connectorPrevious &&
          !error &&
          errorWrongNetwork === NetworkError.noError))
    ) {
      setWalletView(WALLET_VIEWS.ACCOUNT)
    }
  }, [
    setWalletView,
    active,
    error,
    connector,
    errorWrongNetwork,
    walletModalOpen,
    activePrevious,
    connectorPrevious,
  ])

  const tryActivation = async (connector: Connector) => {
    event({
      category: 'Wallet',
      action: 'Change Wallet',
      label: connector.name,
    })
    try {
      // We check the metamask networkId
      setPendingWallet(connector) // set wallet for pending view
      setWalletView(WALLET_VIEWS.PENDING)
      await setupNetwork(chainId)
      if (connector.id === 'walletConnect') {
        toggleWalletModal()
      }
      await connect({ connector, chainId })
    } catch (error) {
      setPendingError(true)
    }
  }

  const getOptions = () => {
    const isMetamask = window.ethereum && window.ethereum.isMetaMask

    return connectors.map((currentConnector) => {
      if (currentConnector === injected) {
        if (!(window.web3 || window.ethereum)) {
          return null //dont want to return install twice
        } else if (currentConnector.name === 'MetaMask' && !isMetamask) {
          return null
        } else if (currentConnector.id === 'injected' && isMetamask) {
          return null
        }
      }

      return (
        <Option
          disabled={!termsAccepted}
          icon={WALLET_ICONS[currentConnector.id]}
          key={currentConnector.id}
          onClick={() => {
            currentConnector === connector
              ? setWalletView(WALLET_VIEWS.ACCOUNT)
              : tryActivation(currentConnector)
          }}
          text={currentConnector.name}
        />
      )
    })
  }

  const networkError = unsupported || errorWrongNetwork
  const viewAccountTransactions = account && walletView === WALLET_VIEWS.ACCOUNT
  const connectingToWallet = walletView === WALLET_VIEWS.PENDING
  const title =
    networkError === NetworkError.noChainMatch
      ? 'Wrong Network'
      : error && viewAccountTransactions
      ? ''
      : error
      ? 'Error connecting'
      : 'Connect a wallet'
  const errorMessage = unsupported
    ? 'Please connect to the appropriate Ethereum network.'
    : errorWrongNetwork
    ? errorWrongNetwork
    : 'Error connecting. Try refreshing the page.'

  return (
    <Modal
      isOpen={walletModalOpen}
      onDismiss={toggleWalletModal}
      width={error || connectingToWallet ? 400 : undefined}
    >
      <ModalTitle onClose={toggleWalletModal} title={title} />
      <Content>
        {error && (
          <>
            <IconWrapper>
              <AlertIcon />
            </IconWrapper>
            <Text fontSize="18px" textAlign="center">
              {errorMessage}
            </Text>
          </>
        )}
        {!error && !connectingToWallet && (
          <>
            <Options>{getOptions()}</Options>
            <CheckboxWrapper onClick={() => setTermsAccepted(!termsAccepted)}>
              <Checkbox checked={termsAccepted} />
              <CheckboxText>
                I have read, understood and agree to the{' '}
                <Link target="_blank" to="/terms-and-conditions">
                  Terms &amp; Conditions
                </Link>
                .
              </CheckboxText>
            </CheckboxWrapper>
            <Footer>
              <span>Don&apos;t have wallet?</span>{' '}
              <ExternalLink href="https://metamask.io/download.html">Download here</ExternalLink>.
            </Footer>
          </>
        )}
        {!error && connectingToWallet && (
          <PendingView
            connector={pendingWallet}
            error={pendingError}
            setPendingError={setPendingError}
            tryActivation={tryActivation}
          />
        )}
      </Content>
    </Modal>
  )
}

export default WalletModal
