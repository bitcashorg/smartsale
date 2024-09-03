'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useReferral() {
  const searchParams = useSearchParams()
  const [bitcashRegisterUri, setBitcashRegisterUri] = useState(
    'https://app.bitcash.org/create-account',
  )

  // save referrer to session storage to be able to access it
  // even if the user navigates away from the page and params are lost
  useEffect(() => {
    sessionStorage.setItem('referrer', searchParams.get('referrer') || '')
    const params = new URLSearchParams()
    const referrer = searchParams.get('referrer') || sessionStorage.getItem('referrer')
    if (referrer) params.append('referrer', referrer)
    params.append('source', 'bitlauncher.ai')
    setBitcashRegisterUri(`https://app.bitcash.org/create-account?${params.toString()}`)
  }, [searchParams])

  return { bitcashRegisterUri }
}
