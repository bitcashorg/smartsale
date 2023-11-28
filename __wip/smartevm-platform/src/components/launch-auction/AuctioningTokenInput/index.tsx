import { fetchBalance, fetchToken } from '@wagmi/core'
import { formatUnits, getAddress, parseUnits } from 'viem'
import { useAccount } from 'wagmi'

import { useAuctionForm } from '../../../hooks/useAuctionForm'
import {
  FORM_PARAMETERS,
  FormKeys,
  LaunchAuctionFormValues,
} from '../../../pages/LaunchAuction/formConfig'
import FormInput from '../../form/Input'
import { addressRegex } from '../../form/NumericalInput'
import Input from '../../form/TextInput'

const formKey: FormKeys = 'auctioningTokenAddress'

export const AuctioningTokenInput = () => {
  const { label, tooltipText } = FORM_PARAMETERS[formKey]
  const { clearErrors, formState, getFieldState, register, watch } = useAuctionForm()
  const { address } = useAccount()

  return (
    <FormInput label={label} tooltip={tooltipText}>
      <Input<LaunchAuctionFormValues>
        clearErrors={clearErrors}
        formState={formState}
        getFieldState={getFieldState}
        name={formKey}
        register={register}
        rules={{
          required: 'Please enter the auctioning token address',
          pattern: addressRegex,
          validate: {
            checksum: (value) => {
              try {
                getAddress(value)
                return true
              } catch (e) {
                return 'The address has an invalid checksum'
              }
            },
            validity: async (value) => {
              try {
                const token = await fetchToken({
                  // @ts-ignore
                  address: value,
                })
                if (!token) {
                  return 'Invalid ERC20'
                }
              } catch (e) {
                return 'Invalid ERC20'
              }
            },
            balance: async (value) => {
              const {
                decimals,
                symbol,
                value: balance,
              } = await fetchBalance({
                address,
                // @ts-ignore
                token: value,
              })
              const auctionedSellAmount = watch('auctionedSellAmount')
              if (auctionedSellAmount && !!balance) {
                const sellAmountInAtoms = parseUnits(auctionedSellAmount as `${number}`, decimals)
                const balanceInUnits = formatUnits(balance, decimals)
                const symbolERC20 = symbol.toUpperCase()
                if (sellAmountInAtoms && sellAmountInAtoms > 0) {
                  if (balance < sellAmountInAtoms) {
                    return `Amount to sell is ${auctionedSellAmount} ${symbolERC20} and your balance is ${balanceInUnits} ${symbolERC20}`
                  }
                }
              }
              return true
            },
            notEqual: (value: string) => {
              const biddingTokenAddress = watch('biddingTokenAddress')
              if (value.toLowerCase() === biddingTokenAddress.toLowerCase()) {
                return 'Bidding token and auctioning token must be different'
              }
              return true
            },
          },
        }}
        showError={getFieldState(formKey).isTouched}
      />
    </FormInput>
  )
}
