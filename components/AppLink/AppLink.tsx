import Link from 'next/link'
import { FC } from 'react'

const AppLink: FC<{ link: string; text: string }> = ({ link, text }) => {
  return (
    <Link href={link} className="text-dark-red">
      {text}
    </Link>
  )
}

export default AppLink
