'use client'
import { Button } from '@/components/ui/button'
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3'

export function NewsletterRecaptcha(props: NewsletterRecaptcha) {
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

  const verifyRecaptcha = async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available')
      return
    }

    const token = await executeRecaptcha('newsletter_signup')
    onSucess(token)
  }

  return <Button onClick={verifyRecaptcha}>reCaptcha</Button>
}

interface NewsletterRecaptcha {
  onSucess: (token: string) => void
  onError: () => void
}
