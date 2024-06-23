import { generateText } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'

const openai = createOpenAI({
  compatibility: 'strict',
  apiKey: process.env.OPENAI_API_KEY
})

export async function openAiTranslate(content: string, locale: string) {
  // console.log('openAiTranslate', locale, content)
  let text, finishReason, usage
  try {
    const response = await generateText({
      model: openai('gpt-4o'),
      prompt: `Translate the following json value from English to ${locale} and RETURN ONLY THE TRANSLATED PLAIN VALID JSON without formatting or scaping chars for whitespace, VALID JSON ONLY, Validate JSON before replying,only valid flat json responses. INPUT : ${content}`
    })
    text = response.text
    finishReason = response.finishReason
    usage = response.usage
  } catch (error) {
    console.error('Error generating text:', error)
  }

  if (text) {
    try {
      const parsedText = JSON.parse(text)
    } catch (parseError) {
      console.log('==========================================')
      console.log('Failed to parse translation:', parseError)
      console.log(locale, { text, finishReason, usage })
    }
  }

  return { translation: text, finishReason, usage }
}
