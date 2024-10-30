import * as React from 'react'

import { Card } from '@/components/ui/card'
import { useAIState, useActions, useUIState } from 'ai/rsc'
import { nanoid } from 'nanoid'

import { appConfig } from '@/lib/config'
import { cn } from '@/lib/utils'
import type { AI } from '../actions/create-ai'
import { UserMessage } from '../crypto-ui/message'
import { PromptForm } from './prompt-form'

export function ChatPanel({
  id,
  title,
  input,
  setInput,
  scrollToLatestQuestion,
}: ChatPanelProps) {
  const [messages, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()
  const workerRef = React.useRef<Worker>()

  React.useEffect(() => {
    workerRef.current = new Worker('/workers/import.worker.js', {
      type: 'module',
    })

    workerRef.current.onmessage = async (event) => {
      const { embeddings, text } = event.data
      const responseMessage = await submitUserMessage({
        content: text,
        embeddings,
      })

      setMessages((currentMessages) => [...currentMessages, responseMessage])
    }

    workerRef.current.onerror = (event) => {
      console.error('Worker error:', event)
    }

    workerRef.current.onmessageerror = (event) => {
      console.error('Worker message error:', event)
    }

    return () => {
      workerRef.current?.terminate()
    }
  }, [submitUserMessage, setMessages])

  return (
    <div
      className={cn(
        'inset-x-0 bottom-0 w-full from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in bg-card',
      )}
    >
      <div className="mx-auto sm:max-w-2xl">
        {messages.length === 0 ? (
          <div className="mb-4 grid grid-cols-2 gap-2 px-0">
            {exampleMessages.map((example) => (
              <Card
                variant="outline"
                key={example.heading}
                className={'cursor-pointer'}
                onClick={() => {
                  setMessages((currentMessages) => [
                    ...currentMessages,
                    {
                      id: nanoid(),
                      display: <UserMessage>{example.message}</UserMessage>,
                    },
                  ])

                  workerRef.current?.postMessage({ text: example.message })
                }}
              >
                <div className="text-xs text-white font-semibold">
                  {example.heading}
                </div>
                <div className="text-xs ">{example.subheading}</div>
              </Card>
            ))}
          </div>
        ) : null}

        <div className="bottom-0">
          <PromptForm
            input={input}
            setInput={setInput}
            scrollToLatestQuestion={scrollToLatestQuestion}
          />
          <div className="text-neutral-light text-[10px] text-center py-1">
            Experimental: Not financial advice
          </div>
        </div>
      </div>
    </div>
  )
}

export interface ChatPanelProps {
  id?: string
  title?: string
  input: string
  setInput: (value: string) => void
  scrollToLatestQuestion: () => void
}

const exampleMessages = [
  {
    heading: 'Registration',
    subheading: 'step by step',
    message: 'Guide me through the registration process step by step',
  },
  {
    heading: 'BL Tokens',
    subheading: 'describe them',
    message: 'Describe what BL Tokens are and tokenomics',
  },

  {
    heading: 'News',
    subheading: 'about Bitlauncher',
    message: 'What are the latest news about Bitlauncher?',
  },

  // {
  //   heading: 'Variance swap',
  //   subheading: 'payoff structure?',
  //   message: 'What is the payoff of a variance swap?',
  // },
  // {
  //   heading: 'Arbitrage',
  //   subheading: 'in power perpetuals',
  //   message: 'How does arbitrage work in power perpetuals?',
  // },

  {
    heading: 'Presale',
    subheading: 'mechanics',
    message: 'What are the mechanics of the presale?',
  },
  {
    heading: 'Auctions',
    subheading: 'how they work',
    message: 'How do auctions work on bitlauncher?',
  },
  // {
  //   heading: 'Technical Analysis',
  //   subheading: 'on current pair',
  //   message: '/ta',
  // },
  // {
  //   heading: 'What is the price of',
  //   subheading: '$DOGE right now?',
  //   message: 'What is the price of $DOGE right now?',
  // },
  {
    heading: 'Bitcash',
    subheading: 'wallet',
    message: 'How to use the Bitcash wallet?',
  },
  // {
  //   heading: 'What are some',
  //   subheading: 'recent events about $DOGE?',
  //   message: 'What are some recent events about $DOGE?',
  // },
]
