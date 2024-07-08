'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { setLanguage } from '@/app/actions/set-lang'

export function LangSetter() {
  const router = useRouter()

  useEffect(() => {
    const cookies = parseCookies()
    const lang = cookies.lang

    if (!lang) {
      console.log('set lang for the first time', lang)
      setLanguage(lang)
    }
  }, [router])

  return <div />
}
