'use client'

import { NAV_NAME } from '@/data/Nav/constants'
import { NAV_ROUTES } from '@/router/navRoutes'
import { useRouter } from 'next/navigation'
import { FC, ReactElement, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import cookie from 'js-cookie'

const AuthGuard: FC<{ children: ReactElement | ReactElement[] }> = ({
  children
}) => {
  // const { data: session, status } = useSession()

  // console.log(status);
  

  const router = useRouter()

  const token = cookie.get('authjs.session-token')

  useEffect(() => {
    if (!token) {
      router.push(NAV_ROUTES[NAV_NAME.SIGN_IN])
    }
  }, [token])

  return <>{children}</>
}

export default AuthGuard
