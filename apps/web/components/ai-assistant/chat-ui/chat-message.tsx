// Inspired by Chatbot-UI and modified to fit the needs of this project
// @see https://github.com/mckaywrigley/chatbot-ui/blob/main/components/Chat/ChatMessage.tsx

import type { Message } from 'ai'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

import { IconBitlauncherSmall } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import { IconUser } from './chat-icons'
import { ChatMessageActions } from './chat-message-actions'
import { CodeBlock } from './codeblock'
import { MemoizedReactMarkdown } from './markdown'

export interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
  console.log('🍓 chat message', message)
  return (
    <div className={cn('group relative mb-4 flex items-start ')} {...props}>
      <div
        className={cn(
          'flex size-8 shrink-0 select-none items-center justify-center rounded-md border shadow ',
          message.role === 'user'
            ? 'bg-background'
            : 'bg-primary text-primary-foreground',
        )}
      >
        {message.role === 'user' ? <IconUser /> : <IconBitlauncherSmall />}
      </div>
      <div className="flex-1 px-1 ml-4 space-y-2 overflow-hidden">
        <MemoizedReactMarkdown
          className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 text-xs"
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            p({ children }) {
              return <p className="mb-2 last:mb-0">{children}</p>
            },
            code({ node, className, children, ...props }) {
              if (Array.isArray(children) && children?.length > 0) {
                if (children[0] === '▍') {
                  return (
                    <span className="mt-1 cursor-default animate-pulse">▍</span>
                  )
                }

                children[0] = (children[0] as string).replace('`▍`', '▍')
              }

              const match = /language-(\w+)/.exec(className || '')

              // if (inline) {
              //   return (
              //     <code className={className} {...props}>
              //       {children}
              //     </code>
              //   )
              // }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={match?.[1] || ''}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              )
            },
          }}
        >
          {message.content}
        </MemoizedReactMarkdown>
        <ChatMessageActions message={message} />
      </div>
    </div>
  )
}
