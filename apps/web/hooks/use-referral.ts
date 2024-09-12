'use client'

import { appConfig } from '@/lib/config'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const DEFAULT_URI = 'https://app.bitcash.org'
const DEFAULT_REFERRER = appConfig.env !== 'prod' ? 'bitlautst.bk' : 'bitlaunch.bk'

export function useReferral() {
  const searchParams = useSearchParams()
  const [bitcashRegisterUri, setBitcashRegisterUri] = useState(DEFAULT_URI)

  // save referrer to session storage to be able to access it
  // even if the user navigates away from the page and params are lost
  useEffect(() => {
    // * If no referrer is found, then we use the default referrer from bitlauncher.ai
    sessionStorage.setItem('referrer', searchParams.get('referrer') || DEFAULT_REFERRER)

    const params = new URLSearchParams()
    const referrer = sessionStorage.getItem('referrer') as string // we always get string due to the default value

    params.append('referrer', referrer)
    params.append('source', 'bitlauncher.ai')

    setBitcashRegisterUri(`${DEFAULT_URI}?${params.toString()}`)
  }, [searchParams])

  return { bitcashRegisterUri }
}
