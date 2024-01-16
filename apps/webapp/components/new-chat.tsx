'use client'

import { ChatPanel } from './chat-panel'
import { useChat, type Message, CreateMessage } from 'ai/react'
import toast from 'react-hot-toast'
import { ChatRequestOptions } from 'ai'
import { Chatbot } from 'smartevm-genql'
import { useRouter } from 'next/navigation'
import { createThread, saveNewMessage } from '@/services/hasura'
import { useSession } from 'next-auth/react'

export default function NewChat({
  id,
  initialMessages,
  chatbot
}: NewChatProps) {
  const router = useRouter()
  const { data: session } = useSession()
  const { messages, reload, stop, input, setInput, append } = useChat({
    initialMessages,
    id,
    body: {
      id
    },
    onResponse(response) {
      if (response.status === 401) {
        toast.error(response.statusText)
      }
    },
    onFinish() {
      console.log('NEW CHAT FINISHED FIRST, NOT GOOD')
    }
  })

  const appendToNewChat = async (
    userMessage: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions
  ) => {
    const threadId = await createThread({
      threadId: id,
      chatbotId: chatbot.chatbotId,
      jwt: session!.user.hasuraJwt,
      userId: session!.user.id
    })

    // we do not await to make transition to chat url faster
    append(userMessage)
    saveNewMessage({
      role: 'user',
      threadId,
      content: userMessage.content,
      jwt: session!.user.hasuraJwt
    })

    router.push(`/${chatbot.name.trim().toLowerCase()}/${threadId}`, {
      shallow: true,
      scroll: false
    })
    router.refresh()
    return null
  }

  return (
    <ChatPanel
      id={id}
      isLoading={false}
      stop={stop}
      append={appendToNewChat}
      reload={reload}
      messages={messages}
      input={input}
      setInput={setInput}
      chatbot={chatbot}
      showReload={false}
      placeholder={`Start a new chat with ${chatbot.name}`}
    />
  )
}

export interface NewChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id: string
  chatbot: Chatbot
}
