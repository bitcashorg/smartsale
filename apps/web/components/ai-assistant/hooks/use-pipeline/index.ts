import { useCallback, useEffect, useRef, useState } from 'react'

export function useEmbeddingsPipeline() {
  const [result, setResult] = useState<string | null>(null)
  const [ready, setReady] = useState<boolean | null>(null)
  const worker = useRef<Worker | null>(null)

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(new URL('./worker.ts', import.meta.url), {
        type: 'module',
      })
    }

    const onMessageReceived = (e: MessageEvent<WorkerMessage>) => {
      switch (e.data.status) {
        case 'initiate':
          setReady(false)
          break
        case 'ready':
          setReady(true)
          break
        case 'complete':
          setResult(e.data.output?.[0] ?? null)
          break
      }
    }

    worker.current.addEventListener('message', onMessageReceived)

    return () =>
      worker.current?.removeEventListener('message', onMessageReceived)
  }, [])

  const embed = useCallback((text: string) => {
    if (worker.current)
      worker.current.postMessage({ text } satisfies WorkerRequest)
  }, [])

  return { result, ready, embed }
}

interface WorkerMessage {
  status: 'initiate' | 'ready' | 'complete'
  output?: string[]
}

interface WorkerRequest {
  text: string
}
