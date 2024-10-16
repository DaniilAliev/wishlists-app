import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/prisma/prisma-client'
import { getUserId } from '@/utils/getUserId'
import { Wishlist } from '@prisma/client'
const wishlistsWithItemCounts = async (wishlist: Wishlist[]) => {
  return await Promise.all(
    wishlist.map(async wishlist => {
      const itemCount = await prisma.items.count({
        where: {
          wishlistId: wishlist.id // Считаем элементы, соответствующие текущему wishlist
        }
      })

    return {
      ...wishlist,
      itemCount // Добавляем количество айтемов в объект списка желаемого
    }
  })
)}

export async function GET(request: NextRequest) {
  const userName = request.headers.get('X-User-Name')

  const userId = await getUserId(userName as string)

  const myWishlists = await prisma.wishlist.findMany({
    where: {
      UserId: userId
    }
  })
  
  const myWishlistsWithCount = await wishlistsWithItemCounts(myWishlists)

  console.log(myWishlistsWithCount)

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { friendsIds: true }
  })

  const friendsIds = user?.friendsIds || []

  const friendsWishlist = await prisma.wishlist.findMany({
    where: {
      UserId: {
        in: friendsIds
      }
    }
  })

  const friendsWishlistsWithCount = await wishlistsWithItemCounts(friendsWishlist)

  console.log(friendsWishlistsWithCount)

  return NextResponse.json({ myWishlists: myWishlistsWithCount, friendsWishlist: friendsWishlistsWithCount })
}
