export const typeDefs = `
    type Query {
        users: [User!]!
        user(id: Int!): User!
        highScores: [HighScore!]!
        highScore(id: Int!): HighScore!
    }

    type User {
        id: Int!
        name: String!
        highScores: [HighScore!]!
    }

    type HighScore {
        id: Int!
        score: Int!
        user: User!
    }
`

// type Mutation {
//   createUser(name: String!): User!
//   createHighScore(userId: Int!, score: Int!): HighScore!
//   updateUser(id: Int!, name: String): User!
//   updateHighScore(id: Int!, score: Int!): HighScore!
//   deleteUser(id: Int!): User!
//   deleteHighScore(id: Int!): HighScore!
// }
