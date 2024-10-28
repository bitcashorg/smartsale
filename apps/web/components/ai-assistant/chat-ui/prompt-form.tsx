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
import type { Message } from 'ai'
import { nanoid } from 'nanoid'
import { UserMessage } from '../crypto-ui/message'
import { useEnterSubmit } from '../hooks/use-enter-submit'
import { IconArrowElbow } from './chat-icons'

interface PromptFormProps {
  input: string
  setInput: (value: string) => void
  scrollToLatestQuestion: () => void
}

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

    // if (window.innerWidth < 600) {
    //   ;(
    //     e.currentTarget.querySelector('textarea') as HTMLTextAreaElement
    //   )?.blur()
    // }
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
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
