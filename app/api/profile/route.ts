import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/prisma/prisma-client'

export async function GET(request: NextRequest) {
  const userName = request.headers.get('X-User-Name')

  const user = await prisma.user.findFirst({
    where: {
      name: userName as string
    }
  })

  return NextResponse.json(user)
}
