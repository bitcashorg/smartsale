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

export function Newsletter2() {
  return (
    <section className="relative -mt-20 min-h-[50vh] w-screen py-48">
      <div className="mx-auto w-full max-w-screen-xl p-4 lg:px-6 lg:py-5">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl md:mb-12">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form action="#">
            <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="size-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-md border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:rounded-none sm:rounded-l-lg"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full cursor-pointer rounded-md border border-secondary bg-secondary px-5 py-3 text-center text-sm font-medium focus:ring-4 sm:rounded-none sm:rounded-r-md"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  )
}
