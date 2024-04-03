'use client'

import { subscribeToNewsletter } from '@/actions'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { GoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Schema for form validation with Zod
const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  recaptcha: z.string()
})
const formOptions = { resolver: zodResolver(formSchema) }
type SubcriptionFormData = z.infer<typeof formSchema>

export function Newsletter() {
  const {
    register,
    setValue,
    watch,
    formState: { errors }
  } = useForm<SubcriptionFormData>(formOptions)

  const recaptchaToken = watch('recaptcha')
  const email = watch('email')
  const recaptcha = watch('recaptcha')
  const isEmailValid = !errors.email && email && email.match(/.+@.+\..+/)

  return (
    // <div className="z-10 w-full max-w-screen-xl p-4 mx-auto lg:px-6 lg:py-5">
    <section className="flex flex-col gap-14 mx-auto max-w-screen-md sm:text-center">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Sign up for our newsletter
        </h2>
        <p className="mx-auto max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p>
      </div>
      <form action={subscribeToNewsletter} className="flex flex-col md:flex-row gap-5" noValidate>
        <input
          {...register('email', { required: 'Email is required' })}
          placeholder="Enter your email"
          type="email"
          className="block w-full rounded-md border-gray-300 p-3 md:max-w-[80%]"
          required
        />
        {errors.email && <p role="alert">{errors.email.message}</p>}
        <input type="hidden" {...register('recaptcha', { required: true })} />
        <GoogleReCaptcha onVerify={v => setValue('recaptcha', v || '')} />
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="w-full text-lg py-6 my-0 md:max-w-[20%]"
          disabled={!recaptchaToken || Boolean(errors.email) || !isEmailValid}
        >
          Subscribe
        </Button>
      </form>
    </section>
    // </div>
  )
}
