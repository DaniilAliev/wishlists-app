import { SVGProps } from 'react'

export type NavName = {
  HOME: 'home'
  DISCOVER: 'discover'
  WISHLIST: 'wishlist'
  CART: 'cart'
  ME: 'me'
}

export type MenuNavItem = {
  Img: React.FC<SVGProps<SVGSVGElement>>
  name: string
  active: boolean
  pathname: string
}
