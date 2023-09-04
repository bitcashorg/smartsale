import React from 'react'
import styled from 'styled-components'

import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { useNetwork } from 'wagmi'

import { DEFAULT_FORM_PARAMS, LaunchAuctionFormValues } from './formConfig'
import { AllowListDataInput } from '../../components/launch-auction/AllowListDataInput'
import { AtomicClosureAllowedCheckbox } from '../../components/launch-auction/AtomicClosureAllowedSwitch'
import { AuctionEndDate } from '../../components/launch-auction/AuctionEndDate'
import { AuctionedSellAmountInput } from '../../components/launch-auction/AuctionedSellAmountInput'
import { AuctioningTokenInput } from '../../components/launch-auction/AuctioningTokenInput'
import { BiddingTokenInput } from '../../components/launch-auction/BiddingTokenInput'
import { MinBuyAmountInput } from '../../components/launch-auction/MinBuyAmountInput'
import { MinimumBiddingAmountPerOrderInput } from '../../components/launch-auction/MinimumBiddingAmountPerOrderInput'
import { MinimumFundingThresholdInput } from '../../components/launch-auction/MinimumFundingThresholdInput'
import { NetworkSelectDropdown } from '../../components/launch-auction/NetworkSelectDropdown'
import { OrderCancellationEndDate } from '../../components/launch-auction/OrderCancellationEndDate'
import SubmitAuction from '../../components/launch-auction/SubmitAuction'

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.text1};
  font-size: 26px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  justify-content: center;
  margin-right: 0.3em;
`
const AuctionTitle = styled.h1`
  color: ${({ theme }) => theme.primary1};
  font-size: 26px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  justify-content: center;
`
const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 2em auto 0 !important;
  max-width: 60em !important;
`

const LaunchAuction: React.FC = () => {
  const { chain } = useNetwork()
  const formMethods = useForm<Required<LaunchAuctionFormValues>>({
    mode: 'all',
    defaultValues: { ...DEFAULT_FORM_PARAMS, chainId: chain?.id || 1 },
  })
  const { control } = formMethods

  useWatch({
    control,
  })

  return (
    <FormProvider {...formMethods}>
      <TitleWrapper>
        <Title>Start a new</Title>
        <AuctionTitle>Auction</AuctionTitle>
      </TitleWrapper>
      <FormBody>
        <NetworkSelectDropdown />
        <AuctioningTokenInput />
        <BiddingTokenInput />
        <OrderCancellationEndDate />
        <AuctionEndDate />
        <AuctionedSellAmountInput />
        <MinBuyAmountInput />
        <MinimumBiddingAmountPerOrderInput />
        <MinimumFundingThresholdInput />
        <AtomicClosureAllowedCheckbox />
        <AllowListDataInput />
        <SubmitAuction />
      </FormBody>
    </FormProvider>
  )
}

export default LaunchAuction
