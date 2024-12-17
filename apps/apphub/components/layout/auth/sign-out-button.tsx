'use client'

import { useSupabaseClient } from '@smartsale/supabase'
import { Button } from '@smartsale/ui'

export default function SignOut() {
  async function handleSignOut() {
    // const { error } = await supabase.auth.signOut()
    // if (error) {
    //   // eslint-disable-next-line no-console
    //   console.error('ERROR:', error)
    // }
  }

  return (
    <Button className="button-inverse" onClick={handleSignOut} type="button">
      Sign Out
    </Button>
  )
}
