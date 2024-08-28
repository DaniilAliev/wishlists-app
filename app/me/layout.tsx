import AuthGuard from "@/guards/AuthGuard";
import { FC, ReactElement } from "react";

const Layout: FC<{ children: ReactElement}> = ({ children }) => {
  return(
    <AuthGuard >
      {children}
    </AuthGuard>
  )
}

export default Layout