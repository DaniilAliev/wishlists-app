import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/prisma/prisma-client'
import { getUserId } from '@/utils/getUserId'

export async function GET(request: NextRequest) {
  const userName = request.headers.get('X-User-Name')

  const userId = await getUserId(userName as string)

  const cart = await prisma.cart.findMany({
    where: {
      UserId: userId
    },
    select: {
      name: true,
      price: true,
      url: true,
      imageUrl: true
    }
  })

  return NextResponse.json(cart)
}
