export type GetHasuraClientParams = {
  jwt?: string
  adminSecret?: string
}

export interface HasuraServiceParams {
  jwt: string
}

// this can only be called by admin
export interface UpsertUserParams {
  email: string
  profilePicture: string
  username: string
  password: string
  adminSecret: string
}