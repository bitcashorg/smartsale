'use client'

import { useChat, type Message, CreateMessage } from 'ai/react'

import { cn, extractBetweenMarkers } from '@/lib/utils'
import { ChatList } from '@/components/chat-list'
import { ChatPanel } from '@/components/chat-panel'
import { ChatScrollAnchor } from '@/components/chat-scroll-anchor'

import { toast } from 'react-hot-toast'
import { uniqBy } from 'lodash'
import { ChatRequestOptions } from 'ai'
import { Chatbot } from 'smartevm-genql'
import { createThread, saveNewMessage } from '@/services/hasura'
import { useRouter, useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'

export function Chat({
  initialMessages,
  className,
  chatbot,
  threadId
}: ChatProps) {
  const { data: session } = useSession()
  const { messages, append, reload, stop, isLoading, input, setInput } =
    useChat({
      // we remove previous assistant responses to get better responses thru
      // our prompting strategy
      initialMessages: initialMessages?.filter(m => m.role === 'system'),
      id: threadId,
      body: {
        id: threadId
      },
      onResponse(response) {
        if (response.status === 401) {
          toast.error(response.statusText)
        }
      },
      async onFinish(message: Message) {
        await saveNewMessage({
          role: 'assistant',
          threadId,
          content: message.content,
          jwt: session!.user.hasuraJwt
        })
      }
    })
  const router = useRouter()
  const params = useParams<{ chatbotName: string; threadId: string }>()
  const isNewChat = Boolean(!params.threadId)

  // we merge past assistant and user messages for ui only
  // we remove system prompts from ui
  const allMessages = uniqBy(
    initialMessages?.concat(messages),
    'content'
  ).filter(m => m.role !== 'system')

  // we extend append function to add our system prompts
  const appendWithMbContextPrompts = async (
    userMessage: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions
  ) => {
    if (isNewChat) {
      // if (status !== 'authenticated') throw new Error('Unauthenticated User')

      await createThread({
        threadId,
        chatbotId: chatbot.chatbotId,
        jwt: session!.user.hasuraJwt,
        userId: session!.user.id
      })
      router.push(`/${chatbot.name.trim().toLowerCase()}/${threadId}`, {
        shallow: true,
        scroll: false
      })
      router.refresh()
    }

    await saveNewMessage({
      role: 'user',
      threadId,
      content: userMessage.content,
      jwt: session!.user.hasuraJwt
    })

    return append(
      isNewChat
        ? userMessage
        : {
            ...userMessage,
            content: `First, think about the following questions and requests: [${getAllUserMessagesAsStringArray(
              allMessages
            )}].  Then answer this question: ${userMessage.content}`
          }
    )
  }

  return (
    <>
      {!isNewChat ? (
        <div className={cn('pb-[200px] pt-4 md:pt-10', className)}>
          <ChatList messages={allMessages} />
          <ChatScrollAnchor trackVisibility={isLoading} />
        </div>
      ) : null}

      <ChatPanel
        id={threadId}
        isLoading={isLoading}
        stop={stop}
        append={appendWithMbContextPrompts}
        reload={reload}
        messages={allMessages}
        input={input}
        setInput={setInput}
        chatbot={chatbot}
        placeholder={
          isNewChat
            ? `Start a new chat with ${chatbot.name}`
            : `Send new message to ${chatbot.name}`
        }
        showReload={!isNewChat}
      />
    </>
  )
}

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  chatbot: Chatbot
  threadId: string
  newThread?: boolean
}

function getAllUserMessagesAsStringArray(allMessages: Message[]) {
  const userMessages = allMessages.filter(m => m.role === 'user')
  const cleanMessages = userMessages.map(m =>
    extractBetweenMarkers(m.content, 'Then answer this question:')
  )
  return cleanMessages.join(', ')
}
