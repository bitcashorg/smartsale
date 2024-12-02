export function formatCurrency({
  value,
  currencyCode = 'USD',
  locale = 'en-US',
}: FormatCurrencyParams): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return formatter.format(Number(value))
}

type FormatCurrencyParams = {
  value: number | string
  currencyCode?: string
  locale?: string
}
