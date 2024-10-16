import { Metadata } from 'next'

import AppCartItem from '@/components/AppCartItem/AppCartItem'
import AppH1Header from '@/components/AppH1Header/AppH1Header'
import AppInfo from '@/components/AppInfo'
import { APP_CART_ITEM } from '@/data/AppCartItem/constants'
import { CartServiсe } from '@/data/Cart/CartService'

export const metadata: Metadata = {
  title: 'Shopping cart',
  description: 'Shopping cart'
}

const CartPage = async () => {
  const cartItems = await CartServiсe.getCart()

  return (
    <div className="cart-page pt-16 pb-24">
      <AppH1Header text="Shopping cart" />

      <AppInfo />

      <div className="cart-page__container mt-5">
        {cartItems.map(item => (
          <AppCartItem item={item} key={item.name} type={APP_CART_ITEM.CART} />
        ))}
      </div>
    </div>
  )
}

export default CartPage
