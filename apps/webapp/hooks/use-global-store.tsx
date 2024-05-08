'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useSetState } from 'react-use'

const GlobalStoreContext = createContext<GlobalStoreContextValue>({
  errorMessage: '',
  setGlobalError: () => {}
})

export const useGlobalStore = () => useContext(GlobalStoreContext)

// Provider component to wrap your application and provide the context
export function GlobalStoreProvider({ children }: GlobalStoreProviderProps) {
  const [state, setState] = useSetState({
    errorMessage: ''
  })

  const setGlobalError = (errorMessage: string) => setState({ errorMessage })
  return (
    <GlobalStoreContext.Provider value={{ ...state, setGlobalError }}>
      {children}
    </GlobalStoreContext.Provider>
  )
}

type GlobalStoreContextValue = {
  errorMessage: string
  setGlobalError: (errorMessage: string) => void
}

type GlobalStoreProviderProps = {
  children: ReactNode
}
