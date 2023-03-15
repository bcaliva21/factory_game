import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

type UserQueryInput = {
    id: number
}

type AddUserPayload = {
    name: string
    email: string
}

type HighScoreUpdatePayload = {
    id: number
    highScore: number
}

const resolvers = {
    Query: {
        users: async (): Promise<User[]> => {
            return prisma.user.findMany()
        },
        user: async (
            _: object,
            { id }: UserQueryInput
        ): Promise<User | null> => {
            return prisma.user.findUnique({
                where: { id },
            })
        },
    },
    Mutation: {
        async addUser(_: object, { name, email }: AddUserPayload) {
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    highScore: 0,
                },
            })

            return user
        },
        async updateHighScore(
            _: object,
            { id, highScore }: HighScoreUpdatePayload
        ) {
            const user = await prisma.user.update({
                where: {
                    id,
                },
                data: {
                    highScore,
                },
            })

            return user
        },
    },
}

export default resolvers
