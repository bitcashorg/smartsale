import { Separator } from '@/components/ui/separator'
import { Thread } from 'smartevm-genql'
import Link from 'next/link'

export default function ThreadList({ threads }: { threads: Thread[] }) {
  return (
    <ul className="w-full">
      {threads.map((thread, key) => (
        <li key={key}>
          <Link
            href={`/${thread.chatbot.name.trim().toLowerCase()}/${
              thread.threadId
            }`}
            className="flex items-center h-12"
            shallow={true}
          >
            {thread.messages
              .filter(m => m.role === 'user')[0]
              ?.content.substring(0, 100) || 'wat'}
          </Link>

          <Separator />
        </li>
      ))}
    </ul>
  )
}
