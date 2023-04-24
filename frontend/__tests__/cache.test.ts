import { ApolloServer } from '@apollo/server'
import { addMocksToSchema } from '@graphql-tools/mock'
import { makeExecutableSchema } from '@graphql-tools/schema'
import casual from 'casual'
import { gql } from '@apollo/client'

import { typeDefs } from '../src/graphql/schema'
import resolvers from '../src/graphql/resolvers'

const genNewUser = (id) => {
	return {
		email: casual.email,
		id: id,
		name: casual.first_name,
		password: casual.password,
		highScore: casual.integer(10000,300000),
		createdAt: new Date(casual.unix_time),
	}
}

const mocks = {
	users: () => {
		const mock_users = new Array(15)

		for (let i = 0; i < mock_users.length; i++) {
			mock_users[i] = genNewUser(i)
		}

		return mock_users
	},

}

const server = new ApolloServer({
	schema: addMocksToSchema({
		schema: makeExecutableSchema({ typeDefs, resolvers }),
		mocks,
		preserveResolvers: true,
	}),
})

beforeAll(async () => {
	await server.start()
})

afterAll(async () => {
	await server.stop()
})

test('returns hello world', () => {
	expect('hello world').toEqual('hello world')
})
