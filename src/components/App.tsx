import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import Outside from './outside'
import Inside from './inside'
import Login from './login'

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
    // isUserAuth will come from data?
    const isUserAuthenticated: boolean = true

    if (error) console.log('panic!')
    if (loading) console.log('think of what to do for these cases')

    const isInside = data.isInside

    return (
        <>
            {
                isUserAuthenticated ?
                    <Game>
                        {
                            isInside
                                ? <Inside />
                                : <Outside />
                        }
                    </Game>
                    :
                    <Login />
            }


        </>
    )
}

export default App
