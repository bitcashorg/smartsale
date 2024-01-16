import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
import { botNames } from '@/lib/bots-names'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen({
  setInput,
  bot
}: Pick<UseChatHelpers, 'setInput'> & { bot: string }) {
  return (
    <div className="max-w-2xl px-4 mx-auto">
      <div className="p-8 border rounded-lg bg-background">
        <h1 className="smartevm-2 text-lg font-semibold">
          Welcome to smartevm AI Chatbots! I{`'`}m {botNames.get(bot)}.
        </h1>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation with me here or try the following
          examples:
        </p>
        <div className="flex flex-col items-start mt-4 space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
