import { SVGProps } from 'react'

export type AppMenuItemType = {
  text: string
  type?: 'red'
  image: React.FC<SVGProps<SVGSVGElement>>,
  link: string
}
