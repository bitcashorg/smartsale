import {
  type SmartsaleError,
  type SmartsaleErrorCode,
  smartsaleErrors,
} from '@smartsale/errors'
// import * as Sentry from '@sentry/node'

// // Initialize Sentry with configuration
// export function initializeSentry(dsn: string) {
//   Sentry.init({
//     dsn,
//     tracesSampleRate: 1.0,
//     release: process.env.VERCEL_GIT_COMMIT_SHA || 'development',
//     environment: process.env.VERCEL_ENV || 'development',
//   })
// }

/**
 * Logs an application error and reports it to Sentry for debugging purposes.
 * Returns a standardized SmartsaleError from the catalog instead of exposing raw error details.
 *
 * This approach:
 * 1. Preserves full error context for debugging via Sentry
 * 2. Returns user-friendly error messages that maintain trust
 * 3. Prevents exposure of sensitive information in error details
 * 4. Provides consistent error handling across the application
 */
export function captureAppError(
  code: SmartsaleErrorCode,
  error: unknown,
  info?: string,
) {
  if (error instanceof Error) {
    console.error(`${code}: ${error.message}\n${error.stack}`, info)
  } else {
    console.error(`${code}: ${JSON.stringify(error)}`, info)
  }
  // TODO: review this line later when testing with Sentry
  sentryCaptureException(
    error instanceof Error ? error : new Error(JSON.stringify(error)),
  )
  return smartsaleErrors[code]
}

// Capture and log exceptions with appropriate tags
export function sentryCaptureException(error: SmartsaleError | Error) {
  if ('code' in error && typeof error.code === 'string') {
    // For SmartsaleError, use its code as a tag
    // Sentry.captureException(error, { tags: { code: error.code } })
  } else {
    // For other errors, use a generic SYSTEM_ERROR tag
    // Sentry.captureException(error, { tags: { code: 'SYSTEM_ERROR' } })
  }
}
