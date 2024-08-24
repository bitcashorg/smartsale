'use client'

import { getSesssion } from '@/actions'
import { genLoginSigningRequest } from '@/lib/eos'
import { useSupabaseClient } from '@/services/supabase'
import { createContextHook } from '@blockmatic/hooks-utils'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import type { Tables } from '@repo/supabase'
import { uniq } from 'lodash'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { type ReactNode, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import toast from 'react-hot-toast'
import { useAsync, useLocalStorage, useToggle } from 'react-use'
import { v4 as uuidv4 } from 'uuid'
import { type Config, type UseAccountReturnType, useAccount } from 'wagmi'
import { useMultibase } from './use-multibase'

// Exports
export { SessionProvider, useSession }

// don export this fn must be wrapped for context to work
function useSessionFn() {
  const supabase = useSupabaseClient()
  const account = useAccount()
  const [newSessionId] = useState(uuidv4())
  const searchParams = useSearchParams()
  const paramsSessionId = searchParams.get('session_id')
  const pathname = usePathname()
  const router = useRouter()
  const { openConnectModal } = useConnectModal()
  const { identifyUser } = useMultibase()
  // this controls the session dialog with register and login qr codes
  // when login qr code is display a new esr is created and saved on db for later reference on callback call
  const [showSessionDialog, toggleShowSessionDialog] = useToggle(false)
  const [session, setSession] = useLocalStorage<Tables<'session'> | null>(
    'bitcash-session',
  )
  const loginSR = useAsync(() => genLoginSigningRequest(newSessionId))
  const loginUri = loginSR?.value?.encode()

  let registerUri = 'https://app.bitcash.org?share=JVnL7qzrU'

  const verifyUpsertAccount = async ({
    session,
    account,
  }: {
    session: Tables<'session'> | null | undefined
    account: UseAccountReturnType<Config>
  }) => {
    if (!session) return

    console.log('🔐 verifyAccount')

    let user
    const updatedAddresses = []

    try {
      user = await supabase
        .from('user')
        .select('id, address')
        .eq('account', session.account)
        .single()
      updatedAddresses.push(
        ...(user?.data?.address.length
          ? [...user?.data?.address, account.address as string]
          : [account.address as string]),
      )
    } catch (error) {
      console.error('🔐 verifyAccount error', error)
    }

    await supabase.from('user').upsert(
      {
        id: user?.data?.id,
        account: session.account,
        address: uniq(updatedAddresses.filter(Boolean)),
      },
      {
        onConflict: 'account',
      },
    )

    // * If the address is new, we show the toaster.
    if (
      account.address &&
      !user?.data?.address.includes(account.address as string)
    ) {
      toast('Address linked successfully!', { icon: '🔗' })
    }
  }

  useEffect(() => {
    if (!account.address) return
    console.log('🔐 update account with received address')
    verifyUpsertAccount({ session, account })
  }, [account.address])

  const startSession = (session: Tables<'session'>) => {
    verifyUpsertAccount({ session, account })
    setSession(session)
    identifyUser(account.address || '0x', {
      account: session?.account ?? 'unknown',
    })
  }

  // subscribe to supabase session table and set session state
  // this table get updated by /api/esr callback invoked by the signing wallet
  useEffect(() => {
    //  we dont need to subscribe on mobile
    if (isMobile) return

    console.log(`🧑🏻‍💻 🍓 subscribing to session ${newSessionId}`)
    const channel = supabase
      .channel('session')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'session' },
        (payload) => {
          console.log('BAZINGA 🍓 new supabase session', payload.new)
          // set new session if ids match
          if (session || payload.new.id !== newSessionId) return
          const newSession = payload.new as Tables<'session'>
          console.log(' ✅ supabase session id matches', newSession)
          startSession(newSession)
          toggleShowSessionDialog(false)
        },
      )
      .subscribe()

    return () => {
      console.log(`🤖 unsubscribing to session ${newSessionId}`)
      supabase.removeChannel(channel)
    }
  }, [startSession, supabase, isMobile])

  // // open session from url search params
  useEffect(() => {
    if (!paramsSessionId) return
    console.log(`💥💥 url session effect  ${paramsSessionId}`)
    // get session from server action and remove
    const getSession = async () => {
      console.log(`getting session ${paramsSessionId}`)
      const formData = new FormData()
      formData.append('session_id', paramsSessionId)

      const session = await getSesssion(formData)
      console.log(`session ${paramsSessionId}`, session)
      if (!session) return
      // TODO: move this logic to backend
      // set cookie session
      startSession(session)
      console.log('✅ session', session)
      // Encoding the query and managing search parameters
      const params = new URLSearchParams(searchParams)
      params.delete('session_id')
      router.replace(`${pathname}`)
    }

    getSession()
  }, [paramsSessionId])

  // save referrer to session storage
  useEffect(() => {
    if (!searchParams.get('referrer') && !sessionStorage.getItem('referrer'))
      return
    if (searchParams.get('referrer')) {
      sessionStorage.setItem('referrer', searchParams.get('referrer') || '')
    }
    registerUri = `https://app.bitcash.org/create-account?referrer=${
      searchParams.get('referrer') || sessionStorage.getItem('referrer')
    }&source=bitlauncher.ai`
  }, [])

  // default moblie login mode is redirect
  const loginRedirect = () => {
    if (!loginUri || !open) return
    // post request to parent if present
    window.parent &&
      window.parent.postMessage({ eventType: 'esr', code: loginUri }, '*')

    // redirect with esr and callback on mobile
    const params = new URLSearchParams()
    params.append('esr_code', loginUri.replace('esr://', ''))
    const callbackUrl = `${window.location.href}?session_id=${newSessionId}`
    console.log('💥 callbackUrl', callbackUrl)
    const encodedCallbackUrl = encodeURIComponent(callbackUrl)
    params.append('callback', encodedCallbackUrl)
    const referrer = sessionStorage.getItem('referrer')
    if (referrer) params.append('referrer', referrer)
    params.append('source', 'bitlauncher.ai')
    location.href = `https://app.bitcash.org?${params.toString()}`
  }

  // show rainbowkit to link evm wallet if logged in
  // else call login action depending base on viewport
  const loginOrConnect = () => {
    console.log('login or connect', session, openConnectModal)
    session && openConnectModal
      ? openConnectModal()
      : isMobile
        ? loginRedirect()
        : toggleShowSessionDialog(true)
  }

  const logout = () => {
    console.log('logout')
    setSession(null)
    router.refresh()
  }

  return {
    newSessionId,
    session,
    loginUri,
    registerUri,
    showSessionDialog,
    logout,
    loginRedirect,
    openConnectModal,
    loginOrConnect,
    toggleShowSessionDialog,
  }
}

function SessionProvider({ children }: { children: ReactNode }) {
  return (
    <React.Suspense fallback={<div />}>
      <SessionProviderInner>{children}</SessionProviderInner>
    </React.Suspense>
  )
}

const [useSession, SessionProviderInner] = createContextHook(
  useSessionFn,
  'You must wrap your application with <SessionProvider /> in order to useSession().',
)
