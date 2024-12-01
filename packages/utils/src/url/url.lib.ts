declare let window: {
  location: {
    protocol: string
    hostname: string
  }
}

export function getSiteUrl() {
  if (typeof window === 'undefined') throw new Error('window not found')
  const { protocol, hostname } = window.location
  return `${protocol}//${hostname}`
}
