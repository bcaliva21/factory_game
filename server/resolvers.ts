import { PrismaClient, User, HighScore } from '@prisma/client'

const prisma = new PrismaClient()

// TODO: fix the types for typescript
const resolvers = {
    Query: {
        users: async (): Promise<User[]> => {
            return prisma.user.findMany()
        },
        user: async (_, { id }): Promise<User | null> => {
            return prisma.user.findUnique({
                where: { id },
            })
        },
        highScores: async (): Promise<HighScore[]> => {
            return prisma.highScore.findMany()
        },
        highScore: async (_, { id }): Promise<HighScore | null> => {
            return prisma.highScore.findUnique({
                where: { id },
            })
        },
    },
    User: {
        highScores: async (parent): Promise<HighScore[]> => {
            return prisma.highScore.findMany({
                where: { id: parent.id },
            })
        },
    },
    HighScore: {
        user: async (parent): Promise<User | null> => {
            return prisma.user.findUnique({
                where: { id: parent.userId },
            })
        },
    },
}

export default resolvers
