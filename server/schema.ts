export const typeDefs = `
    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
        highScore: Int!
    }

    type Query {
        users: [User!]!
        user(id: Int!): User!
    }

    type Mutation {
        updateHighScore(id: Int!, highScore: Int!): UpdateHighScorePayload
        login(email: String!, password: String!): LoginPayload!
        register(name: String, email: String, password: String!): RegistrationPayload!
    }

    type UpdateHighScorePayload {
        highScore: Int!
        user(id: Int!): User!
    }

    type LoginPayload {
        token: String!
        user(email: String!): User!
    }

    type RegistrationPayload {
        token: String!
        id: Int!
    }
`
