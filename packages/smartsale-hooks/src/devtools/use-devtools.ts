'use client'
import { useNuqsDebug } from './use-nuqs-debug'
import { useVConsole } from './use-vconsole'

export * from './use-vconsole'
export * from './use-nuqs-debug'

export function useDevtools() {
  return {
    ...useVConsole(),
    ...useNuqsDebug(),
  }
}
