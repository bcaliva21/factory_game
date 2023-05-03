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
import dotenv from 'dotenv'

const env = process.env.NODE_ENV
dotenv.config({ path: `./.env.${env}` })

const app = express()
const httpServer = http.createServer(app)

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
        context: async ({ req }) => ({ token: req.headers.token }),
    })
)

//@ts-ignore
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))

console.log(
    env === 'prod'
        ? `🚀 Server ready at https://factory-game.com/api`
        : `🚀 Server ready at http://localhost:4000`
)
