import * as Comlink from 'comlink'

// Wrap the existing simulation code in a Comlink API while keeping original console logs\
console.log('🍓 defining api')
const api = {
  generateEmbeddings: async (
    text: string,
    progressCallback: (progress: number) => void,
  ) => {
    console.log('🍓 generating embeddings for : ', text)

    // Simulate loading progress
    for (let i = 0; i <= 100; i += 20) {
      await new Promise((resolve) => setTimeout(resolve, 100))
      self.postMessage({ status: 'loading', progress: i })
      progressCallback(i)
    }

    // Return the same text as embeddings after delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const result = {
      status: 'complete',
      embeddings: text,
    }

    self.postMessage(result)
    return result
  },
}

console.log('🍓 exposing api')
Comlink.expose(api)

setTimeout(() => {
  alert('🍓 api exposed')
}, 1000)

// import { type PipelineType, pipeline } from '@huggingface/transformers'

// // biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
// class EmbeddingPipeline {
//   static task: PipelineType = 'feature-extraction' as const
//   static model = 'thenlper/gte-small'
//   static instance: any = null

//   static async getInstance(progress_callback?: (progress: number) => void) {
//     // biome-ignore lint/complexity/noThisInStatic: <explanation>
//     if (!this.instance) {
//       // biome-ignore lint/complexity/noThisInStatic: <explanation>
//       this.instance = await pipeline(this.task, this.model, {
//         progress_callback,
//       })
//     }
//     // biome-ignore lint/complexity/noThisInStatic: <explanation>
//     return this.instance
//   }
// }

// self.addEventListener('message', async (event) => {
//   console.log('🍓 generating embeddings for : ', event.data.text)
//   const embedder = await EmbeddingPipeline.getInstance((progress) => {
//     self.postMessage({ status: 'loading', progress })
//   })

//   const embeddings = await embedder(event.data.text)

//   self.postMessage({
//     status: 'complete',
//     embeddings,
//   })
// })
