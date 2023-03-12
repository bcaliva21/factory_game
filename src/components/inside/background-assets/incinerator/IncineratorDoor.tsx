import React from 'react'
import styled from 'styled-components'

const IncineratorDoorContainer = styled.div`
    width: 45%;
    height: 30%;
    position: relative;
    display: flex;
    align-items: end;
    flex-direction: row-reverse;
	border-top: 10px solid #080808;
	box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.25),
		-6px -6px 8px 0 rgba(95, 20, 20, 0.5);

`

const STRONGSIDE = styled.div`
    background-color: #282828;
    height: 100%;
    width: 80%;
    z-index: 20;
	border-left: 5px inset #282828;
	border-right: 8px solid #888888;
	border-top: 5px inset #282828;
`

const WEAKSIDE = styled.div`
    background: rgb(255, 255, 255);
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(232, 232, 232, 1) 47%,
        rgba(196, 192, 192, 1) 100%
    );
    height: 100%;
    width: 20%;
    z-index: 0;
	border-top: 5px inset black;
	border-right: 6px inset #282828;
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
