import { Metadata } from 'next'

import AppCartItem from '@/components/AppCartItem/AppCartItem'
import AppH1Header from '@/components/AppH1Header/AppH1Header'
import { APP_CART_ITEM } from '@/data/AppCartItem/constants'
import { CartServiсe } from '@/data/Cart/CartService'

export const metadata: Metadata = {
  title: 'Shopping cart',
  description: 'Shopping cart'
}

const mockOptions = [
  {
    name: 'The Book of Wisdom',
    price: 1000,
    imageUrl: '',
    url: ''
  },
  {
    name: 'PlayStation 5',
    price: 50_000,
    imageUrl: '',
    url: ''
  }
]

const CartPage = async () => {
  const cartItems = await CartServiсe.getCart()

  return (
    <div className="cart-page pt-16">
      <AppH1Header text="Shopping cart" />

      <div className="cart-page__container mt-5">
        {cartItems.map(item => (
          <AppCartItem item={item} key={item.name} type={APP_CART_ITEM.CART} />
        ))}
      </div>
    </div>
  )
}

export default CartPage
