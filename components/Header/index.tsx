'use client'

import clsx from 'clsx'
import { Jockey_One } from 'next/font/google'
import { usePathname } from 'next/navigation'

import { NAV_NAME } from '@/data/Nav/constants'
import { NAV_ROUTES } from '@/router/navRoutes'

const jockeyOne = Jockey_One({
  weight: '400',
  subsets: ['latin']
})

const Header = () => {
  const pathname = usePathname()

  const isMainPage = pathname === NAV_ROUTES[NAV_NAME.HOME]

  const classNameForH1 = clsx(
    'text-dark-red',
    isMainPage ? 'text-5xl' : 'text-3xl'
  )

  return (
    <header
      className={clsx(
        'flex',
        'items-center',
        isMainPage ? 'justify-center h-24' : 'h-16'
      )}
    >
      <h1 className={`${jockeyOne.className} ${classNameForH1}`}>WishLists</h1>
    </header>
  )
}

export default Header
