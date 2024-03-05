import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Address } from 'viem'
import BN from 'bn.js'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

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

export function formatAddress(address: Address) {
  // Ensure the address is a string and has a length of at least 8 characters
  if (typeof address === 'string' && address.length >= 8) {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  } else {
    // Return the original address if it's too short or not a string
    return address
  }
}

// Function to convert token amount to its smallest unit, considering the token's decimals
export function toSmallestUnit(value: string | number, decimals: number = 18) {
  // Split the value into integer and fractional parts
  const parts = value.toString().split('.')
  const integerPart = parts[0]
  const fractionalPart = parts[1] || '0'

  // Create a BN instance for the base (10)
  const ten = new BN(10)
  // Create a BN instance for the number of decimals the token uses
  const base = ten.pow(new BN(decimals))

  // Scale the integer part by the base
  let amountInBaseUnit = new BN(integerPart).mul(base)

  // If there's a fractional part, scale it accordingly and add it to the amount in base unit
  if (fractionalPart !== '0') {
    const fractionalBase = ten.pow(new BN(fractionalPart.length))
    const scaledFractionalPart = new BN(fractionalPart)
      .mul(base)
      .div(fractionalBase)
    amountInBaseUnit = amountInBaseUnit.add(scaledFractionalPart)
  }

  return BigInt(amountInBaseUnit.toString())
}

export function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

export function fromEntries(data: FormData) {
  const object = Object.fromEntries(data)
  const result: Record<string, string> = {}
  Object.keys(object).forEach(key => {
    result[key] = object[key].toString()
  })
  return result
}
