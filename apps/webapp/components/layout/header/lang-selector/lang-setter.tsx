'use client'

import { useEffect } from 'react'
import { parseCookies } from 'nookies'
import { setLanguage } from '@/app/actions/set-lang'

export function LangSetter() {
  useEffect(() => {
    const cookies = parseCookies()
    const lang = cookies.lang

    if (!lang) {
      console.log('set lang for the first time', lang)
      setLanguage(lang)
    }
  }, [])

  return <div />
}
