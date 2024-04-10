'use client'

import { createContextHook } from '@blockmatic/hooks-utils'
import { useSetState } from 'react-use'

export const [useGlobalStore, GlobalDataProvider] = createContextHook(() => {
  const [state, setState] = useSetState({
    errorMessage: ''
  })
  const setGlobalError = (errorMessage: string) => setState({ errorMessage })

  return { ...state, setGlobalError, setState }
}, 'You must wrap your application with <GlobalDataProvider /> in order to useGlobalStore().')
