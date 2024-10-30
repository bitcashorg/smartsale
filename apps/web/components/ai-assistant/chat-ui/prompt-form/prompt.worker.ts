import { type PipelineType, pipeline } from '@huggingface/transformers'

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class EmbeddingPipeline {
  static task: PipelineType = 'feature-extraction' as const
  static model = 'Supabase/gte-small'
  static instance: any = null

  static async getInstance(progress_callback?: (progress: number) => void) {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    if (!this.instance) {
      // biome-ignore lint/complexity/noThisInStatic: <explanation>
      this.instance = await pipeline(this.task, this.model, {
        progress_callback,
      })
    }
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    return this.instance
  }
}

self.addEventListener('message', async (event) => {
  console.log('🍓 generating embeddings for : ', event.data.text)
  const embedder = await EmbeddingPipeline.getInstance((progress) => {
    self.postMessage({ status: 'loading', progress })
  })

  const embeddings = await embedder(event.data.text)

  self.postMessage({
    status: 'complete',
    embeddings,
  })
})
