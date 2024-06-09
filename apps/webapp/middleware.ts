import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse, NextRequest } from 'next/server'
import { defaultLocale, locales } from './dictionaries/locales'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasLang = locales.some(
    lang => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  )

  console.log('🍓 has lang', pathname, hasLang)

  if (hasLang) return NextResponse.next()

  const lang = getLocale(request)
  request.nextUrl.pathname = `/${lang}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

function getLocale(request: NextRequest): string {
  const cookieLang = request.cookies.get('lang')
  if (cookieLang) return cookieLang.value

  const negotiator = new Negotiator({
    headers: { 'accept-language': request.headers.get('accept-language') || '' }
  })
  const languages = negotiator.languages()
  return match(languages, locales, defaultLocale)
}
export const config = {
  matcher: [
    '/((?!_next|_nextjs|images|api|favicon.ico|__nextjs_original-stack-frame).*)'
  ]
}
