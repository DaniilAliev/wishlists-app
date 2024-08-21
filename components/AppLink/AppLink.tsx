import clsx from 'clsx';
import Link from 'next/link'
import { FC } from 'react'

const AppLink: FC<{ link: string; text: string, className: string }> = ({ link, text, className }) => {
  return (
    <Link href={link} className={clsx("text-dark-red", className)}>
      {text}
    </Link>
  )
}

export default AppLink
