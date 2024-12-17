export interface SmartsaleError {
  code: string
  message: string
}

/**
 * Represents the possible error codes defined in the smartsaleErrors object.
 * This type ensures type safety when working with error codes.
 */
export type SmartsaleErrorCode =
  | 'INVALID_INPUT'
  | 'NETWORK_ERROR'
  | 'INVALID_SIGNATURE'
  | 'UNEXPECTED_ERROR'
  | 'NOT_FOUND'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'SERVER_ERROR'
  | 'BAD_REQUEST'
  | 'FETCH_ERROR'
  | 'DB_OP_FAILURE'
  | 'TRX_OP_FAILURE'
  | 'INSERT_ERROR'
  | 'UPDATE_ERROR'
// https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
export type ErrorWithMessage = {
  message: string
}
