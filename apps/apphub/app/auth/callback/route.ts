import { getErrorMessage } from '@smartsale/errors'
import { nanoid } from '@smartsale/lib'
import { createSupabaseServerClient } from '@smartsale/supabase'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  console.log('🧑‍💻 works!')
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  if (!code) return NextResponse.redirect(`${origin}/auth/auth-code-error`)
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/'

  const supabase = await createSupabaseServerClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.exchangeCodeForSession(code)

  console.log('🍓 user', user, error)
  if (error || !user) throw new Error('Login Error')

  const identity = user.identities?.[0]

  if (!identity) throw new Error('Login Error')
  // const dbUser = await supabase
  //   .from('account')
  //   .insert({
  //     email: user.email,
  //     avatar: identity.identity_data.picture,
  //     name: identity.identity_data.name,
  //     username: generateUsername(identity.identity_data.name),
  //     password: nanoid(),
  //   })
  //   .select()
  //   .single()

  // if (dbUser.error) throw new Error(getErrorMessage(dbUser.error))

  // // TODO: review if this is really needed
  // const cookieHeaders = cookies()
  // cookieHeaders.set(
  //   'userProfile',
  //   JSON.stringify({
  //     userId: dbUser.data.user_id,
  //     username: dbUser.data.username,
  //     name: dbUser.data.name,
  //   }),
  //   {
  //     httpOnly: true,
  //     maxAge: 2630016,
  //     path: '/',
  //     sameSite: 'lax', //  sameSite policy
  //   },
  // )

  // if (!error) return NextResponse.redirect(`${origin}${next}`)
}

// Function to generate a username from an OAuth profile name
// export const generateUsername = (name: string): string => {
//   if (!name) return `user_${generateRandomNumber(6)}`

//   let username = name.toLowerCase().replace(/[^a-z0-9]/g, '_')

//   if (username.length < 10) {
//     username += `_${generateRandomNumber(7)}`
//   } else if (username.length > 20) {
//     username = username.substring(0, 20)
//   }

//   return UsernameSchema.parse(username)
// }
