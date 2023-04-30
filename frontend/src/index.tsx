import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    ApolloClient,
    ApolloProvider,
    ApolloLink,
    HttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import App from './components/App'
import { cache } from './cache/'
import { typeDefs } from './cache/schema'

const devEnv = import.meta.env.VITE_API_URI.includes('localhost')

const http = new HttpLink({
    credentials: !devEnv && 'include',
    headers: {
        'content-type': 'application/json',
        'x-apollo-operation-name': 'GraphQLRequest',
    },
    uri: import.meta.env.VITE_API_URI,
})

const httpLink = ApolloLink.from([http])

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token')
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

export const client = new ApolloClient({
    cache,
    connectToDevTools: true,
    link: authLink.concat(httpLink),
    typeDefs,
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)
