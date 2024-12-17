import { SignInButtons } from '@/components/layout/auth/sign-in-buttons'
import { headers } from 'next/headers'
import Image from 'next/image'

export default async function SignInPage() {
  const headersList = headers()
  const hostname = headersList.get('x-forwarded-host') || 'localhost:3000'

  return (
    <div className="flex flex-col h-[calc(100vh-theme(spacing.16))] items-center py-10">
      <div
        className="relative flex justify-center w-full max-w-[726px] py-4 text-center "
        style={{ height: 200 }}
      >
        <Image
          alt="Masterbots Logo"
          className="flex self-center"
          fill
          src="/images/masterbotslogo.png"
          style={{ maxWidth: 726 }}
        />
      </div>

      <div className="flex justify-center pt-10">
        <SignInButtons hostname={hostname} />
      </div>
    </div>
  )
}
