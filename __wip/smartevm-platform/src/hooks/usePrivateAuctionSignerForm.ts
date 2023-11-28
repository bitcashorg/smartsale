import { useFormContext } from 'react-hook-form'

import { PrivateAuctionSignerFormValues } from '../pages/PrivateAuctionSigner/formConfig'

export const usePrivateAuctionSignerForm = () => useFormContext<PrivateAuctionSignerFormValues>()
