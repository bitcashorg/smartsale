import 'server-only'

import { experimental_taintUniqueValue } from 'react'

// TODO: solve this process env var issue and use a new token
export const token =
  process.env.SANITY_API_READ_TOKEN ||
  'sk7ZTFH9wFGkk3g82SgLehGuphXDRtXVGih2dXhRIOQQSLbUbyE01Ww7m3tAD1zTwGFA3daV2uA0vk8HnEjRj1tKcbJjazSGkqMECdYcItgmnauwFteFYIXqFWNb8YH404xfKZNIcP8KpXRnLt2W1QVYPBYnHVfbKWF2LeyB7JOseuv76Zj8'

// console.log('token.ts SANITY_API_READ_TOKEN', process.env.SANITY_API_READ_TOKEN)

if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN')
}

experimental_taintUniqueValue(
  'Do not pass the sanity API read token to the client.',
  process,
  token
)
