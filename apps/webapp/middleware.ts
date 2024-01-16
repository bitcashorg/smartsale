export { auth as middleware } from './auth'

export const config = {
  matcher: ['/((?!api|browse|images|_next/static|_next/image|favicon.ico).*)']
}
