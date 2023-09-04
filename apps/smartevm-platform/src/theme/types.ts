import { LaunchAuctionFormValues } from '../pages/LaunchAuction/formConfig'
import { PrivateAuctionSignerFormValues } from '../pages/PrivateAuctionSigner/formConfig'

// Declare a FormValues interface that is a combination of all the FormValues
// interfaces from the formConfig files.
export interface FormValues extends LaunchAuctionFormValues, PrivateAuctionSignerFormValues {}
