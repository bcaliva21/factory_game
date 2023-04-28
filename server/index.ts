import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express'
import http from 'http'
import https from 'https'
import cors from 'cors'
import bodyParser from 'body-parser'
import { typeDefs } from './schema.js'
import resolvers from './resolvers.js'
import fs from 'fs'

// Required logic for integrating with Express
const app = express()

const httpsOptions = {
	key: fs.readFileSync('./fakeSSL/key.pem'),
	cert: fs.readFileSync('./fakeSSL/cert.pem'),
	passphrase: '0928',
}

const httpsServer = https.createServer(httpsOptions, app)
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app)
// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})
// Ensure we wait for our server to start
await server.start()

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
    '/',
    cors(),
    bodyParser.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
    })
)

const startHttp = new Promise((resolve) => httpServer.listen({ port: 4000 }, () => {
	console.log(`🚀 HTTP Server ready at http://4000`)
    //@ts-ignore
	resolve()
}))

//@ts-ignore
const startHttps = new Promise((resolve) => httpsServer.listen({ port: 443 }, () => {
	console.log(`🚀 HTTPS Server ready at https://443`)
    //@ts-ignore
	resolve()
}))

// Modified server startup
Promise.all([startHttp, startHttps]).then(() => {
	console.log('Both http and https servers are running')
}).catch(error => {
	console.error('Error starting one or both of the servers', error)
})

