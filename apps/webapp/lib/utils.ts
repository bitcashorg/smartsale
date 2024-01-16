import { clsx, type ClassValue } from 'clsx'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7
) // 7-character random string

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)

  if (!res.ok) {
    const json = await res.json()
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number
      }
      error.status = res.status
      throw error
    } else {
      throw new Error('An unexpected error occurred')
    }
  }

  return res.json()
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export function extractBetweenMarkers(
  str: string,
  startMarker: string,
  endMarker?: string // endMarker is now optional
): string {
  let startIndex = str.indexOf(startMarker)
  let endIndex = endMarker
    ? str.indexOf(endMarker, startIndex + startMarker.length)
    : str.length

  if (startIndex === -1) {
    // Start marker not found, return the whole string
    return str
  }

  if (endMarker && (endIndex === -1 || startIndex >= endIndex)) {
    // End marker is provided but not found or in the wrong order
    return ''
  }

  // Adjust the startIndex to get the text after the startMarker
  startIndex += startMarker.length

  return str.substring(startIndex, endIndex).trim()
}
