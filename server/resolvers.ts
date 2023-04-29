import { PrismaClient, User } from '@prisma/client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

type UserQueryInput = {
    id: number
}

type AddUserPayload = {
    name: string
    email: string
    password: string
}

type HighScoreUpdatePayload = {
    id: number
    highScore: number
}

const resolvers = {
    Query: {
        users: async (): Promise<User[]> => {
            const users = await prisma.user.findMany()
            return users.sort((a, b) => b.highScore - a.highScore)
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
        async register(_: object, { name, email, password }: AddUserPayload) {
            const userWithMatchingEmail = await prisma.user.findUnique({
                where: { email },
            })

            if (userWithMatchingEmail) {
                throw new Error('email already exists, try logging in')
            }

	    const salt = await bcrypt.genSalt(10)
	    const hash = await bcrypt.hash(password, salt)

            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    highScore: 0,
                    password: hash,
                },
            })

            const userId = newUser.id

            const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
                expiresIn: process.env.JWT_EXPIRES_IN,
            })

            return { token, id: userId }
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

            return { user, highScore: user.highScore }
        },
        async login(_: object, { email, password }: AddUserPayload) {
            const user = await prisma.user.findUnique({ where: { email } })

            if (!user) {
                throw new Error('Invalid email or password')
            }

            // TODO: use bcrypt compare when SSL is added
            const passwordMatch = await bcrypt.compare(password, user.password)

            if (!passwordMatch) {
                throw new Error('Invalid email or password')
            }

            const userId = user.id

            const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
                expiresIn: process.env.JWT_EXPIRES_IN,
            })

            return { token, user }
        },
    },
}

export default resolvers
