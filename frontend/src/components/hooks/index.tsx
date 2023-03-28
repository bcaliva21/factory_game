import { useState } from 'react'

export function useToken() {
    const getToken = () => {
        return sessionStorage.getItem('token')
    }

    const [token, setToken] = useState(getToken())

    const saveToken = (token: string) => {
        sessionStorage.setItem('token', token)
        setToken(token)
    }

    return {
        setToken: saveToken,
        token,
    }
}

export function useUser () {
    const getUser = () => {
        return sessionStorage.getItem('user')
    }

    const [user, setUser] = useState(getUser())

    const saveUser = (user: string) => {
        sessionStorage.setItem('user', user)
        setUser(user)
    }

    return {
        setUser: saveUser,
        user,
    }
}
