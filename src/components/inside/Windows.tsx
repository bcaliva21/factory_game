import React from 'react'
import styled from 'styled-components'

const WindowsContainer = styled.div`
    height: 20%;
    width: 100%;
    background-color: transparent;
    position: absolute;
    top: 5%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Window = styled.div`
    height: 20%;
    width: 1.5%;
    background-color: skyblue;
    margin-right: 7.5%;
    border: 1px solid #ffd700;
`

const Windows = () => {

    return(
        <WindowsContainer>
            <Window />
            <Window />
            <Window />
        </WindowsContainer>
    )
}

export default Windows
