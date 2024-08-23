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
const PageOthersWishlist = () => {
  return (
    <div className="others-wishlist-page">
      <div className="others-wishlist-page__header-container">
        <AppH1Header text="My wishlist" />
      </div>

      <div className="others-wishlist-page__container mt-5">
        {mockOptions.map(item => (
          <AppCartItem item={item} type={APP_CART_ITEM.OTHER} key={item.name} />
        ))}
      </div>
    </div>
  )
}

export default PageOthersWishlist
