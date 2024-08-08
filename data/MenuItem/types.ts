import { SVGProps } from 'react'

export type MenuItemType = {
  text: string
  type?: 'red'
  image: React.FC<SVGProps<SVGSVGElement>>
}
