'use client'

import { useActions, useUIState } from 'ai/rsc'
import { useRouter, useSearchParams } from 'next/navigation'
import * as React from 'react'
import { isMobile } from 'react-device-detect'
import Textarea from 'react-textarea-autosize'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { pipeline } from '@huggingface/transformers'
import type { Message } from 'ai'
import type * as Comlink from 'comlink'
import { nanoid } from 'nanoid'
import { useCallback, useEffect, useRef } from 'react'
import { UserMessage } from '../../crypto-ui/message'
import { useEnterSubmit } from '../../hooks/use-enter-submit'
import { IconArrowElbow } from '../chat-icons'
import type { WorkerAPI } from './comlink.worker'

export function PromptForm({
  input,
  setInput,
  scrollToLatestQuestion,
}: PromptFormProps) {
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const { submitUserMessage } = useActions()
  const [, setMessages] = useUIState()
  const router = useRouter()
  const searchParams = useSearchParams()
  // const workerApi = useRef<Comlink.Remote<WorkerAPI>>()
  // const workerRef = useRef<Worker>()

  // // Create a reference to the worker object.
  // const worker = useRef<Worker | null>(null)

  // // We use the `useEffect` hook to set up the worker as soon as the `App` component is mounted.
  // useEffect(() => {
  //   if (!worker.current) {
  //     console.log('🍓 Creating new worker')
  //     // Create the worker if it does not yet exist.
  //     worker.current = new Worker(
  //       new URL('./demo.worker.js', import.meta.url),
  //       {
  //         type: 'module',
  //       },
  //     )
  //   }

  //   // Create a callback function for messages from the worker thread.
  //   const onMessageReceived = (e: MessageEvent) => {
  //     console.log('🍓 Received message from worker:', e.data)
  //     switch (e.data.status) {
  //       case 'initiate':
  //         console.log('🍓 Worker initiated')
  //         // setReady(false)
  //         break
  //       case 'ready':
  //         console.log('🍓 Worker ready')
  //         // setReady(true)
  //         break
  //       case 'complete':
  //         console.log('🍓 Worker completed:', e.data.output[0])
  //         // setResult(e.data.output[0])
  //         break
  //     }
  //   }

  //   console.log('🍓 Adding message listener to worker')
  //   // Attach the callback function as an event listener.
  //   worker.current.addEventListener('message', onMessageReceived)

  //   // Define a cleanup function for when the component is unmounted.
  //   return () => {
  //     console.log('🍓 Removing message listener from worker')
  //     worker.current?.removeEventListener('message', onMessageReceived)
  //   }
  // })

  // const classify = useCallback((text: string) => {
  //   if (worker.current) {
  //     console.log('🍓 Posting message to worker:', text)
  //     worker.current.postMessage({ text })
  //   }
  // }, [])

  const method = async () => {
    const extractor = await pipeline('feature-extraction', 'Supabase/gte-small')
    const embeddings = await extractor('lalalala')
    return embeddings
  }

  // useEffect(() => {
  //   workerRef.current = new Worker('/workers/hello.worker.js', {
  //     type: 'module',
  //   })

  //   workerRef.current.onmessage = (event) => {
  //     console.log('🍓 Worker result:', event.data)
  //   }
  //   workerRef.current.onerror = (event) => {
  //     console.error('🍓 Worker error:', event)
  //   }
  //   workerRef.current.onmessageerror = (event) => {
  //     console.error('🍓 Worker message error:', event)
  //   }

  //   console.log('🍓 worker', workerRef.current)

  //   console.log('🍓 posting message to worker')
  //   workerRef.current.postMessage('lalalala') // Example data sent to the worker

  //   return () => {
  //     workerRef.current?.terminate()
  //   }
  // }, [])

  // useEffect(() => {
  //   try {
  //     console.log('🍓 initializing worker')

  //     const worker = new Worker('/workers/comlink.worker.js', {
  //       type: 'module',
  //     })

  //     // Wrap the worker with Comlink
  //     workerApi.current = Comlink.wrap<WorkerAPI>(worker)

  //     console.log('🍓 worker initialized', workerApi.current)

  //     setTimeout(async () => {
  //       console.log('🍓 posting message to worker', workerApi.current?.getData)
  //       try {
  //         const result = await workerApi.current?.getData(
  //           'Tobi',
  //           // Comlink.proxy((progress: number) => {
  //           //   console.log(`🍓 Loading: ${progress}%`)
  //           // }),
  //         )
  //         console.log('🍓 worker result:', result)
  //       } catch (error) {
  //         console.error('🍓💀 worker error:', error)
  //       }
  //     }, 1000)

  //     return () => {
  //       console.log('🍓 terminating worker')
  //       if (workerApi.current) {
  //         workerApi.current[Comlink.releaseProxy]()
  //       }
  //       worker.terminate()
  //     }
  //   } catch (error) {
  //     console.error('🍓💀 Error initializing worker:', error)
  //   }
  // }, [])

  // focus input on desktop load
  React.useEffect(() => {
    if (!isMobile) inputRef.current?.focus()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmedInput = input.trim()
    if (!trimmedInput) return

    setInput('')

    const commandInput = trimmedInput.startsWith('/')
      ? await handleCommand(trimmedInput, router, searchParams)
      : ''

    console.log({ commandInput })

    let newMessage = trimmedInput

    if (commandInput) {
      if (typeof commandInput === 'object' && commandInput !== null) {
        const { instruction, image } = commandInput
        newMessage = `${trimmedInput}\n\nINSTRUCTION: ${instruction}`
      } else {
        newMessage = `${trimmedInput}\n\nIMPORTANT: ${commandInput}`
      }
    } else {
      newMessage = trimmedInput
    }

    try {
      setMessages((currentMessages: Message[]) => [
        ...currentMessages,
        {
          id: nanoid(),
          display: <UserMessage>{trimmedInput}</UserMessage>,
        },
      ])

      scrollToLatestQuestion()

      const responseMessage = await submitUserMessage({
        content: newMessage,
        // image,
      })

      setMessages((currentMessages: Message[]) => [
        ...currentMessages,
        responseMessage,
      ])
    } catch (error) {
      console.error('Error submitting user message:', error)
      // Add user-friendly error handling here
      setMessages((currentMessages: Message[]) => [
        ...currentMessages,
        {
          id: nanoid(),
          display: <UserMessage>{trimmedInput}</UserMessage>,
        },
        {
          id: nanoid(),
          content: "Sorry, I couldn't process that message. Please try again.",
          role: 'assistant',
        },
      ])
    }

    if (window.innerWidth < 600) {
      ;(
        e.currentTarget.querySelector('textarea') as HTMLTextAreaElement
      )?.blur()
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        classify(input)
      }}
      ref={formRef}
    >
      <Card
        variant="outline"
        className="relative flex max-h-50 w-full grow flex-col overflow-hidden"
      >
        <Textarea
          ref={inputRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message."
          spellCheck={false}
          className="min-h-[60px] w-full h-full resize-none bg-transparent pt-4 focus-within:outline-none text-xs pr-10"
        />
        <div className="absolute right-2 top-6 sm:right-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button type="submit" size="icon" disabled={input === ''}>
                  <IconArrowElbow />
                  <span className="sr-only">Send message</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Send message</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Card>
    </form>
  )
}

type CommandHandler = (
  args: string[],
  router: ReturnType<typeof useRouter>,
  searchParams: ReturnType<typeof useSearchParams>,
) => Promise<string | null>

const commandHandlers: Record<string, CommandHandler> = {}

async function handleCommand(
  command: string,
  router: ReturnType<typeof useRouter>,
  searchParams: ReturnType<typeof useSearchParams>,
): Promise<string> {
  const [cmd, ...args] = command.trim().toLowerCase().split(' ')
  const handler = commandHandlers[cmd]

  if (handler) {
    const result = await handler(args, router, searchParams)
    return result ?? ''
  }

  return `Unknown command. Available commands: ${Object.keys(commandHandlers).join(', ')}`
}

interface PromptFormProps {
  input: string
  setInput: (value: string) => void
  scrollToLatestQuestion: () => void
}
