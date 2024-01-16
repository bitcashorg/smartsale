
export interface TokenLibGetTokenParams {
  user: { role: string; account: string }
  jwtSecret: JwtSecret
  jwtExpiration?: number
}

export interface TokenLibRefreshTokenParams {
  token: string
  jwtSecret: JwtSecret
  jwtExpiration?: number
}

export interface JwtSecret {
  type: 'HS256' | 'HS238' | 'HS512' | 'RS256' | 'RS384' | 'RS512' | 'Ed25519'
  key: string
  jwk_url?: string
  claims_namespace: string
  claims_namespace_path?: string
  claims_format?: string
  audience?: string
  issuer?: string
  claims_map?: string
  allowed_skew?: string
  header?: string
}