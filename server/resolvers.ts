import { PrismaClient, User, HighScore } from '@prisma/client'

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
        highScores: async (): Promise<HighScore[]> => {
            return prisma.highScore.findMany()
        },
        highScore: async (_: any, { id }: any): Promise<HighScore | null> => {
            return prisma.highScore.findUnique({
                where: { id },
            })
        },
    },
    User: {
        highScores: async (parent: { id: any }): Promise<HighScore[]> => {
            return prisma.highScore.findMany({
                where: { id: parent.id },
            })
        },
    },
    HighScore: {
        user: async (parent: { userId: any }): Promise<User | null> => {
            return prisma.user.findUnique({
                where: { id: parent.userId },
            })
        },
    },
}

export default resolvers
