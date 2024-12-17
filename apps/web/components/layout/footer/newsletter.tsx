'use client'

import { subscribeToNewsletter } from '@/app/actions/general'
import { motionProps } from '@/lib/motion'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@smartsale/ui'
import { Button } from '@smartsale/ui'
import { IconDownRightArrow } from '@smartsale/ui'
import { motion } from 'framer-motion'
import { LucideCheck, LucideLoader2 } from 'lucide-react'
import { useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from 'react-google-recaptcha-v3'
import { useForm } from 'react-hook-form'
import { useSetState } from 'react-use'
import { z } from 'zod'
import { FooterLinks } from './footer-links'

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  recaptcha: z.string().optional(),
})

type SubcriptionFormData = z.infer<typeof formSchema>

export default function Newsletter() {
  const [state, setState] = useSetState({
    loading: false,
    data: '',
    error: '',
  })

  const { register, setValue, watch, formState } = useForm<SubcriptionFormData>(
    {
      resolver: zodResolver(formSchema),
    },
  )

  const { pending } = useFormStatus()
  const recaptchaToken = watch('recaptcha')
  const email = watch('email')
  const isEmailValid = !formState.errors.email && email?.match(/.+@.+\..+/)
  const isReadyToSubmit = (recaptchaToken && isEmailValid) || pending

  async function onSubmit(formData: FormData) {
    setState({ loading: true })
    const result = await subscribeToNewsletter(formData)
    setState({
      loading: false,
      data: result?.data ?? '',
      error: result?.error ?? '',
    })
  }

  function newsletterIconResponse() {
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
            { '-rotate-[45deg]': isReadyToSubmit },
          )}
        />
      </motion.span>
    )
  }

  // Reset state when data/error changes
  useEffect(() => {
    if (!state.data && !state.error) return
    setState({ data: '', error: '' })
  }, [state.data, state.error, setState])

  return (
    <div
      className="container relative px-0 mt-40 mb-10 sm:px-4"
      id="newsletter"
    >
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
        container={{
          element: '#newsletter',
          parameters: {
            badge: 'bottomright',
            theme: 'dark',
          },
        }}
      >
        <section className="relative z-10 newsletter-wrapper">
          <div className="flex min-h-[460px] w-full max-w-[600px] flex-col items-center justify-center gap-8 px-3 text-center md:gap-11 md:px-0">
            <div className="flex flex-col w-full gap-7">
              <h2 className="newsletterHeading">Sign up for our newsletter</h2>
              <p className="mx-auto sm:text-xl">
                To stay up to date with our progress, announcements and
                exclusive discounts, sign up with your email below:
              </p>
            </div>

            <div className="flex flex-col items-center w-full">
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
                  onVerify={(token) => {
                    const timeout = setTimeout(() => {
                      if (token && recaptchaToken !== token) {
                        setValue('recaptcha', token)
                      }
                      clearTimeout(timeout)
                    }, 90000)

                    if (!recaptchaToken) {
                      setValue('recaptcha', token)
                    }
                  }}
                />

                <Button
                  type="submit"
                  variant="tertiary"
                  size="icon"
                  radius="full"
                  className="relative m-0 mr-[2px] min-w-[48px] min-h-[48px] rounded-full"
                  disabled={!isReadyToSubmit}
                >
                  {newsletterIconResponse()}
                </Button>
              </form>

              {(formState.errors.email || state.error) && (
                <p
                  role="alert"
                  className="mt-2 rounded-full bg-destructive px-4 py-0.5 text-destructive-foreground"
                >
                  ✖ {formState.errors.email?.message}
                  {state.error}
                </p>
              )}

              {state.data && (
                <p
                  role="alert"
                  className="mt-2 rounded-full bg-success px-4 py-0.5 text-success-foreground"
                >
                  ✔ {state.data}
                </p>
              )}
            </div>
          </div>

          <FooterLinks />
        </section>
      </GoogleReCaptchaProvider>
    </div>
  )
}
