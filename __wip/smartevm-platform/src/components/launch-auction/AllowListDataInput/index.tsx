import { usePublicClient } from 'wagmi'

import { useAuctionForm } from '../../../hooks/useAuctionForm'
import {
  FORM_PARAMETERS,
  FormKeys,
  LaunchAuctionFormValues,
} from '../../../pages/LaunchAuction/formConfig'
import { checkIsContract } from '../../../utils'
import FormInput from '../../form/Input'
import { addressRegex } from '../../form/NumericalInput'
import SwitchInput from '../../form/SwitchInput'
import Input from '../../form/TextInput'

const formKey: FormKeys = 'allowListData'
const isAllowedKey: FormKeys = 'isWhiteListingProcessUsed'

export const AllowListDataInput = () => {
  const { label, tooltipText } = FORM_PARAMETERS[formKey]
  const { label: isAllowedLabel, tooltipText: isAllowedTooltipText } = FORM_PARAMETERS[isAllowedKey]
  const { clearErrors, formState, getFieldState, register, watch } = useAuctionForm()
  const provider = usePublicClient()

  const isWhiteListingProcessUsed = watch(isAllowedKey)

  return (
    <>
      <FormInput label={isAllowedLabel} tooltip={isAllowedTooltipText}>
        <SwitchInput name={isAllowedKey} />
      </FormInput>
      {isWhiteListingProcessUsed && (
        <FormInput label={label} tooltip={tooltipText}>
          <Input<LaunchAuctionFormValues>
            clearErrors={clearErrors}
            formState={formState}
            getFieldState={getFieldState}
            name={formKey}
            register={register}
            rules={{
              required: true,
              pattern: addressRegex,
              validate: {
                isContract: async (address) => {
                  if (!address) return true
                  const allowListDataIsContract = await checkIsContract(provider, address)
                  return allowListDataIsContract ? 'Signing Address should be an EOA' : true
                },
              },
            }}
            showError={getFieldState(formKey).isTouched}
          />
        </FormInput>
      )}
    </>
  )
}
