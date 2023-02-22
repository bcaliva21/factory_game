import * as admin from 'firebase-admin'

const serviceAccount = require('../firebase-service-account.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

import { ApolloServer, ApolloError, ValidationError, gql } from 'apollo-server'

interface User {
    id: string
    name: string
    email: string
}

interface HighScore {
    date: string
    id: string
    userId: string
    score: number
}

const typeDefs = gql`
    # A factory game User
    type User {
        id: ID!
        name: String!
        screenName: String!
        statusesCount: Int!
        tweets: [Tweets]!
        id: String!
        name: String!
        email: String!
        highScores: [HighScore]
    }

    # A High Score Object
    type HighScore {
        id: ID!
        text: String!
        userId: String!
        user: User!
        likes: Int!
    }

    type Query {
        highScores: [HighScore]
        user(id: String!): User
    }
`

const resolvers = {
    Query: {
        async tweets() {
            const tweets = await admin
                .firestore()
                .collection('high-scores')
                .get()
            return tweets.docs.map((tweet) => tweet.data()) as HighScore[]
        },
        async user(_: null, args: { id: string }) {
            try {
                const userDoc = await admin
                    .firestore()
                    .doc(`users/${args.id}`)
                    .get()
                const user = userDoc.data() as User | undefined
                return user || new ValidationError('User ID not found')
            } catch (error) {
                throw new ApolloError(error)
            }
        },
    },
    User: {
        async highScores(user) {
            try {
                const userTweets = await admin
                    .firestore()
                    .collection('high-scores')
                    .where('userId', '==', user.id)
                    .get()
                return userTweets.docs.map((tweet) =>
                    tweet.data()
                ) as HighScore[]
            } catch (error) {
                throw new ApolloError(error)
            }
        },
    },
    HighScores: {
        async user(highScore) {
            try {
                const highScoreAuthor = await admin
                    .firestore()
                    .doc(`users/${highScore.userId}`)
                    .get()
                return highScoreAuthor.data() as User
            } catch (error) {
                throw new ApolloError(error)
            }
        },
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
