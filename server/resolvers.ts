import { PrismaClient, User } from '@prisma/client'
import jwt from 'jsonwebtoken'
import pkg from 'bcryptjs'
const { compare } = pkg

const prisma = new PrismaClient()

type UserQueryInput = {
    id: number
}

type AddUserPayload = {
    name: string,
    email: string,
    password: string
}

type HighScoreUpdatePayload = {
    id: number,
    highScore: number
}

const resolvers = {
    Query: {
        users: async (): Promise<User[]> => {
            return prisma.user.findMany()
        },
        user: async (_: any, { id }: UserQueryInput): Promise<User | null> => {
            return prisma.user.findUnique({
                where: { id },
            })
        },
    },
    Mutation: {
        async signUp(_: any, { name, email, password }: AddUserPayload) {
            const userWithMatchingEmail = await prisma.user.findUnique({ where: { email } })

            if (userWithMatchingEmail) {
                throw new Error('email already exists, try logging in')
            }

            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    highScore: 0,
                    password
                }
            })

            const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET!, {
                expiresIn: process.env.JWT_EXPIRES_IN,
            })

            return { token }
        },
        async updateHighScore(_: any, { id, highScore }: HighScoreUpdatePayload) {
            const user = await prisma.user.update({
                where: {
                    id
                },
                data: {
                    highScore
                }
            })

            return user
        },
        async login(_: any, { email, password }: any) {
            const user = await prisma.user.findUnique({ where: { email } })

            if (!user) {
                throw new Error('Invalid email or password')
            }

            // TODO: use bcrypt compare when SSL is added
            const passwordMatch = password === user.password

            if (!passwordMatch) {
                throw new Error('Invalid email or password')
            }

            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
                expiresIn: process.env.JWT_EXPIRES_IN,
            })

            return { token }
        }
    }
}

export default resolvers
