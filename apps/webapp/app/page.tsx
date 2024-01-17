import { auth } from '@/auth'
import { isTokenExpired } from 'smartevm-lib'
import { redirect } from 'next/navigation'

export default async function IndexPage() {
  const session = await auth()

  // NOTE: maybe we should use same expiration time
  const jwt = session!.user.hasuraJwt
  if (!jwt || isTokenExpired(jwt)) redirect(`/sign-in`)
  

  return <div>Smart EVM</div>
}
