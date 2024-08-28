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
  const isSignInPage = pathname === NAV_ROUTES[NAV_NAME.SIGN_IN]
  const isSignUpPage = pathname === NAV_ROUTES[NAV_NAME.SIGN_UP]

  const pageCondition = isMainPage || isSignInPage || isSignUpPage

  const classNameForH1 = clsx(
    'text-dark-red',
    pageCondition ? 'text-5xl' : 'text-3xl'
  )

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 bg-background-color px-4',
        'flex',
        'items-center',
        'z-50',
        pageCondition ? 'justify-center h-24' : 'h-16'
      )}
    >
      <h1
        className={`${jockeyOne.className} ${classNameForH1}`}
      >
        WishLists
      </h1>
    </header>
  )
}

export default Header
