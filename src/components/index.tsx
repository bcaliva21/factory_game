import react from 'react'
import styled from 'styled-components'

import { Factory, Environment } from './outside'

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
        <AppBody>
            <Factory />
            <Environment />
        </AppBody>
    )
}

export default App
