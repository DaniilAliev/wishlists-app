import './NavItem.scss'

import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

import { MenuNavItem } from '@/data/Nav/types'

const NavItem: FC<MenuNavItem> = ({ name, Img, active, pathname }) => {
  return (
    <Link href={pathname}>
      <div
        className={clsx(
          'nav-item',
          'h-14',
          'w-16',
          'flex',
          'flex-col',
          'items-center',
          'justify-around',
          active ? 'text-black' : 'text-dark-red'
        )}
      >
        <Img
          width={24}
          height={24}
          className={clsx(active ? 'nav-item__svg--active' : 'nav-item__svg')}
        />
        <p className="text-xs">{name}</p>
      </div>
    </Link>
  )
}

export default NavItem
