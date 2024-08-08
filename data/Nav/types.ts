import { SVGProps } from 'react'

export type NavName = {
  HOME: 'Home'
  DISCOVER: 'Discover'
  WISHLIST: 'Wishlist'
  CART: 'Cart'
  ME: 'Me'
}

export type MenuItem = {
  Img: React.FC<SVGProps<SVGSVGElement>>
  name: string
}
