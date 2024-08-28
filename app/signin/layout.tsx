import LoginGuard from '@/guards/LoginGuard'
import React, { FC, ReactElement } from 'react'

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <LoginGuard>
      {children}
    </LoginGuard>
  )
}

export default Layout
