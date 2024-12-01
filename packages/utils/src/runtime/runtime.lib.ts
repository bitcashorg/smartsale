interface Window {
  navigator: {
    userAgent: string
  }
}

declare let window: Window

export const runtimeEnv = (() => {
  const isBrowser = typeof window !== 'undefined'
  const userAgent = isBrowser ? window.navigator.userAgent : ''
  const isAndroid = userAgent && /(Android)/i.test(userAgent)
  const isPhone = userAgent && /(iPhone|iPod)/i.test(userAgent)
  const isIpad = userAgent && /(iPad)/i.test(userAgent)
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
