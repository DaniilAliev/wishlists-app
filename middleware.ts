import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { decode } from 'next-auth/jwt'
import jwt from 'jsonwebtoken'
import { decodeJwt } from 'jose'


export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
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
