import {
  Category,
  Chatbot,
  Thread,
  User,
  createMbClient,
  everything
} from 'smartevm-genql'
import {
  CreateThreadParams,
  GetChatbotParams,
  GetHasuraClientParams,
  GetThreadParams,
  GetThreadsParams,
  SaveNewMessageParams,
  UpsertUserParams
} from './hasura.service.type'
import { validateMbEnv } from 'smartevm-env'

function getHasuraClient({ jwt, adminSecret }: GetHasuraClientParams) {
  return createMbClient({
    jwt,
    adminSecret,
    debug: process.env.DEBUG === 'true',
    env: validateMbEnv(process.env.NEXT_PUBLIC_APP_ENV)
  })
}

export async function getCategories() {
  const client = getHasuraClient({})
  const { category } = await client.query({
    category: everything
  })

  return category as Category[]
}

export async function getChatbots() {
  const client = getHasuraClient({})
  const { chatbot } = await client.query({
    chatbot: everything
  })

  return chatbot as Chatbot[]
}

export async function getThreads({
  chatbotName,
  jwt,
  userId
}: GetThreadsParams) {
  const client = getHasuraClient({ jwt })

  const { thread } = await client.query({
    thread: {
      chatbot: everything,
      messages: {
        ...everything,
        __args: {
          orderBy: [{ createdAt: 'ASC' }],
          where: { role: { _eq: 'user' } }
        }
      },
      ...everything,
      __args: {
        orderBy: [{ createdAt: 'DESC' }],
        limit: 30,
        ...(chatbotName
          ? {
              where: {
                chatbot: { name: { _eq: chatbotName } },
                ...(userId ? { userId: { _eq: userId } } : {})
              }
            }
          : userId
            ? { where: { userId: { _eq: userId } } }
            : {})
      }
    }
  })

  return thread as Thread[]
}

export async function getThread({ threadId, jwt }: GetThreadParams) {
  const client = getHasuraClient({ jwt })
  const { thread } = await client.query({
    thread: {
      chatbot: {
        ...everything,
        prompts: {
          prompt: everything
        }
      },
      messages: {
        ...everything,
        __args: {
          orderBy: [{ createdAt: 'ASC' }]
        }
      },
      ...everything,
      __args: {
        where: { threadId: { _eq: threadId } }
      }
    }
  })

  return thread[0] as Thread
}

export async function saveNewMessage({ jwt, ...object }: SaveNewMessageParams) {
  const client = getHasuraClient({ jwt })
  await client.mutation({
    insertMessageOne: {
      __args: {
        object
      },
      ...everything
    }
  })
}

export async function upsertUser({ adminSecret, ...object }: UpsertUserParams) {
  const client = getHasuraClient({ adminSecret })
  const { insertUserOne } = await client.mutation({
    insertUserOne: {
      __args: {
        object,
        onConflict: {
          constraint: 'user_email_key',
          updateColumns: ['profilePicture']
        }
      },
      ...everything
    }
  })

  return insertUserOne as User
}

export async function createThread({
  chatbotId,
  threadId,
  jwt,
  userId
}: CreateThreadParams) {
  console.log('CREATING THREAD ...', { chatbotId, threadId, jwt, userId })
  const client = getHasuraClient({ jwt })
  const { insertThreadOne } = await client.mutation({
    insertThreadOne: {
      __args: {
        object: { threadId, chatbotId, userId }
      },
      threadId: true
    }
  })
  console.log('THREAD CREATED', insertThreadOne?.threadId)
  return insertThreadOne?.threadId
}

export async function getChatbot({
  chatbotId,
  chatbotName,
  threads,
  jwt
}: GetChatbotParams) {
  if (!chatbotId && !chatbotName)
    throw new Error('You need to pass chatbotId or chatbotName')
  const client = getHasuraClient({ jwt })
  const { chatbot } = await client.query({
    chatbot: {
      __args: {
        where: { name: { _eq: chatbotName } }
      },
      ...everything,
      prompts: {
        prompt: everything
      },
      ...(threads
        ? {
            threads: {
              ...everything,
              messages: {
                ...everything,
                __args: {
                  orderBy: [{ createdAt: 'ASC' }]
                }
              }
            }
          }
        : {})
    }
  })

  return chatbot[0] as Chatbot
}
