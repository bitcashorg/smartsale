import { useFormContext } from 'react-hook-form'

import { LaunchAuctionFormValues } from '../pages/LaunchAuction/formConfig'

export const useAuctionForm = () => useFormContext<LaunchAuctionFormValues>()
