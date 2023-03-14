import { PrismaClient, User } from '@prisma/client'
import jwt from 'jsonwebtoken';
import { compare } from 'bcryptjs';

const prisma = new PrismaClient()

type UserQueryInput = {
    id: number
}

type AddUserPayload = {
    name: string,
    email: string
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
        async addUser(_: any, { name, email }: AddUserPayload) {
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    highScore: 0
                }
            })

            return user
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
        async login(_, { email, password }) {
            const user = await prisma.user.findUnique({ where: { email } });

            if (!user) {
                throw new Error('Invalid email or password');
            }

            // TODO: add password
            const passwordMatch = await compare(password, user.password);

            if (!passwordMatch) {
                throw new Error('Invalid email or password');
            }

            // what is this secret?
            const token = jwt.sign({ userId: user.id }, 'your-secret-key-here');

            return { token };
        }
    }
}

export default resolvers
