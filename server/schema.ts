export const typeDefs = `
    type HighScore {
        score: Float
        user: User
    }

    type User {
        name: String
        email: String
    }

    type Query {
        users: [User]
        highScores: [HighScore]
    }

    query GetHighScores {
        highScores {
          score
          user {
            name
          }
        }
      }
`

const Users = [
    {
        name: 'Jimmy',
        email: 'jimmy@gmail.com',
    },
    {
        name: 'Claire',
        email: 'claire@gmail.com',
    },
];

const HighScores = [
    {
        score: 100,
        user: Users[0]
    },
    {
        score: 101,
        user: Users[1]
    },
]

export const resolvers = {
    Query: {
        users: () => Users,
        highScores: () => HighScores,
    },
}
