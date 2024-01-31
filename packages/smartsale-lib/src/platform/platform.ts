export const platform = (() => {
  const isBrowser = typeof window !== 'undefined'
  const userAgent = isBrowser ? window.navigator.userAgent : ''
  const isAndroid = /(Android)/i.test(userAgent)
  const isPhone = /(iPhone|iPod)/i.test(userAgent)
  const isIpad = /(iPad)/i.test(userAgent)
  const isMobile = isPhone || isAndroid

  return {
    userAgent,
    isBrowser,
    isNode: !isBrowser,
    isPhone,
    isIpad,
    isMobile,
  }
})()
