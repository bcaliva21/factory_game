export const typeDefs = `
    type User {
        firstname: String
        lastname: String
        age: Int
        address: String
    }
    type Query {
        users:[User]
    }
`;

export const resolvers = {
    Query: {
      users: () => [],
    },
  };