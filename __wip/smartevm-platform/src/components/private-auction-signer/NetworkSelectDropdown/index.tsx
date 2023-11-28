import { Controller } from 'react-hook-form'

import { usePrivateAuctionSignerForm } from '../../../hooks/usePrivateAuctionSignerForm'
import { PrivateAuctionSignerFormValues } from '../../../pages/PrivateAuctionSigner/formConfig'
import NetworkInput from '../../form/NetworkInput'

export const NetworkSelectDropdown = () => {
  const { control } = usePrivateAuctionSignerForm()

  return (
    <Controller<PrivateAuctionSignerFormValues>
      control={control}
      name="chainId"
      render={({ field: { onChange, value } }) => {
        return <NetworkInput onChange={onChange} value={value as number} />
      }}
    />
  )
}
