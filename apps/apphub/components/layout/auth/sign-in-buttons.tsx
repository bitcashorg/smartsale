'use client'

import { useSupabaseClient } from '@smartsale/supabase'
import { Button } from '@smartsale/ui'
import { Chrome, Github, Twitter } from 'lucide-react'

export function SignInButtons({ hostname }: { hostname: string }) {
  const supabase = useSupabaseClient()
  const isLocalhost = hostname === 'localhost:3000'
  const redirectTo = `${isLocalhost ? 'http' : 'https'}://${hostname}/auth/callback`
  console.log(redirectTo)

  const handleOAuthLogin = (provider: 'github' | 'google' | 'twitter') => {
    supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo },
    })
  }

  return (
    <div className="flex gap-4">
      <Button variant="outline" onClick={() => handleOAuthLogin('google')}>
        <Chrome className="mr-2 h-4 w-4" />
        Google
      </Button>

      <Button variant="outline" onClick={() => handleOAuthLogin('github')}>
        <Github className="mr-2 h-4 w-4" />
        GitHub
      </Button>

      <Button variant="outline" onClick={() => handleOAuthLogin('twitter')}>
        <Twitter className="mr-2 h-4 w-4" />
        Twitter
      </Button>
    </div>
  )
}
