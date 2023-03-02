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

export const resolvers = {
    Query: {
        users: () => [],
    },
}
