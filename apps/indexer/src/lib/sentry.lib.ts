import * as Sentry from '@sentry/node'

export const subscriptionSentryTransaction = Sentry.startTransaction({
  op: 'subscriptionSentryTransaction',
  name: 'Logging transactions for Subscription Connections',
})
