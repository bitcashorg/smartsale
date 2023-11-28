import { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { FieldErrors } from 'react-hook-form'
import { useAccount, useNetwork } from 'wagmi'

import { useAuctionForm } from '../../../hooks/useAuctionForm'
import { useSubmitAuction } from '../../../hooks/useSubmitAuction'
import useSwitchNetwork from '../../../hooks/useSwitchNetwork'
import { LaunchAuctionFormValues } from '../../../pages/LaunchAuction/formConfig'
import { useWalletModalToggle } from '../../../state/application/hooks'
import { NETWORK_CONFIGS } from '../../../utils/networkConfig'
import { Button } from '../../buttons/Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 1em;
  `}
`

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
`

const Item = styled(NavLink)`
  align-items: center;
  color: ${({ theme }) => theme.primary1};
  display: flex;
  line-height: 1.2;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.1s linear;

  &.active {
    color: ${({ theme }) => theme.primary1};

    .fill {
      fill: ${({ theme }) => theme.primary1};
    }
  }

  &.active:active,
  &:active {
    color: ${({ theme }) => theme.primary1};
    opacity: 0.5;
  }
`

const ActionButton = styled(Button)`
  flex-shrink: 0;
  margin: 3em auto;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 16em;
    margin: 3em auto;
    word-wrap: break-word;
    font-size: 18px;
    white-space: normal;
  `}
`

const SubmitAuction = () => {
  const { initiateNewAuction } = useSubmitAuction()
  const switchNetwork = useSwitchNetwork()
  const { chain } = useNetwork()
  const { address: account } = useAccount()
  const toggleWalletModal = useWalletModalToggle()

  const { getValues, handleSubmit, setError, setValue } = useAuctionForm()

  const selectedChain = getValues().chainId

  const onSubmit = useCallback(async () => {
    if (!account) {
      toggleWalletModal()
      return
    }
    if (selectedChain !== chain.id) {
      switchNetwork(selectedChain)
      return
    }
    initiateNewAuction()
  }, [switchNetwork, initiateNewAuction, toggleWalletModal, account, selectedChain, chain])

  const onError = (errors: FieldErrors<LaunchAuctionFormValues>) => {
    if (!account) {
      toggleWalletModal()
      return
    }
    if (selectedChain !== chain.id) {
      switchNetwork(selectedChain)
      return
    }
    Object.values(errors).forEach((error) => {
      const {
        message,
        // @ts-ignore
        ref: { name },
      } = error
      setError(name, { type: 'custom', message })
      setValue(name, getValues()[name], {
        shouldValidate: true,
        shouldTouch: true,
        shouldDirty: true,
      })
    })
  }

  return (
    <Wrapper>
      <ActionButton disabled={!selectedChain} onClick={handleSubmit(onSubmit, onError)}>
        {chain?.id === selectedChain || !selectedChain
          ? 'Launch Auction'
          : `Switch Network (${NETWORK_CONFIGS[selectedChain]?.name || ''})`}
      </ActionButton>
      <LinkWrapper>
        <Item to="/private-auction-signer">Click here {'\u00A0'}</Item> to sign private auctions
      </LinkWrapper>
    </Wrapper>
  )
}

export default SubmitAuction
