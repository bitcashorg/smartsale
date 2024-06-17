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
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
      // language="[optional_language]"
      container={{
        parameters: {
          badge: 'inline', //'[inline|bottomright|bottomleft]', // optional, default undefined
          theme: 'dark' // optional, default undefined
        }
      }}
    >
      <section className="newsletter-wrapper">
        <div className="flex h-[460px] w-full max-w-[600px] flex-col items-center justify-center gap-8 px-3 text-center md:gap-11 md:px-0">
          <div className="flex flex-col w-full gap-7">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto sm:text-xl">
              To stay up to date with our progress, announcements and exclusive
              discounts, sign up with your email below:
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

        {/* <div className="flex h-[230px] w-full flex-col flex-wrap items-center justify-evenly rounded-b-3xl bg-primary px-10 md:flex-row md:justify-between">
          <Link href={`/${lang}`} className="flex">
            <IconBitlauncher className="w-40 h-8 md:h-11 md:w-56" />
          </Link>
          <div className="hidden md:block">
            <DiscordButton />
          </div>
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="block md:hidden">
              <DiscordButton />
            </div>
            <Link
              href={`/${lang}/terms`}
              className="underline-offset-2 focus-within:underline hover:underline"
            >
              Terms & Privacy Policy
            </Link>
          </div> 
        </div>*/}
        <FooterLinks />
      </section>
    </GoogleReCaptchaProvider>
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
