import { auth } from "@/auth"
import { NAV_NAME } from "@/data/Nav/constants"
import { NAV_ROUTES } from "@/router/navRoutes"
import { redirect } from 'next/navigation'
import { FC, ReactElement, useEffect } from "react"


const LoginGuard: FC<{ children: ReactElement | ReactElement []}> = async ({
  children
}) => {
  const session = await auth()

  if (session) {
    redirect(NAV_ROUTES[NAV_NAME.HOME])
  }

  return <>{children}</>
}

export default LoginGuard
