import { NextRequest, NextResponse } from 'next/server'
import { decodeJwt } from 'jose'
import { NAV_ROUTES } from './router/navRoutes'
import { NAV_NAME } from './data/Nav/constants'

export async function middleware(request: NextRequest) {
  const isAuthRoute = request.nextUrl.pathname.startsWith('/api/auth')
  const isLoginRoute =
    request.nextUrl.pathname.startsWith(NAV_ROUTES[NAV_NAME.SIGN_IN])

  if (isAuthRoute || isLoginRoute) {
    return NextResponse.next()
  }

  const authHeader = request.headers.get('Authorization')

  if (!authHeader) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = decodeJwt(token)

    console.log(decoded);

    const requestWithUser = new NextRequest(request, {
      headers: new Headers(request.headers)
    })
    requestWithUser.headers.set('X-User-Name', decoded.name as string)

    return NextResponse.next({
      request: requestWithUser
    })
  } catch (error) {
    console.error('Error decoding token:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export const config = {
  matcher: ['/api/:path*']
}