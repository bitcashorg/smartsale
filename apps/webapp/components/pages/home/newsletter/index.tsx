import { NewsletterForm } from './newsletter-form'
import { BackgroundBeams } from '@/components/ui/background-beans'

export function Newsletter() {
  return (
    <section className="relative -mt-20 min-h-[50vh] w-screen py-48">
      {/* <BackgroundBeams /> */}
      <NewsletterForm />
    </section>
  )
}
