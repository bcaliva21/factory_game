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
        users: [User]!
        highScores: [HighScore]!
    }
`

// TODO add mutations for db writing
// type Mutation {
//     addHighScore(score: Float, user: User): HighScore
// }