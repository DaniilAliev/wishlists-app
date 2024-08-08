import './globals.scss'

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} px-4`}>
        <main>
          <Header />
          {children}
          <Nav />
        </main>
      </body>
    </html>
  )
}
