import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import fs from 'fs'
import express from 'express'
import http from 'http'
import cors from 'cors'
import bodyParser from 'body-parser'
import { typeDefs } from './schema.js'
import resolvers from './resolvers.js'

const app = express()
const httpServer = http.createServer(
	app
)

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

await server.start()

app.use(
    '/',
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
    	context: async ({ req }) => ({ token: req.headers.token})
    })
)


//@ts-ignore
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))

console.log(`🚀 Server ready at https://factory-game.com/api`)
