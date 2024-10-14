import './globals.scss'

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import Header from '@/components/Header'
import Nav from '@/components/Nav'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme'
import AuthGuard from '@/guards/AuthGuard'
import { NextAuthProvider } from '@/guards/NextAuthProvider'
import { SessionProvider } from 'next-auth/react'

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Whishlist App',
  description: 'Whishlist App'
}

export default async function RootLayout({
  children,
  // session
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${plusJakartaSans.className} px-4`}>
        {/* <SessionProvider session={session}> */}
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <NextIntlClientProvider messages={messages}>
                <Header />
                <main className="h-full">{children}</main>
                <Nav />
              </NextIntlClientProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}
