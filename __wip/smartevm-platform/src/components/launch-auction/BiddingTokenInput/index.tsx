import { fetchToken } from '@wagmi/core'
import { getAddress } from 'viem'

import { useAuctionForm } from '../../../hooks/useAuctionForm'
import {
  FORM_PARAMETERS,
  FormKeys,
  LaunchAuctionFormValues,
} from '../../../pages/LaunchAuction/formConfig'
import FormInput from '../../form/Input'
import { addressRegex } from '../../form/NumericalInput'
import Input from '../../form/TextInput'

const formKey: FormKeys = 'biddingTokenAddress'

export const BiddingTokenInput = () => {
  const { label, tooltipText } = FORM_PARAMETERS[formKey]
  const { clearErrors, formState, getFieldState, register, watch } = useAuctionForm()

  return (
    <FormInput label={label} tooltip={tooltipText}>
      <Input<LaunchAuctionFormValues>
        clearErrors={clearErrors}
        formState={formState}
        getFieldState={getFieldState}
        name={formKey}
        register={register}
        rules={{
          required: 'Please enter the bidding token address',
          pattern: addressRegex,
          validate: {
            checksum: (value: string) => {
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
            notEqual: (value: string) => {
              const auctioningTokenAddress = watch('auctioningTokenAddress')
              if (value.toLowerCase() === auctioningTokenAddress.toLowerCase()) {
                return 'Auctioning token and bidding token must be different'
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
