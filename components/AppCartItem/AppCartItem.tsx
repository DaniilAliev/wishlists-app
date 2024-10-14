'use client'

import { Cart } from '@prisma/client'
import { useTranslations } from 'next-intl'
import { FC, useTransition } from 'react'

import DeleteSVG from '@/assets/images/delete.svg'
import { deleteCartItem } from '@/data/AppCartItem/actions'
import { APP_CART_ITEM } from '@/data/AppCartItem/constants'

import AppImage from '../AppImage/AppImage'
import AppLink from '../AppLink/AppLink'

type linkRenderType = {
  cart: React.ReactElement
  other: React.ReactElement
  my?: React.ReactElement
}

const AppCartItem: FC<{
  item: Cart
  type: 'my' | 'cart' | 'other'
}> = ({ item, type }) => {
  const [isPending, startTransition] = useTransition()

  const t = useTranslations('Cart')

  const linkRender: linkRenderType = {
    [APP_CART_ITEM.CART]: (
      <AppLink
        text={item.status === 'free' ? t('link') : t('booked')}
        link={item.url}
        disabled={item.status === 'booked'}
      />
    ),
    [APP_CART_ITEM.OTHER]: (
      <div className="flex justify-end">
        <AppLink text={t('gift')} link={item.url} />
      </div>
    )
  }

  const handleDeleteButton = () => {
    startTransition(async () => {
      const result = await deleteCartItem(item.id)
      if (result.success) {
        // setIsDeleted(true)
      } else {
        // Обработайте ошибку
        console.error(result.error)
      }
    })
  }

  return (
    <div className="cart-item cart-item__container h-24 mb-5 pt-2.5 pb-3 grid grid-cols-[1fr_2fr] gap-5">
      <AppImage src={item.imageUrl} />
      <div className="cart-item__info-container h-full flex">
        <div className="flex flex-col justify-between size-full">
          <p>{item.name}</p>
          <p className="text-xs text-price-color">{`${item.price} rub`}</p>
          {linkRender[type]}
        </div>
        {type !== APP_CART_ITEM.OTHER && (
          <button
            className="flex items-start pt-1"
            onClick={handleDeleteButton}
          >
            {isPending ? (
              <span className="text-gray-400">Deleting...</span>
            ) : (
              <DeleteSVG width={16} height={18} />
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default AppCartItem
