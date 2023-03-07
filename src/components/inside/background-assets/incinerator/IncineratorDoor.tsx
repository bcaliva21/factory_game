import React from 'react'
import styled from 'styled-components'

const IncineratorDoorContainer = styled.div`
    width: 45%;
    height: 30%;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    border-top: 10px solid #282828;
    border-right: 5px solid #282828;
    border-left: 2px solid #282828;
`

const STRONGSIDE = styled.div`
    background-color: #282828;
    height: 100%;
    width: 80%;
    z-index: 20;
`

const WEAKSIDE = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(232,232,232,1) 47%, rgba(196,192,192,1) 100%);
    height: 100%;
    width: 20%;
    z-index: 0;
`

const IncineratorDoor = () => {

    return (
        <IncineratorDoorContainer>
            <WEAKSIDE />
            <STRONGSIDE />
        </IncineratorDoorContainer>
    )
}

export default IncineratorDoor