export interface PrivateAuctionSignerFormValues {
  chainId: number
  auctionId: number
  whitelistedAddress: string
}

export type FormKeys = keyof PrivateAuctionSignerFormValues

export const DEFAULT_FORM_PARAMS: Readonly<Record<FormKeys, any>> = {
  chainId: 1,
  auctionId: null,
  whitelistedAddress: '',
}

type FormValues = {
  label: string
  tooltipText: string
}

export const FORM_PARAMETERS: Readonly<Record<FormKeys, FormValues>> = {
  auctionId: {
    label: 'Auction ID*',
    tooltipText: 'The ID of the auction',
  },
  whitelistedAddress: {
    label: 'Whitelist Address*',
    tooltipText: 'The addresses that are allowed to bid in the auction(comma separated)',
  },
  chainId: {
    label: '',
    tooltipText: '',
  },
}
