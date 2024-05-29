import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const currentUser = JSON.parse(request.cookies.get('currentUser')?.value || '{}');

  if (currentUser?.token && !request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }

  if (!currentUser?.token && !request.nextUrl.pathname.startsWith('/login') && !request.nextUrl.pathname.startsWith('/register')) {
    return Response.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}