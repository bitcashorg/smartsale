import { useAccount } from 'wagmi'

import { useIsPrivateAuction } from '../../../hooks/useIsPrivateAuction'
import { usePrivateAuctionSignerForm } from '../../../hooks/usePrivateAuctionSignerForm'
import {
  FORM_PARAMETERS,
  FormKeys,
  PrivateAuctionSignerFormValues,
} from '../../../pages/PrivateAuctionSigner/formConfig'
import FormInput from '../../form/Input'
import TextInput from '../../form/MultilineTextInput'
import { addressRegex } from '../../form/NumericalInput'

const formKey: FormKeys = 'whitelistedAddress'

export const WhitelistAddressInput = () => {
  const { label, tooltipText } = FORM_PARAMETERS[formKey]

  const { clearErrors, formState, register, watch } = usePrivateAuctionSignerForm()
  const { address } = useAccount()
  const auctionId = watch('auctionId')
  const chainId = watch('chainId')
  const { auctionSigner, isLoading, isPrivateAuction } = useIsPrivateAuction({ auctionId, chainId })

  const disabled =
    !auctionId ||
    isLoading ||
    !isPrivateAuction ||
    auctionSigner.toLowerCase() !== address?.toLowerCase()

  return (
    <FormInput label={label} tooltip={tooltipText}>
      <TextInput<PrivateAuctionSignerFormValues>
        clearErrors={clearErrors}
        disabled={disabled}
        formState={formState}
        name={formKey}
        register={register}
        rules={{
          validate: {
            validAddress: (value) => {
              if (typeof value !== 'string' || !value) return 'Please enter an address'
              // Split the string by new line, comma or space
              const addresses = value?.trim()?.split(/[\n, ]+/)
              let validAddresses = true
              addresses.forEach((address) => {
                if (!addressRegex.test(address)) {
                  validAddresses = false
                }
              })

              if (!validAddresses) return 'Please enter valid addresses'

              return true
            },
          },
        }}
      />
    </FormInput>
  )
}
