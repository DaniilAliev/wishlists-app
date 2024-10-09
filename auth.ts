import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import { SignJWT, jwtDecrypt, JWTPayload, KeyLike } from 'jose'
import jwt from 'jsonwebtoken';

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
      // Добавляем данные пользователя в токен только при первой аутентификации
      if (user) {
        token.id = user.id // Добавляем id пользователя
        token.email = user.email // Добавляем email, если необходимо
      }
      return token
    },
    async session({ session }) {
      return session
    }
  },
  jwt: {
    async encode({ secret, token }) {
      // Генерация JWT
      return jwt.sign(token, secret, { expiresIn: '1m' })
    }
  },
  cookies: {
    sessionToken: {
      name: 'authjs.session-token',
      options: {
        httpOnly: false, 
        sameSite: 'lax',
        path: '/',
        // secure: process.env.NODE_ENV === 'production' // Используйте secure в продакшене
      }
    }
  }
})

export const { handlers, signIn, signOut, auth } = authOptions
