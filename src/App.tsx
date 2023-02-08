import React from 'react'
import styled from 'styled-components'

import Factory from './Factory'
import Environment from './Environment'

const AppBody = styled.div`
    position: relative;
    width: 100vw;
    height: 98vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

function App() {
    return (
        <AppBody>
            <Factory />
            <Environment />
        </AppBody>
    )
}

export default App
