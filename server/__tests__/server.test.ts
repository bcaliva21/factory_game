import { mockServer } from '@graphql-tools/mock'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDefs } from '../schema'
import resolvers from '../resolvers'

const schema = makeExecutableSchema({ typeDefs, resolvers })

const mocks = {
	users: () => [
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
	]
}
const preserveResolvers = true 

const server = mockServer(schema, mocks, preserveResolvers)

const GET_HIGH_SCORES_AND_NAMES = /* GraphQL */ `
    query GetHighScoresAndNames {
        users {
            highScore
            name
        }
    }
`

// Write your Jest test cases here
describe('Apollo Server tests', () => {
  it('should return "Hello, world!"', async () => {
    
    // Send the test query to the Apollo Server using the test client
    const res = await server.query(GET_HIGH_SCORES_AND_NAMES);
	console.log(res.data)
    // Verify that the response from the Apollo Server matches your expectations
    expect(res.data).toEqual(0);
	
  });

  // Add more test cases here
});

