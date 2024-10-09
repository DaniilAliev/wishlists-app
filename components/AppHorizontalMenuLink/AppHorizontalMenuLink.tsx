import Link from 'next/link'
import { FC } from 'react'

import NavigateNextSVG from '@/assets/images/NavigateNext.svg'

const AppHorizontalMenuLink: FC<{ text: string; link: string }> = ({
  text,
  link
}) => {
  return (
    <Link href={link} className="flex justify-between items-center">
      <button>{text}</button>
      <NavigateNextSVG width={7} height={12} />
    </Link>
  )
}

export default AppHorizontalMenuLink
