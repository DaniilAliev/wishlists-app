import { Cart } from '@prisma/client'

import { BaseService } from '@/utils/BaseService'

class CartServiсeClass extends BaseService {
  async getCart() {
    const { data } = await this.httpClient.get<Array<Cart>>(this.getPath(''))
    return data
  }

  async deleteCart(id: number) {
    const { data } = await this.httpClient.delete(this.getPath(''), {
      params: { id }
    })

    return data
  }
}

export const CartServiсe = new CartServiсeClass('/cart')
