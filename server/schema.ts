export const typeDefs = `
    type Query {
        users: [User!]!
        user(id: Int!): User!
    }

    type User {
        id: Int!
        name: String!
        email: String!
        highScore: Int!
    }
`
