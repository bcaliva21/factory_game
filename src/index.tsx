import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ApolloClient, ApolloProvider, ApolloLink, HttpLink } from '@apollo/client'
import { cache } from './cache/'
import { typeDefs } from '../server/schema'

const http = new HttpLink({ uri: 'http://localhost:4000/' })
const link = ApolloLink.from([
    http
  ])

export const client = new ApolloClient({
    cache,
    connectToDevTools: true,
    link,
    typeDefs,
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)
