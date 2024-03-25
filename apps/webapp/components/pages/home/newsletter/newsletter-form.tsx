'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { BackgroundBeams } from '@/components/ui/background-beans'
import { subscribeToNewsletter } from '@/actions'
import { NewsletterRecaptcha } from './newsletter-recaptcha'

// Schema for form validation with Zod
const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  recaptcha: z.string()
})
const formOptions = { resolver: zodResolver(formSchema) }
type SubcriptionFormData = z.infer<typeof formSchema>

function NewsletterForm() {
  const {
    register,
    setValue,
    watch,
    formState: { errors }
  } = useForm<SubcriptionFormData>(formOptions)

  const recaptchaToken = watch('recaptcha')

  return (
    <div className="mx-auto w-full max-w-screen-xl p-4 lg:px-6 lg:py-5">
      <div className="mx-auto max-w-screen-md sm:text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Sign up for our newsletter
        </h2>
        <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl md:mb-12">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p>
        <form action={subscribeToNewsletter} className="space-y-4">
          <input
            {...register('email', { required: 'Email is required' })}
            placeholder="Enter your email"
            type="email"
            className="block w-full rounded-md border-gray-300 p-3"
            required
          />
          {errors.email && <p role="alert">{errors.email.message}</p>}
          <input type="hidden" {...register('recaptcha', { required: true })} />
          <NewsletterRecaptcha
            onSucess={v => setValue('recaptcha', v)}
            onError={() => {}}
          />
          <button
            type="submit"
            className="w-full rounded-md bg-secondary px-5 py-3 text-white"
            disabled={!recaptchaToken}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export function Newsletter() {
  return (
    <section className="relative -mt-20 min-h-[50vh] w-screen py-48">
      <BackgroundBeams />
      <NewsletterForm />
    </section>
  )
}
