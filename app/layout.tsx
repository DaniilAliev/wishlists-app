import './globals.scss'

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import Header from '@/components/Header'
import Nav from '@/components/Nav'

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Whishlist App',
  description: 'Whishlist App'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${plusJakartaSans.className} px-4`}>
        <NextIntlClientProvider messages={messages}>
          <main>
            <Header />
            {children}
            <Nav />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
