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
      imageUrl: true,
      status: true,
      id: true
    }
  })

  console.log(cart)

  return NextResponse.json(cart)
}

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const id = Number(searchParams.get('id'))

  if (!id) {
    return NextResponse.json(
      { success: false, message: 'ID is required' },
      { status: 400 }
    )
  }

  console.log('Received ID:', id)

  try {
    await prisma.cart.delete({
      where: { id: id }
    })
    return NextResponse.json({
      success: true,
      message: 'Item deleted successfully'
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to delete item' },
      { status: 500 }
    )
  }
}
