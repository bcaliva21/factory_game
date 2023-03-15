import React from 'react'
import styled from 'styled-components'

const IncineratorDoorContainer = styled.div`
    width: 45%;
    height: 30%;
    position: relative;
    display: flex;
    align-items: end;
    flex-direction: row-reverse;
`

const STRONGSIDE = styled.div`
    background-color: #901000;
    height: 100%;
    width: 75%;
    z-index: 20;
    background: linear-gradient(-45deg, rgba(144, 36, 0), rgba(144, 16, 0));
	border-right: 10px solid black;
`

const WEAKSIDE = styled.div`
    background: rgb(255, 255, 255);
    background: linear-gradient(
        -90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(232, 232, 232, 1) 47%,
        rgba(196, 192, 192, 1) 100%
    );
    height: 94%;
    width: 25%;
    z-index: 0;
    border-top: 5px solid black;
    border-right: 6px solid black;
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
