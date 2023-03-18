import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import Outside from './outside'
import Inside from './inside'
import Login from './login'

import useToken from './hooks/useToken'

import { GET_IS_INSIDE } from '../cache/queries'

const Game = styled.div`
    position: relative;
    height: 98vh;
    width: 98vw;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: system-ui;
    font-weight: bold;
`

function App() {
    const { data, loading, error } = useQuery(GET_IS_INSIDE)
    const { token, setToken } = useToken();

    if (error) console.log('panic!')
    if (loading) console.log('think of what to do for these cases')

    const isInside = data.isInside

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <Game>
            {
                isInside
                    ? <Inside />
                    : <Outside />
            }
        </Game>
    )
}

export default App
