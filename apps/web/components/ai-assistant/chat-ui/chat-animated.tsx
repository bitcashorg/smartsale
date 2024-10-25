'use client'

import { Card } from '@/components/ui/card'
import { nanoid } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useQueryState } from 'nuqs'
import { Resizable } from 're-resizable'
import { useCallback, useState } from 'react'
import { Chat } from '.'

export function ChatAnimated() {
  const id = nanoid()
  const [bot, setBot] = useQueryState('bot')
  const isBotOpen = bot === 'open'
  const [width, setWidth] = useState(500)

  const toggleBot = useCallback(() => {
    setBot(isBotOpen ? null : 'open')
  }, [isBotOpen, setBot])

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
                <Chat id={id} missingKeys={[]} />
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
