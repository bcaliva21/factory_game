import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION } from '../../cache/queries'
import { registerOrSignInVar } from '../../cache'

interface LoginProps {
    setToken: (token: string) => void
}

const Login = ({ setToken }: LoginProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
        onCompleted: ({ login }) => {
            setToken(login.token)
        },
    })

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()

        login({
            variables: { email, password },
        })
    }

    const handleSignInUpClick = () =>
        registerOrSignInVar(!registerOrSignInVar())
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
            <button onClick={handleSignInUpClick}>back</button>
            {error && <p>{error.message}</p>}
        </form>
    )
}

export default Login
