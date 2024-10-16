import jwt from 'jsonwebtoken'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

import { prisma } from './prisma/prisma-client'

export const authOptions = NextAuth({
  providers: [GitHub],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/signin'
  },
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log('Token:', token)
      console.log('User:', user)

      const findUser = await prisma.user.findFirst({
        where: {
          name: user.name as string
        }
      })

      await (findUser
        ? prisma.user.update({
            where: { email: user.email as string },
            data: {
              email: user.email as string,
              name: user.name as string,
              imageUrl: user.image as string
            }
          })
        : prisma.user.create({
            data: {
              email: user.email as string,
              name: user.name as string,
              imageUrl: user.image as string,
              password: '123'
            }
          }))

      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    async session({ session }) {
      return session
    }
    // authorized: async ({ auth }) => {
    //   // Logged in users are authenticated, otherwise redirect to login page
    //   return !!auth
    // }
  },
  jwt: {
    async encode({ secret, token }) {
      return jwt.sign(token, secret, { expiresIn: '1h' })
    }
  },
  cookies: {
    sessionToken: {
      name: 'authjs.session-token',
      options: {
        httpOnly: false,
        sameSite: 'lax',
        path: '/'
        // secure: process.env.NODE_ENV === 'production' // Используйте secure в продакшене
      }
    }
  }
})

export const { handlers, signIn, signOut, auth } = authOptions
