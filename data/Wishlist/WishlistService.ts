import { Wishlist } from '@prisma/client'

import { BaseService } from '@/utils/BaseService'
import { WishlistPageTabsType } from './types'

class WishlistServiсeClass extends BaseService {
  async getWishlists() {
    const { data } = await this.httpClient.get<WishlistPageTabsType>(
      this.getPath('')
    )
    return data
  }

  // async deleteCart(id: number) {
  //   const { data } = await this.httpClient.delete(this.getPath(''), {
  //     params: { id }
  //   })

  //   return data
  // }
}

export const WishlistServiсe = new WishlistServiсeClass('/wishlist')
