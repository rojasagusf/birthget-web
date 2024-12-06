import { type NextRequest, NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export function redirectMiddleware (request: NextRequest): NextResponse {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/landing', request.url))
  }
  if (request.nextUrl.pathname === '/dashboard') {
    return NextResponse.redirect(new URL('/dashboard/overview', request.url))
  }

  return NextResponse.next()
}

const authMiddleware = withAuth(
  (req) => redirectMiddleware(req),
  {
    callbacks: {
      async authorized ({ token }) {
        return !(token === null)
      }
    }
  }
)

export default authMiddleware

export const config = {
  matcher: ['/', '/dashboard/:path*']
}
