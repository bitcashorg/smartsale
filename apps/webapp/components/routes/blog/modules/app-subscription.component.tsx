'use-client'

import { useState } from 'react'

import { Alert, Button, Input, LazyImage } from '@/components/routes/blog/base'
import { HomeProps } from '@/components/routes/blog/views/home'

export const AppSubscription = ({
  subscriptionTitle,
  subscriptionSubtitle,
  subscriptionInputPlaceholder,
  subscriptionCta
}: AppSubscriptionProps) => {
  const [state, setState] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')

  const subscribe = async (e: any) => {
    e.preventDefault()

    setState(1)
    setErrorMsg('')
    console.log(e.target[0].value)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: e.target[0].value
      })

      const data = await res.json()
      if (data.error !== null) {
        throw data.error
      }
      setState(2)
    } catch (e: any) {
      setErrorMsg(e)
      setState(3)
    }
  }

  return (
    <div className="flex w-full justify-center pt-24">
      <div className="space-y-space-30 mx-auto flex flex-col items-center justify-center">
        <div className="w-space-130">
          <LazyImage
            src="/sub.png"
            alt=""
            loading="lazy"
            imgWrapperClassName="w-24 max-h-24"
            className="h-full w-full rounded-full dark:bg-gray-300"
            width={100}
            height={100}
            fill={false}
          />
        </div>
        <div className="space-y-space-10 flex flex-col">
          <span className="font-futura-pt-book text-sub-1-md md:text-sub-1-lg text-black dark:text-neutral-400">
            {' '}
            {subscriptionTitle}
          </span>
          <span className="font-futura-pt-book text-footer-text text-neutral-400">
            {' '}
            {subscriptionSubtitle}
          </span>
        </div>

        {state === 3 ? <Alert message={errorMsg} variant="error" /> : ''}

        {state == 2 ? (
          <Alert
            message="Thanks for subscribing, you will receive mail once we start sending out newsletter."
            variant="success"
          />
        ) : (
          <form className="flex w-full flex-row gap-8" onSubmit={subscribe}>
            <div className="w-[80%]">
              <Input
                type="email"
                placeholder={subscriptionInputPlaceholder}
                required
              />
            </div>
            <div className="flex w-[20%] justify-center">
              <Button variant="primary" size="lg" disabled={state === 1}>
                {' '}
                {state === 1 ? 'Loading' : subscriptionCta}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

interface AppSubscriptionProps
  extends Pick<
    HomeProps['i18n'],
    | 'subscriptionCta'
    | 'subscriptionInputPlaceholder'
    | 'subscriptionSubtitle'
    | 'subscriptionTitle'
  > {}
