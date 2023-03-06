import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import Outside from './outside'
import Inside from './inside'

import { GET_IS_INSIDE } from '../cache/queries'

const AppBody = styled.div`
    position: relative;
    width: 100vw;
    height: 98vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: system-ui;
    font-weight: bold;
    background-color: #0c0c0c;
`

function App() {
    const { data, loading, error } = useQuery(GET_IS_INSIDE)

    if (error) console.log('panic!')
    if (loading) console.log('think of what to do for these cases')

    const isInside = data.isInside

    return (
        <AppBody>
            {isInside
                ? <Inside />
                : <Outside />
            }
        </AppBody>
    )
}

export default App