import { Controller } from 'react-hook-form'

import { useAuctionForm } from '../../../hooks/useAuctionForm'
import { LaunchAuctionFormValues } from '../../../pages/LaunchAuction/formConfig'
import NetworkInput from '../../form/NetworkInput'

export const NetworkSelectDropdown = () => {
  const { control } = useAuctionForm()

  return (
    <Controller<LaunchAuctionFormValues>
      control={control}
      name="chainId"
      render={({ field: { onChange, value } }) => {
        return <NetworkInput onChange={onChange} value={value as number} />
      }}
    />
  )
}
