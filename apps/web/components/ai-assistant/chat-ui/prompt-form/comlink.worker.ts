import * as Comlink from 'comlink'

const api: WorkerAPI = {
  async getData(name: string): Promise<string> {
    return `Hello ${name} from Comlink worker!`
  },
}

export interface WorkerAPI {
  getData: (name: string) => Promise<string>
}

Comlink.expose(api)
