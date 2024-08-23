import AppH1Header from '@/components/AppH1Header/AppH1Header'
import React from 'react'
import PlusSvg from '@/assets/images/Plus.svg'
import AppCartItem from '@/components/AppCartItem/AppCartItem'
import { APP_CART_ITEM } from '@/data/AppCartItem/constants'

const mockOptions = [
  {
    name: 'The Book of Wisdom',
    price: 1000,
    imageSrc: '',
    link: ''
  },
  {
    name: 'PlayStation 5',
    price: 50_000,
    imageSrc: '',
    link: ''
  }
]
const PageMyWishlist = () => {
  return (
    <div className="my-wishlist-page">
      <div className="my-wishlist-page__header-container mt-4 flex items-center justify-between">
        <AppH1Header text="My wishlist" />
        <button className="pt-2">
          <PlusSvg width={20} height={20} />
        </button>
      </div>

      <div className="my-wishlist-page__container mt-5">
        {mockOptions.map(item => (
          <AppCartItem item={item} type={APP_CART_ITEM.MY} key={item.name} />
        ))}
      </div>
    </div>
  )
}

export default PageMyWishlist
