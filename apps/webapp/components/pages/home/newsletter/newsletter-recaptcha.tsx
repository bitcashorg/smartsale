'use client'
import { Button } from '@/components/ui/button'
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3'

export function NewsletterRecaptcha(props: NewsletterRecaptcha) {
  console.log(
    'NEXT_PUBLIC_RECAPTCHA_SITE_KEY',
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  )
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    >
      <NewsletterRecaptchaChild {...props} />
    </GoogleReCaptchaProvider>
  )
}

function NewsletterRecaptchaChild({ onSucess }: NewsletterRecaptcha) {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const verifyRecaptcha = async (e: React.MouseEvent) => {
    console.log('verify catpcha')
    e.preventDefault()
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available')
      return
    }

    console.log('lets go')
    const token = await executeRecaptcha('newsletter_signup')
    console.log('token')
    onSucess(token)
  }

  return <Button onClick={verifyRecaptcha}>reCaptcha</Button>
}

interface NewsletterRecaptcha {
  onSucess: (token: string) => void
  onError: () => void
}
