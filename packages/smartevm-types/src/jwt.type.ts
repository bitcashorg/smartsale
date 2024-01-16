import { HasuraClaims } from './hasura.type'
import { type JWTPayload } from 'jose';

export interface JwtUser {
  role: string
  account: string
  sessionId: string
}

export interface JwtData extends JWTPayload {
  user: JwtUser
  'https://hasura.io/jwt/claims': HasuraClaims
}
