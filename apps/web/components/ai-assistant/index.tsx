import { nanoid } from '@/lib/utils'
import dynamic from 'next/dynamic'
import { AI } from './actions/create-ai'

export function AiAssistant() {
  const id = nanoid()

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <ChatAnimated />
    </AI>
  )
}

const ChatAnimated = dynamic(
  () => import('./chat-ui/chat-animated').then((mod) => mod.ChatAnimated),
  { ssr: false },
)
