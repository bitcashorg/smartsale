import { pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.1/dist/transformers.min.js'

// import { pipeline } from '@huggingface/transformers'

self.onmessage = async (event) => {
  console.log('🍓 worker received data', event.data)
  const { text } = event.data

  const extractor = await pipeline('feature-extraction', 'Supabase/gte-small')
  // console.log('🍓 extractor', extractor)
  const rawEmbeddings = await extractor(text)
  // console.log('🍓 embeddings', embeddings)
  // Extract the cpuData object and transform to string array
  const cpuData = rawEmbeddings.ort_tensor.cpuData
  const adjustedEmbeddings = cpuData.slice(0, 384)
  const embeddings = Object.values(adjustedEmbeddings).map((value) => value)
  // console.log('🍓 serializableEmbeddings', serializableEmbeddings)

  self.postMessage({ embeddings, text })
}
