import './index.scss'

import Cart from '@/assets/images/Cart.svg'
import Discover from '@/assets/images/Discover.svg'
import Home from '@/assets/images/Home.svg'
import Me from '@/assets/images/Me.svg'
import WishList from '@/assets/images/WishList.svg'
import { NAV_NAME } from '@/data/Nav/constants'
import { MenuItem } from '@/data/Nav/types'

import NavItem from './NavItem'

const menuItems: Array<MenuItem> = [
  {
    Img: Home,
    name: NAV_NAME.HOME
  },
  {
    Img: Discover,
    name: NAV_NAME.DISCOVER
  },
  {
    Img: WishList,
    name: NAV_NAME.WISHLIST
  },
  {
    Img: Cart,
    name: NAV_NAME.CART
  },
  {
    Img: Me,
    name: NAV_NAME.ME
  }
]

const Nav = () => {
  return (
    <nav className="nav flex items-start justify-between h-24 fixed bottom-0 left-0 right-0 ">
      {menuItems.map(item => (
        <NavItem name={item.name} Img={item.Img} key={item.name} />
      ))}
    </nav>
  )
}

export default Nav
