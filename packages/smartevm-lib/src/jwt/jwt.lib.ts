
import { JwtData } from 'smartevm-types';
import { generateHasuraClaims } from '../hasura';
import { JwtSecret, TokenLibGetTokenParams, TokenLibRefreshTokenParams } from './jwt.type';
import { SignJWT, jwtVerify, decodeJwt} from 'jose';
import { getErrorMessage } from '../error';

export async function sign(payload: JwtData, secret: string): Promise<string> {
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60 * 60; // one hour

    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setExpirationTime(exp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(secret));
}

export async function verify(token: string, secret: string): Promise<JwtData> {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    // run some checks on the returned payload, perhaps you expect some specific values

    // if its all good, return it, or perhaps just return a boolean
    return payload as unknown as JwtData;
}

export const decodeToken = async ({ token, secret }: { token: string; secret: string }) => {
  if (!token) throw new Error('Invalid token')

  try {
    const decodedToken = await verify(token.replace('Bearer ', ''), secret)
    console.log('decodedToken - verify Token', decodedToken)
    return decodedToken
  } catch (error) {
    console.error(error)
    throw new Error('Invalid token')
  }
}

// export const refreshToken = async ({ token, jwtSecret, jwtExpiration = 86400 }: TokenLibRefreshTokenParams) => {
//   if (!token) return new Error('Invalid token')

//   try {
//     // throws error if token is invalid
//     const decodedToken = await decodeToken({ token: token.replace('Bearer ', ''), secret: jwtSecret })
//     return getToken({ user: decodedToken.user, jwtSecret, jwtExpiration })
//   } catch (error) {
//     console.error(error)
//     throw new Error('Invalid token')
//   }
// }

export const getToken = async ({ user, jwtSecret, jwtExpiration = 86400 }: TokenLibGetTokenParams) => {
  try {
    const claims = await generateHasuraClaims(user)

    return sign(
      {
        'https://hasura.io/jwt/claims': claims,
        user: {
          role: user.role,
          account: user.account,
          sessionId: 'unset',
        },
      },
      jwtSecret.key
    )
  } catch (error) {
    console.log('getTokenSession Error', error)
    throw new Error('Cannot generate token')
  }
}

export function validateJwtSecret(envVariable: string | undefined): JwtSecret {
  if (!envVariable) {
    throw new Error('AUTH_SECRET is not defined');
  }

  let secret: JwtSecret;
  try {
    secret = JSON.parse(envVariable);
  } catch (error) {
    throw new Error('AUTH_SECRET is not a valid JSON');
  }

  // Add more specific validations as needed
  if (typeof secret.type !== 'string' || !['HS256', 'HS238', 'HS512', 'RS256', 'RS384', 'RS512', 'Ed25519'].includes(secret.type)) {
    throw new Error('Invalid type in AUTH_SECRET');
  }
  if (typeof secret.key !== 'string' || secret.key.length === 0) {
    throw new Error('Invalid or missing key in AUTH_SECRET');
  }
  if (secret.claims_namespace && (typeof secret.claims_namespace !== 'string' || secret.claims_namespace.length === 0)) {
    throw new Error('Invalid or missing claims_namespace in AUTH_SECRET');
  }

  return secret;
}


export function isTokenExpired(token:string) {
  try {
    const decodedToken = decodeJwt(token);

    if (!decodedToken.exp)  throw new Error('Token does not have an expiration time.')

    const currentUnixTime = Math.floor(Date.now() / 1000)
    return decodedToken.exp < currentUnixTime;
  } catch (error) {
    console.error('Error checking token expiration:', getErrorMessage(error));
    return true; // or handle the error as appropriate
  }
}