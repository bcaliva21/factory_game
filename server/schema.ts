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
        updateHighScore(id: Int!, highScore: Int): User
        login(email: String!, password: String!): AuthPayload!
        signUp(name: String, email: String, password: String!): AuthPayload!
    }

    type AuthPayload {
        token: String!
    }
`
