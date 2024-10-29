import { type PipelineType, pipeline } from '@huggingface/transformers'

// Declare worker context
declare const self: DedicatedWorkerGlobalScope

// Use the Singleton pattern to enable lazy construction of the pipeline.
class PipelineSingleton {
  static task: PipelineType = 'feature-extraction' as const
  static model = 'thenlper/gte-small'
  static instance: any = null

  static async getInstance(
    progress_callback?: (progress: ProgressCallback) => void,
  ) {
    this.instance ??= pipeline(this.task, this.model, {
      progress_callback: progress_callback,
    })
    return this.instance
  }
}

// Listen for messages from the main thread
self.addEventListener('message', async (event: MessageEvent<WorkerMessage>) => {
  const classifier = await PipelineSingleton.getInstance(
    (x: ProgressCallback) => {
      self.postMessage(x)
    },
  )

  const output = await classifier(event.data.text)

  self.postMessage({
    status: 'complete',
    output: output,
  } satisfies WorkerResponse)
})

// Types
interface ProgressCallback {
  status: string
  progress?: number
  message?: string
}

interface ClassificationOutput {
  label: string
  score: number
}

interface WorkerMessage {
  text: string
}

interface WorkerResponse {
  status: 'complete' | 'progress'
  output?: ClassificationOutput[]
  progress?: number
  message?: string
}
