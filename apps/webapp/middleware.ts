import { NextRequest, NextResponse, userAgent } from 'next/server'
const cookiePolicy = {
  path: '/', // Accessible on the whole site
  maxAge: 60 * 60 * 24 * 7, // 1 week in seconds
  httpOnly: true, // Not accessible via JavaScript (client-side)
  secure: true, // Sent only over HTTPS
  sameSite: 'strict' as const // Strict same-site policy
}

export function middleware(request: NextRequest) {
  const { device } = userAgent(request)
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'

  const response = NextResponse.next()

  // Set a cookie for the viewport
  response.cookies.set('viewport', viewport, cookiePolicy)

  return response
}
