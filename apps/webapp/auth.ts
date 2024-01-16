import NextAuth, { type DefaultSession } from 'next-auth'
import Google from 'next-auth/providers/google'
import { getToken, validateJwtSecret } from 'smartevm-lib'
import { upsertUser } from './services/hasura'
import { nanoid } from './lib/utils'

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    signIn: async ({ profile }) => {
      if (!profile) return false
      return true
    },
    jwt: async ({ token, profile }) => {
      // console.log('========== >jwt callback', { token, profile })

      // profile is passed on the first call on login
      if (profile) {
        const adminSecret = process.env.HASURA_GRAPHQL_ADMIN_SECRET
        if (!adminSecret) throw new Error('Admin Secret not found')
        const jwtSecret = process.env.HASURA_GRAPHQL_JWT_SECRET
        if (!adminSecret) throw new Error('JWT Secret not found')

        const dbUser = await upsertUser({
          email: profile.email!,
          profilePicture: profile.picture || '',
          username: profile.name?.replace(/\s/g, '_') || nanoid(),
          password: nanoid(),
          adminSecret: adminSecret as string
        })

        // console.log('dbuser', dbUser)
        if (!dbUser) throw new Error('Login Error')

        const hasuraJwt = await getToken({
          user: {
            account: dbUser.userId,
            role: 'user'
          },
          jwtSecret: validateJwtSecret(jwtSecret)
        })

        if (!hasuraJwt) throw new Error('Login Error')

        token.hasuraJwt = hasuraJwt
        token.userId = dbUser.userId
      }

      return token
    },
    session: async ({ session, token }) => {
      // console.log('session callback', token)

      session.user = {
        id: token.userId as string,
        image: token.picture as string,
        hasuraJwt: token.hasuraJwt as string
      }

      return session
    },
    authorized({ auth }) {
      return !!auth?.user // this ensures there is a logged in user for -every- request
    }
  },
  pages: {
    signIn: '/sign-in' // overrides the next-auth default signin page https://authjs.dev/guides/basics/pages
  }
})

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      image: string
      hasuraJwt: string
    } & DefaultSession['user']
  }
}
