export type GetHasuraClientParams = {
  jwt?: string
  adminSecret?: string
}

export interface HasuraServiceParams {
  jwt: string
}

export interface GetThreadsParams extends HasuraServiceParams {
  chatbotName?: string
  userId: string
}

export interface GetThreadParams extends HasuraServiceParams {
  threadId: string
}

export interface SaveNewMessageParams extends HasuraServiceParams {
  content: string
  role: 'user' | 'assistant'
  threadId: string
}

// this can only be called by admin
export interface UpsertUserParams {
  email: string
  profilePicture: string
  username: string
  password: string
  adminSecret: string
}

export interface CreateThreadParams extends HasuraServiceParams {
  chatbotId: number
  threadId: string
  userId: string
}

export interface GetChatbotParams extends HasuraServiceParams {
  chatbotId?: number
  chatbotName?: string
  threads?: boolean
}
