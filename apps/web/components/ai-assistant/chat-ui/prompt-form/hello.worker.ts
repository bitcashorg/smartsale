import { pipeline } from '@huggingface/transformers'

self.onmessage = async (event: MessageEvent) => {
  console.log('🍓 Message received from main thread:', event.data)
  const extractor = await pipeline('feature-extraction', 'Supabase/gte-small')
  // const embeddings = await extractor(event.data.text)
  // self.postMessage(embeddings)
}
