import { useAccount } from 'wagmi'

import { additionalServiceApi } from '../../../api'
import { usePrivateAuctionSignerForm } from '../../../hooks/usePrivateAuctionSignerForm'
import {
  FORM_PARAMETERS,
  FormKeys,
  PrivateAuctionSignerFormValues,
} from '../../../pages/PrivateAuctionSigner/formConfig'
import FormInput from '../../form/Input'
import { positiveNumberRegex } from '../../form/NumericalInput'
import Input from '../../form/TextInput'

const formKey: FormKeys = 'auctionId'

export const AuctionIdInput = () => {
  const { label, tooltipText } = FORM_PARAMETERS[formKey]
  const { clearErrors, formState, getFieldState, register, watch } = usePrivateAuctionSignerForm()
  const { address } = useAccount()

  const chainId = watch('chainId')

  return (
    <FormInput label={label} tooltip={tooltipText}>
      <Input<PrivateAuctionSignerFormValues>
        clearErrors={clearErrors}
        formState={formState}
        getFieldState={getFieldState}
        name={formKey}
        register={register}
        rules={{
          required: 'Please enter the auctionId',
          pattern: positiveNumberRegex,
          validate: {
            min: (value) => value > 0 || 'Amount to buy should be positive',
            isPrivateAuction: async (value) => {
              if (!chainId) return 'Please select a chain'
              const params = {
                networkId: chainId,
                auctionId: value,
              }

              try {
                const auctionInfo = await additionalServiceApi.getAuctionDetails(params)
                const { allowListSigner, isPrivateAuction } = auctionInfo
                if (!isPrivateAuction) return 'Auction is not private!'
                if (
                  allowListSigner.substring(26).toLowerCase() !== address.substring(2).toLowerCase()
                )
                  return 'You are not the auction signer!'
              } catch (err) {
                return 'Invalid auction ID'
              }
              return true
            },
          },
        }}
        showError={getFieldState(formKey).isDirty}
        watch={watch}
      />
    </FormInput>
  )
}
