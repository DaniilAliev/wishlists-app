'use client'

import './index.scss'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import Cart from '@/assets/images/Cart.svg'
import Discover from '@/assets/images/Discover.svg'
import Home from '@/assets/images/Home.svg'
import Me from '@/assets/images/Me.svg'
import WishList from '@/assets/images/WishList.svg'
import { NAV_NAME } from '@/data/Nav/constants'
import { NAV_ROUTES } from '@/router/navRoutes'

import NavItem from './NavItem'

const Nav = () => {
  const pathname = usePathname()

  const t = useTranslations('Nav')

  const menuItems = [
    {
      Img: Home,
      name: t('home'),
      pathname: NAV_ROUTES[NAV_NAME.HOME]
    },
    {
      Img: Discover,
      name: t('discover'),
      pathname: NAV_ROUTES[NAV_NAME.DISCOVER]
    },
    {
      Img: WishList,
      name: t('wishlist'),
      pathname: NAV_ROUTES[NAV_NAME.WISHLIST]
    },
    {
      Img: Cart,
      name: t('cart'),
      pathname: NAV_ROUTES[NAV_NAME.CART]
    },
    {
      Img: Me,
      name: t('me'),
      pathname: NAV_ROUTES[NAV_NAME.ME]
    }
  ]

  const menuItemsRoutes = menuItems.flatMap((item) => item.pathname)
 
  return (
    <>
      {menuItemsRoutes.includes(pathname) && (
        <nav className="nav flex items-start justify-between h-24 fixed bottom-0 left-0 right-0 bg-background-color">
          {menuItems.map(item => (
            <NavItem
              name={item.name}
              Img={item.Img}
              key={item.name}
              active={pathname === item.pathname}
              pathname={item.pathname}
            />
          ))}
        </nav>
      )}
    </>
  )
}

export default Nav
