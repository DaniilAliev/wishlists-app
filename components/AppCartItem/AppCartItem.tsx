import { useTranslations } from 'next-intl'
import { FC } from 'react'

import DeleteSVG from '@/assets/images/delete.svg'
import { AppCartItemType } from '@/data/AppCartItem/types'

import AppImage from '../AppImage/AppImage'
import AppLink from '../AppLink/AppLink'
import { APP_CART_ITEM } from '@/data/AppCartItem/constants'

const AppCartItem: FC<{ item: AppCartItemType, type: 'my' | 'cart' | 'other' }> = ({ item, type }) => {
  const t = useTranslations('Cart')

  return (
    <div className="cart-item cart-item__container h-24 mb-5 pt-2.5 pb-3 grid grid-cols-[1fr_2fr] gap-5">
      <AppImage src={item.imageSrc} />
      <div className="cart-item__info-container h-full flex">
        <div className="flex flex-col justify-between size-full">
          <p>{item.name}</p>
          <p className="text-xs text-price-color">{item.price}</p>
          {type === APP_CART_ITEM.CART && (
            <AppLink text={t('link')} link={item.link} />
          )}
          {type === APP_CART_ITEM.OTHER && (
            <div className='flex justify-end'>
              <AppLink text={t('gift')} link={item.link} />
            </div>
          )}
        </div>
        {type !== APP_CART_ITEM.OTHER && (
          <button className="flex items-start pt-1">
            <DeleteSVG width={16} height={18} />
          </button>
        )}
      </div>
    </div>
  )
}

export default AppCartItem
