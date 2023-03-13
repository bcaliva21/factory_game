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
    Mutation: {
        async addUser(_: any, { name, email }: any) {
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    highScore: 0
                }
            })

            return user
        }
    }
}

export default resolvers
