// import prisma from '../lib/prisma.js'

const Users = [
    {
        name: 'Jimmy',
        email: 'jimmy@gmail.com',
    },
    {
        name: 'Claire',
        email: 'claire@gmail.com',
    },
]

const HighScores = [
    {
        score: 100,
        user: Users[0],
    },
    {
        score: 101,
        user: Users[1],
    },
]

export const resolvers = {
    Query: {
        users: () => Users,
        highScores: () => HighScores,
    },
}
