import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useMutation } from '@apollo/client'

import eye from '../../assets/eye.svg'
import eyeSlash from '../../assets/eye-slash.svg'
import { LOGIN_MUTATION, REGISTER_MUTATION } from '../../cache/queries'
import { accessPageVar } from '../../cache'

interface AccessProps {
    setToken: (token: string) => void
    setUser: (user: string) => void
    setUserHighScore: (userHighScore: string) => void
}

const AccessContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginForm = styled.form`
    height: 70%;
    width: 30%;
    display: flex;
    justify-content: center;
    background-color: #f0f0f0;
    flex-direction: column;
    background: linear-gradient(
        -45deg,
        rgba(0, 0, 0, 0.22),
        rgba(100, 100, 100, 0.25)
    );
`

const FormHeader = styled.div`
    text-transform: uppercase;
    font-size: 16px;
    margin-left: 10%;
    margin-bottom: 20px;
`

const InputHeader = styled.div`
    text-transform: capitalize;
    font-size: 15px;
    margin: 10px 0 10px 10%;
`

const StyledInput = styled.input`
    width: 76%;
    font-size: 14px;
    margin-left: 10%;
    padding: 5px;
`

const ActionContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

const ActionButton = styled.button`
    width: 30%;
    font-size: 16px;
    padding: 5px;

    &:hover {
        cursor: pointer;
    }
`

const RegistrationForm = styled.form`
    height: 80%;
    width: 30%;
    display: flex;
    justify-content: center;
    background-color: #f0f0f0;
    flex-direction: column;
    background: linear-gradient(
        -45deg,
        rgba(0, 0, 0, 0.22),
        rgba(100, 100, 100, 0.25)
    );
`

const PasswordContainer = styled.div`
    width: 100%;
    height: 10%;
    position: relative;
`

const PasswordLengthIndication = styled.div<{ enablePassword?: boolean }>`
    width: 76%;
    margin-left: 10%;
    padding: 5px;
    font-size: 10px;
    ${({ enablePassword }) =>
        enablePassword
            ? css`
                  color: #0000;
              `
            : css`
                  color: red;
              `}
`

const ShowPassword = styled.input`
    height: 20px;
    width: 25px;
    position: absolute;
    right: 12%;
    top: 12%;
`

const ViewQuestion = styled.div`
    margin-left: 10%;
    margin-bottom: 10px;
    display: inline-flex;
`
const ViewControl = styled.div`
    &:hover {
        cursor: pointer;
    }
    text-decoration: underline;
    padding-left: 5px;
`

const errorState = css`
    text-decoration: underline;
    text-decoration-color: #901000;
`

const AccessErrorMessage = styled.div<{ error: boolean }>`
    margin-left: 10%;
    width: fit-content;
    ${({ error }) => error && errorState}
`

const Access = ({ setToken, setUser, setUserHighScore }: AccessProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [loginView, setLoginView] = useState(true)
    const [enablePassword, setEnablePassword] = useState(true)
    const [passwordState, setPasswordState] = useState('password')

    const [login, { loading: loginLoading, error: loginError }] = useMutation(
        LOGIN_MUTATION,
        {
            onCompleted: ({ login }) => {
                setToken(login.token)
                setUser(login.user.id)
                setUserHighScore(login.user.highScore)
            },
        }
    )

    const [
        register,
        { loading: registrationLoading, error: registrationError },
    ] = useMutation(REGISTER_MUTATION, {
        onCompleted: ({ register }) => {
            setToken(register.token)
            setUser(register.id)
            setUserHighScore('0')
        },
    })

    const handleLoginSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()

        login({
            variables: { email, password },
        }).then((data: any) => {
            const { token } = data.data.login
            if (token) accessPageVar(false)
        })
    }

    const handleRegisterSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()

        register({
            variables: { email, name, password },
        }).then((data: any) => {
            const { token } = data.data.register
            if (token) accessPageVar(false)
        })
    }

    const handleViewChange = () => setLoginView(!loginView)
    const handleShowPassword = (e: any) => {
        e.preventDefault()
        return passwordState === 'password'
            ? setPasswordState('text')
            : setPasswordState('password')
    }

    const verifyPassword = (value: string) => {
        const eightCharRequirement = /^.{8,32}$/
        const passwordValid = eightCharRequirement.test(value)

        setEnablePassword(passwordValid)
        setPassword(value)
    }

    return (
        <AccessContainer>
            {loginView ? (
                <LoginForm onSubmit={handleLoginSubmit}>
                    <FormHeader>login</FormHeader>
                    <InputHeader>email</InputHeader>
                    <StyledInput
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <InputHeader>password</InputHeader>
                    <StyledInput
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <ActionContainer>
                        <ActionButton type="submit" disabled={loginLoading}>
                            {loginLoading ? 'Logging in...' : 'Log in'}
                        </ActionButton>
                    </ActionContainer>
                    <ViewQuestion>
                        Need an Account?
                        <ViewControl onClick={handleViewChange}>
                            Register
                        </ViewControl>
                    </ViewQuestion>
                    {loginError && (
                        <AccessErrorMessage error={!!loginError}>
                            {loginError.message}
                        </AccessErrorMessage>
                    )}
                </LoginForm>
            ) : (
                <RegistrationForm onSubmit={handleRegisterSubmit}>
                    <FormHeader>register</FormHeader>
                    <InputHeader>name</InputHeader>
                    <StyledInput
                        type="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        maxLength={20}
                    />
                    <InputHeader>email</InputHeader>
                    <StyledInput
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        maxLength={30}
                    />
                    <InputHeader>password</InputHeader>
                    <PasswordContainer>
                        <StyledInput
                            type={passwordState}
                            value={password}
                            onChange={(event) =>
                                verifyPassword(event.target.value)
                            }
                            minLength={8}
                            maxLength={20}
                            onFocus={(event) =>
                                verifyPassword(event.target.value)
                            }
                            required
                        />
                        {passwordState === 'text' ? (
                            <ShowPassword
                                type="image"
                                src={eyeSlash}
                                onClick={(e) => handleShowPassword(e)}
                            />
                        ) : (
                            <ShowPassword
                                type="image"
                                src={eye}
                                onClick={(e) => handleShowPassword(e)}
                            />
                        )}
                        <PasswordLengthIndication
                            enablePassword={enablePassword}
                        >
                            Password must be at least 8 characters
                        </PasswordLengthIndication>
                    </PasswordContainer>
                    <ActionContainer>
                        <ActionButton
                            type="submit"
                            disabled={registrationLoading || !enablePassword}
                        >
                            {registrationLoading ? 'Logging in...' : 'Register'}
                        </ActionButton>
                    </ActionContainer>
                    <ViewQuestion>
                        Already a user?
                        <ViewControl onClick={handleViewChange}>
                            Login
                        </ViewControl>
                    </ViewQuestion>
                    {registrationError && (
                        <AccessErrorMessage error={!!registrationError}>
                            {registrationError.message}
                        </AccessErrorMessage>
                    )}
                </RegistrationForm>
            )}
        </AccessContainer>
    )
}

export default Access
