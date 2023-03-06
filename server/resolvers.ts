import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

const resolvers = {
    Query: {
        users: async (): Promise<User[]> => {
            return prisma.user.findMany()
        },
        user: async (_: any, { id }: any): Promise<User | null> => {
            return prisma.user.findUnique({
                where: { id },
            })
        },
    },
}

export default resolvers
