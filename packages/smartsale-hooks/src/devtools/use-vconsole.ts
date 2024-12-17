'use client'
/**
 * This module initializes and manages a debug console (VConsole) based on URL parameters and localStorage.
 * It allows enabling/disabling the debug mode via URL and persists the setting in localStorage.
 * The debug console is only initialized when debug mode is active.
 */

import { useQueryState } from 'nuqs'
import { useEffect, useRef } from 'react'
import { useLocalStorage } from 'react-use'
import VConsole from 'vconsole'

export function useVConsole() {
  const [debugQuery, setDebugQuery] = useQueryState('debug')
  const [debugStorage, setDebugStorage] = useLocalStorage('debug', false)
  const vconsoleRef = useRef<VConsole>()

  // Sync query param with localStorage
  useEffect(() => {
    if (debugQuery === 'true' && !debugStorage) {
      setDebugStorage(true)
    } else if (debugQuery === 'false' && debugStorage) {
      setDebugStorage(false)
    }
  }, [debugQuery, debugStorage, setDebugStorage])

  // Initialize or destroy VConsole based on debug state
  useEffect(() => {
    if (debugStorage && !vconsoleRef.current) {
      vconsoleRef.current = new VConsole({ theme: 'dark' })
      console.info('vconsole initialized', vconsoleRef.current)
    } else if (!debugStorage && vconsoleRef.current) {
      vconsoleRef.current.destroy()
      vconsoleRef.current = undefined
    }
  }, [debugStorage])

  return {
    isDebugEnabled: debugStorage,
    toggleDebug: () => {
      const newValue = !debugStorage
      setDebugStorage(newValue)
      setDebugQuery(newValue ? 'true' : 'false')
    },
  }
}
