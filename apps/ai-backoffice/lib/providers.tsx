'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type PropsWithChildren, useMemo } from 'react'

export default function Providers({ children }: PropsWithChildren<{}>) {
  const queryClient = useMemo(() => new QueryClient(), [])
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
