import { mockServer } from '@graphql-tools/mock'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDefs } from '../schema'
import resolvers from '../resolvers'

const schema = makeExecutableSchema({ typeDefs, resolvers })

const mocks = {
	users: () => new Array([
		{
			email: 'alice@prisma.io',
			highScore: 100000,
			id: 1,
			name: 'alice',
			password: 'alicePassword',
		},
		{
			email: 'brie@prisma.io',
			highScore: 200000,
			id: 2,
			name: 'brie',
			password: 'briePass',
		},
		{
			email: 'cam@prisma.io',
			highScore: 50000,
			id: 3,
			name: 'cam',
			password: 'camPassword',
		},
	])
}
const preserveResolvers = false

export const server = mockServer(schema, mocks, preserveResolvers)

export const GET_HIGH_SCORES_AND_NAMES = /* GraphQL */ `
    query GetHighScoresAndNames {
        users {
            highScore
            name
        }
    }
`

// const main = async () => {

// 	let res = await server.query(GET_HIGH_SCORES_AND_NAMES)
// 	console.log(res)
// }

// main()

