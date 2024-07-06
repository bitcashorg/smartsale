'use client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { subscribeToNewsletter } from '@/actions'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconBitlauncher,
  IconDiscord,
  IconDownRightArrow
} from '@/components/ui/icons'
import { cn, motionProps } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { LucideCheck, LucideLoader2 } from 'lucide-react'
import Link from 'next/link'
import { useFormStatus } from 'react-dom'
import { GoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useForm } from 'react-hook-form'
import { useSetState } from 'react-use'
import { z } from 'zod'
import { useEffect } from 'react'
import { LangProp } from '@/types/routing.type'
import { FooterLinks } from './footer-links'
import { appConfig } from '@/lib/config'

// Schema for form validation with Zod
const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  recaptcha: z.string().optional()
})
const formOptions = { resolver: zodResolver(formSchema) }
type SubcriptionFormData = z.infer<typeof formSchema>

export default function Newsletter({ lang }: LangProp) {
  const [state, setState] = useSetState({
    loading: false,
    data: '',
    error: ''
  })
  const { register, setValue, watch, formState } =
    useForm<SubcriptionFormData>(formOptions)

  const onSubmit = async (formData: FormData) => {
    setState({ loading: true })
    const result = await subscribeToNewsletter(formData)
    setState({
      loading: false,
      data: result?.data ?? '',
      error: result?.error ?? ''
    })
  }

  const { pending } = useFormStatus()

  const recaptchaToken = watch('recaptcha')
  const email = watch('email')
  const isEmailValid =
    !formState.errors.email && email && email.match(/.+@.+\..+/)
  const isReadyToSubmit =
    (recaptchaToken && !Boolean(formState.errors.email) && isEmailValid) ||
    pending

  const newsletterIconResponse = () => {
    if (pending || state.loading)
      return (
        <motion.span key="loading-icon" {...motionProps.iconMotionProps}>
          <LucideLoader2 size={26} className="animate-spin stroke-white" />
        </motion.span>
      )
    if (state.data)
      return (
        <motion.span key="success-icon" {...motionProps.iconMotionProps}>
          <LucideCheck size={26} className="stroke-white" />
        </motion.span>
      )

    return (
      <motion.span key="default-icon" {...motionProps.iconMotionProps}>
        <IconDownRightArrow
          className={cn(
            'size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45 [&_path]:stroke-white',
            { '-rotate-[45deg]': isReadyToSubmit }
          )}
        />
      </motion.span>
    )
  }

  useEffect(() => {
    if (!state.data && !state.error) return
    setState({ data: '', error: '' })
  }, [email])

  return (
    <div className="relative overflow-hidden" id="newsletter">
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
        // language="[optional_language]"
        container={{
          element: '#newsletter',
          parameters: {
            badge: 'bottomright', //'[inline|bottomright|bottomleft]', // optional, default undefined
            theme: 'dark' // optional, default undefined
          }
        }}
      >
        <section className="newsletter-wrapper mt-40">
          <div className="flex h-[460px] w-full max-w-[600px] flex-col items-center justify-center gap-8 px-3 text-center md:gap-11 md:px-0">
            <div className="flex w-full flex-col gap-7">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Sign up for our newsletter
              </h2>
              <p className="mx-auto sm:text-xl">
                To stay up to date with our progress, announcements and
                exclusive discounts, sign up with your email below:
              </p>
            </div>
            <div className="flex w-full flex-col items-center">
              <form
                action={onSubmit}
                className="flex h-[62px] w-full max-w-[342px] items-center justify-center gap-2 self-center rounded-full bg-secondary p-1 text-black/90"
              >
                <input
                  {...register('email', { required: 'Email is required' })}
                  placeholder="Your email"
                  type="email"
                  className="block size-full max-w-[calc(100%-58px)] rounded-full bg-transparent px-6 font-semibold placeholder:font-semibold focus-within:outline focus-within:outline-ring"
                  required
                />

                <input
                  type="hidden"
                  {...register('recaptcha', { required: true })}
                />
                <GoogleReCaptcha
                  onVerify={v => {
                    const timeout = setTimeout(() => {
                      if (v.toString() && recaptchaToken !== v.toString()) {
                        setValue('recaptcha', v.toString())
                      }

                      clearTimeout(timeout)
                    }, 90000)

                    if (!recaptchaToken) {
                      setValue('recaptcha', v.toString())
                    }
                  }}
                />
                <Button
                  type="submit"
                  variant="accent"
                  size="icon"
                  radius="full"
                  className="relative m-0 mr-[2px] size-[48px] rounded-full"
                  disabled={!isReadyToSubmit}
                >
                  {newsletterIconResponse()}
                </Button>
              </form>
              {formState.errors.email || state.error ? (
                <p
                  role="alert"
                  className="mt-2 rounded-full bg-destructive px-4 py-0.5 text-destructive-foreground"
                >
                  {'✖ '}
                  {formState.errors.email?.message}
                  {state.error}
                </p>
              ) : null}
              {state.data ? (
                <p
                  role="alert"
                  className="mt-2 rounded-full bg-success px-4 py-0.5 text-success-foreground"
                >
                  {'✔ '}
                  {state.data}
                </p>
              ) : null}
            </div>
          </div>

          <FooterLinks />
        </section>
      </GoogleReCaptchaProvider>
    </div>
  )
}

function DiscordButton() {
  return (
    <Link
      href="https://discord.gg/KuR48XUxnG"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({
          variant: 'outline',
          radius: 'full'
        }),
        'size-14 border-transparent p-3.5 md:border-accent-secondary lg:size-14'
      )}
    >
      <IconDiscord className={'block size-full fill-accent-secondary'} />
      <span className="sr-only">Discord</span>
    </Link>
  )
}
