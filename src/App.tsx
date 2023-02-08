import React from 'react'
import styled from 'styled-components'

import Factory from './Factory'

const AppBody = styled.div`
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
        </AppBody>
    )
}

export default App
