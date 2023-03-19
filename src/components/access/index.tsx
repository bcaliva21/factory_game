import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION } from '../../cache/queries'
import { accessPageVar } from '../../cache'

interface AccessProps {
    setToken: (token: string) => void
}

const AccessContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`

const LoginForm = styled.form`
	height: 100%;
	width: 50%;
`

const RegistrationForm = styled.form`
	height: 100%;
	width: 50%;
`

const ViewQuestion = styled.div``
const ViewControl = styled.div`
	&:hover {
		cursor: pointer;
	}
	text-decoration: underline;
`

const Access = ({ setToken }: AccessProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
	const [loginView, setLoginView] = useState(true)

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

	const handleViewChange = () => setLoginView(!loginView)
    const handleAccessClick = () =>
        accessPageVar(!accessPageVar())
    return (
		<AccessContainer>
		{loginView 
			?
        <LoginForm onSubmit={handleSubmit}>
			LOGIN
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
            <button onClick={handleAccessClick}>back</button>
			<ViewQuestion>Need an Account? 
				<ViewControl onClick={handleViewChange}>Register</ViewControl>
			</ViewQuestion>
            {error && <p>{error.message}</p>}
        </LoginForm>

			:
        <RegistrationForm onSubmit={handleSubmit}>
			REGISTER
            <input
                type="email"
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                value={password}
                // onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Register'}
            </button>
            <button onClick={handleAccessClick}>back</button>
				<ViewQuestion>Already a user? 
				<ViewControl onClick={handleViewChange}>Login</ViewControl>
			</ViewQuestion>
            {error && <p>{error.message}</p>}
        </RegistrationForm>

		}
	</AccessContainer>
    )
}

export default Access 
