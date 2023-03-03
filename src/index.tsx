import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { cache } from './cache/'

export const client = new ApolloClient({
    cache,
    connectToDevTools: true,
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)
