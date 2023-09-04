import { FORM_PARAMETERS, FormKeys } from '../../../pages/LaunchAuction/formConfig'
import FormInput from '../../form/Input'
import SwitchInput from '../../form/SwitchInput'

const formKey: FormKeys = 'isAtomicClosureAllowed'

export const AtomicClosureAllowedCheckbox = () => {
  const { label, tooltipText } = FORM_PARAMETERS[formKey]

  return (
    <FormInput label={label} tooltip={tooltipText}>
      <SwitchInput name={formKey} />
    </FormInput>
  )
}
