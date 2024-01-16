import { redirect } from 'next/navigation'

import { auth } from '@/auth'
import { Chat } from '@/components/chat'
import { getThread } from '@/services/hasura'
import { Message } from 'ai/react'
import { isTokenExpired } from 'smartevm-lib'

export default async function ChatPage({ params }: ChatPageProps) {
  const session = await auth()
  // NOTE: maybe we should use same expiration time
  const jwt = session!.user.hasuraJwt
  if (!jwt || isTokenExpired(jwt)) {
    redirect(`/sign-in`)
  }
  const thread = await getThread({
    threadId: params.threadId,
    jwt: session!.user.hasuraJwt
  })

  //TODO: handle threadId not found

  if (!session) redirect(`/sign-in?next=/${params.threadId}/${params.threadId}`)

  // NOTE: maybe this should be on actions.ts
  // format all chatbot prompts as chatgpt 'system' messages
  const chatbotSystemPrompts: Message[] = thread.chatbot.prompts.map(
    ({ prompt }) => ({
      id: prompt.promptId.toString(),
      role: 'system',
      content: prompt.content,
      createdAt: new Date()
    })
  )

  const userPreferencesPrompts: Message[] = [
    {
      id: thread.threadId,
      role: 'system',
      content:
        `Your response tone will be ${thread.chatbot.defaultTone}. ` +
        `Your response length will be ${thread.chatbot.defaultLength}. ` +
        `Your response format will be ${thread.chatbot.defaultType}. ` +
        `Your response complexity level will be ${thread.chatbot.defaultComplexity}.`,
      createdAt: new Date()
    }
  ]

  // format all user prompts and chatgpt 'assistant' messages
  const userAndAssistantMessages: Message[] = thread.messages.map(m => ({
    id: m.messageId,
    role: m.role as Message['role'],
    content: m.content,
    createdAt: m.createdAt
  }))

  // concatenate all message to pass it to chat component
  const initialMessages: Message[] = chatbotSystemPrompts
    .concat(userPreferencesPrompts)
    .concat(userAndAssistantMessages)

  // we always start a new openai chat that why id=nanoid()
  // and we pass our system prompts along with assistant and user messages from our db.
  return (
    <Chat
      initialMessages={initialMessages}
      chatbot={thread.chatbot}
      threadId={params.threadId}
    />
  )
}

export interface ChatPageProps {
  params: {
    threadId: string
    chatbot: string
  }
}
