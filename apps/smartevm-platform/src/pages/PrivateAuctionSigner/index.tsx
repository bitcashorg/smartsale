import React from 'react'
import styled from 'styled-components'

import { FormProvider, useForm } from 'react-hook-form'
import { useNetwork } from 'wagmi'

import { DEFAULT_FORM_PARAMS, PrivateAuctionSignerFormValues } from './formConfig'
import { AuctionIdInput } from '../../components/private-auction-signer/AuctionIdInput'
import { NetworkSelectDropdown } from '../../components/private-auction-signer/NetworkSelectDropdown'
import SubmitAddress from '../../components/private-auction-signer/SubmitAddress'
import { WhitelistAddressInput } from '../../components/private-auction-signer/WhitelistAddressesInput'

const Title = styled.h1`
  color: ${({ theme }) => theme.text1};
  font-size: 26px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
`

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 2em auto 0 !important;
  max-width: 60em !important;
`

const PrivateAuctionSigner: React.FC = () => {
  const { chain } = useNetwork()
  const formMethods = useForm<Required<PrivateAuctionSignerFormValues>>({
    mode: 'all',
    defaultValues: { ...DEFAULT_FORM_PARAMS, chainId: chain?.id || 1 },
  })

  return (
    <FormProvider {...formMethods}>
      <Title>Private Auction Signer</Title>
      <FormBody>
        <NetworkSelectDropdown />
        <AuctionIdInput />
        <WhitelistAddressInput />
        <SubmitAddress />
      </FormBody>
    </FormProvider>
  )
}

export default PrivateAuctionSigner
