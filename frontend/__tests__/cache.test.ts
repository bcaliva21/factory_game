import { ApolloServer } from '@apollo/server'
import { addMocksToSchema } from '@graphql-tools/mock'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import { gql } from '@apollo/client'
