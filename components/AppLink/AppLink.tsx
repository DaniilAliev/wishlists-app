import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

const AppLink: FC<{
  link: string
  text: string
  className?: string
  disabled?: boolean
}> = ({ link, text, className, disabled }) => {
  return (
    <>
      {disabled ? (
        <span className="text-gray-400">{text}</span>
      ) : (
        <Link href={link} className={clsx('text-dark-red', className)}>
          {text}
        </Link>
      )}
    </>
  )
}

export default AppLink
