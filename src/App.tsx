import React from 'react'
import styled from 'styled-components'

// components
import Factory from './Factory'
import Environment from './Environment'

// state
import { AppProvider } from './state/appContext'

const AppBody = styled.div`
    position: relative;
    width: 100vw;
    height: 98vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: system-ui;
    font-weight: bold;
`

function App() {
    return (
        <AppProvider>
            <AppBody>
                <Factory />
                <Environment />
            </AppBody>
        </AppProvider>
    )
}

export default App
