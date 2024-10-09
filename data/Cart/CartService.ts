import { BaseService } from '@/utils/BaseService'
import { Cart } from '@prisma/client'
import { cookies } from 'next/headers'

const cookie = cookies().get('authjs.session-token')

class CartServiсeClass extends BaseService {
  async getCart() {    
    const headers = {
      Authorization: `Bearer ${cookie?.value}`
    }

    const { data } = await this.httpClient.get<Array<Cart>>(this.getPath(''), { headers })
    return data
  }
}

export const CartServiсe = new CartServiсeClass('/cart')
