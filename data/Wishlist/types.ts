import { Wishlist } from "@prisma/client"

type WishlistWithCount = Wishlist & {
  itemCount: number
}

export type WishlistPageTabsType = {
  myWishlists: WishlistWithCount[]
  friendsWishlist: WishlistWithCount[]
}
