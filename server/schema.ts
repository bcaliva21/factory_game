export const typeDefs = `
    type User {
        id: Int!
        name: String!
        email: String!
        highScore: Int!
    }    

    type Query {
        users: [User!]!
        user(id: Int!): User!
    }

    type Mutation {
        addUser(name: String, email: String): User
    }
`
