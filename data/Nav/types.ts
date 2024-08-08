import { SVGProps } from 'react'

export type NavName = {
  HOME: 'Home'
  DISCOVER: 'Discover'
  WISHLIST: 'Wishlist'
  CART: 'Cart'
  ME: 'Me'
}

export type MenuNavItem = {
  Img: React.FC<SVGProps<SVGSVGElement>>
  name: string
  active: boolean
}
