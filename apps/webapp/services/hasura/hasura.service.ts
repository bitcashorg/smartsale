import {
  User,
  createMbClient, everything
} from 'smartevm-genql'
import {
  GetHasuraClientParams, UpsertUserParams

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
