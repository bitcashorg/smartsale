import { useAuctionForm } from '../../../hooks/useAuctionForm'
import {
  FORM_PARAMETERS,
  FormKeys,
  LaunchAuctionFormValues,
} from '../../../pages/LaunchAuction/formConfig'
import FormInput from '../../form/Input'
import { positiveNumberRegex } from '../../form/NumericalInput'
import Input from '../../form/TextInput'

const formKey: FormKeys = 'auctionedSellAmount'

export const AuctionedSellAmountInput = () => {
  const { label, tooltipText } = FORM_PARAMETERS[formKey]
  const { clearErrors, formState, getFieldState, register } = useAuctionForm()

  return (
    <FormInput label={label} tooltip={tooltipText}>
      <Input<LaunchAuctionFormValues>
        clearErrors={clearErrors}
        formState={formState}
        getFieldState={getFieldState}
        name={formKey}
        register={register}
        rules={{
          required: 'Please enter the amount to sell.',
          pattern: positiveNumberRegex,
          validate: {
            min: (value) => value > 0 || 'Amount to sell must be positive',
          },
        }}
        showError={getFieldState(formKey).isTouched}
      />
    </FormInput>
  )
}
