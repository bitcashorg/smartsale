'use client'

import { Card } from '@/components/ui/card'
import { nanoid } from '@/lib/utils'
import { useAIState } from 'ai/rsc'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useQueryStates } from 'nuqs'
import { Resizable } from 're-resizable'
import { useCallback, useState } from 'react'
import { Chat } from '.'
import type { AI } from '../actions/create-ai'

export function ChatAnimated({ chatId }: { chatId: string }) {
  const router = useRouter()
  const [aiState, setAIState] = useAIState<typeof AI>()
  const [{ bot }, setQueryStates] = useQueryStates({
    chat: {
      defaultValue: chatId,
      parse: (value: string) => value,
    },
    bot: {
      parse: (value: string) => value as 'open' | null,
      defaultValue: null,
    },
  })
  const isBotOpen = bot === 'open'
  const [width, setWidth] = useState(500)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const toggleBot = useCallback(() => {
    const newChatId = nanoid()
    setQueryStates({
      bot: isBotOpen ? null : 'open',
      chat: newChatId,
    })
    // setAIState({ messages: [], chatId: newChatId })
    // router.refresh()
  }, [isBotOpen, setQueryStates, router, setAIState])

  return (
    <>
      <AnimatePresence>
        {isBotOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Resizable
              size={{ width, height: 'auto' }}
              onResizeStop={(e, direction, ref, d) => {
                setWidth(width + d.width)
              }}
              minWidth={400}
              maxWidth={800}
              enable={{ left: true, right: false, top: false, bottom: false }}
              handleStyles={{
                left: {
                  width: '4px',
                  left: '1px',
                  cursor: 'ew-resize',
                },
              }}
            >
              <Card variant="padded" className="w-full h-full min-h-[300px]">
                {/* <div className="h-full">{chatId}</div> */}
                <Chat id={chatId} missingKeys={[]} />
              </Card>
            </Resizable>
          </motion.div>
        )}
      </AnimatePresence>
      {!isBotOpen && (
        <motion.button
          className="fixed bottom-6 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleBot}
        >
          <MessageCircle size={24} />
        </motion.button>
      )}
    </>
  )
}
