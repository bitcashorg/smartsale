import dayjs from 'dayjs'

import { FORM_PARAMETERS, FormKeys } from '../../../pages/LaunchAuction/formConfig'
import DateInput from '../../form/DateInput'
import FormInput from '../../form/Input'

const formKey: FormKeys = 'auctionEndDate'

export const AuctionEndDate = () => {
  const { label, tooltipText } = FORM_PARAMETERS[formKey]

  return (
    <FormInput label={label} tooltip={tooltipText}>
      <DateInput
        name={formKey}
        rules={{
          required: 'Please enter the auction end date',
          validate: {
            future: (value) => {
              const now = dayjs().second(0).millisecond(0)
              if (dayjs(value).isBefore(now)) {
                return 'Auction end date should be in the future'
              }
              return true
            },
          },
        }}
      />
    </FormInput>
  )
}
