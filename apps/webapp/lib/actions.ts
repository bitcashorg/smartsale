/**
 * Represents a standardized response structure for actions.
 * This pattern is useful for several reasons:
 * 1. Consistency: Provides a uniform structure for all action responses.
 * 2. Type safety: Allows for type-checking of the response data.
 * 3. Error handling: Includes a field for user-friendly error messages.
 * 4. Flexibility: The generic type T allows for different data structures.
 *
 * When success is true:
 * - message and data are optional
 * When success is false:
 * - error is required and should contain a user-friendly error message
 *
 * Note: It's important to always return user-friendly error messages
 * that are clear and actionable for the end-user.
 */

import { type AppError, type AppErrorCode, logAppErr } from '@/lib/errors'

// DEPRECATED: Use ActionResult instead as next-safe-action return type
export interface ActionResponse<T = unknown> {
  success: boolean
  message?: string
  data?: T
  error?: AppError
}

export type ActionResult<T> = Success<T> | Failure

export type Success<T> = { success: true; result: T }
export type Failure = { success: false; error: AppError }

export function success<T>(result: T): Success<T> {
  return { success: true, result }
}

export function failure(code: AppErrorCode, error: unknown): Failure {
  return { success: false, error: logAppErr(code, error) }
}
