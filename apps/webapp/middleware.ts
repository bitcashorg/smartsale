import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse, NextRequest } from 'next/server'

const locales = ['zh', 'en', 'es', 'ko', 'pt', 'fr']
const defaultLocale = 'en-US'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

function getLocale(request: NextRequest): string {
  const negotiator = new Negotiator({
    headers: { 'accept-language': request.headers.get('accept-language') || '' }
  })
  const languages = negotiator.languages()
  return match(languages, locales, defaultLocale)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)'
  ]
}
