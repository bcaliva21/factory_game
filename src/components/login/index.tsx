import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION } from '../../cache/queries'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
        onCompleted: ({ login }) => {
            // Save the JWT token to a cookie or other persistent storage
            document.cookie = `jwt=${login.token}`
        },
    })

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()

        login({
            variables: { email, password },
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Log in'}
            </button>
            {error && <p>{error.message}</p>}
        </form>
    )
}

export default Login