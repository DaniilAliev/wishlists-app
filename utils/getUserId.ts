import { prisma } from '@/prisma/prisma-client'

export const getUserId = async (userName: string) => {
  const user = await prisma.user.findFirst({
    where: {
      name: userName as string
    }
  })

  return user?.id
}
