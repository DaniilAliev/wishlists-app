import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

import { AppMenuItemType } from '@/data/AppMenuItem/types'

const AppMenuItem: FC<{ item: AppMenuItemType }> = ({ item }) => {
  const { image: Image } = item
  return (
    <Link href={item.link}>
      <div
        className={clsx(
          'item',
          'border-solid',
          'border-2',
          item.type === 'red' ? 'border-dark-red' : 'border-border-color',
          'rounded-xl',
          'mb-3'
        )}
      >
        <div className="item__cotainer px-4 py-5 flex items-center gap-4">
          <div className="item__icon-container w-10 h-10 bg-border-color rounded-lg flex items-center justify-center">
            <Image />
          </div>
          <p>{item.text}</p>
        </div>
      </div>
    </Link>
  )
}

export default AppMenuItem
