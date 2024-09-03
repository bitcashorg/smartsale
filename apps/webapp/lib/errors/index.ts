import { type AppErrorCode, appErrors } from './catalog'
export * from './catalog'

// Logs an application error, reports to Sentry and throws an AppError.
export function logAppErr(code: AppErrorCode, error: unknown) {
  console.error(`${code}: ${JSON.stringify(error)}`)
  // TODO: log error to Sentry
  return appErrors[code]
}
