import './NavItem.scss'

import { FC } from 'react'

import { MenuItem } from '@/data/Nav/types'

const NavItem: FC<MenuItem> = ({ name, Img }) => {
  return (
    <div className="nav-item h-14 w-16 flex flex-col items-center justify-around text-dark-red">
      <Img width={24} height={24} className="nav-item__svg" />
      <p className="text-xs">{name}</p>
    </div>
  )
}

export default NavItem
