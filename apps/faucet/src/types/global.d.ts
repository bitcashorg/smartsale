declare global {
  interface Window {
    ethereum?: {
      isMetaMask?: boolean
      request: <T = unknown>({
        method,
        params,
      }: {
        method: string
        params?: unknown[]
      }) => Promise<T>
      on: (event: string, callback: (...args: unknown[]) => void) => void
      removeListener: (
        event: string,
        callback: (...args: unknown[]) => void,
      ) => void
      selectedAddress: string | null
      chainId: string | null
      networkVersion: string | null
      _metamask: {
        isUnlocked: () => Promise<boolean>
      }
    }
  }
}
