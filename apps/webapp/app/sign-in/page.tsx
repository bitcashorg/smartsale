import { LoginButton } from '@/components/login-button'
import Image from 'next/image'

export default async function SignInPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-theme(spacing.16))] items-center py-10">
      <div
        className="relative flex justify-center w-full max-w-[726px] py-4 text-center "
        style={{ height: 200 }}
      >
        Smart EVM
      </div>

      <div className="flex justify-center pt-10">
        <LoginButton />
      </div>
    </div>
  )
}
