import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import power from '../../assets/power-btn'

const ConveyorBeltContainer = styled.div`
    position: absolute;
    background-color: yellow;
    width: 100%;
    height: 30%;
    bottom: 0;
`

const radiate = keyframes`
    0%, 100% {
        fill: black;
    }
    50% {
        fill: green;
    }
`

const PowerButton = styled.svg<{ gameInProgress: boolean }>`
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 25%;
    height: 25%;
    fill: ${({ gameInProgress }) => gameInProgress && 'green'};
    stroke: ${({ gameInProgress }) => gameInProgress && 'black'};
    stroke-width: 10px;
    &: hover {
        cursor: pointer;
        animation: ${radiate} infinite linear;
        animation-duration: 2s;
    }
`

const LeftLeg = styled.div`
    position: absolute;
    background-color: grey;
    width: 10%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: 110;
`

const HDContainer = styled.div`
    position: relative;
    margin-top: 25%;
    background-color: transparent;
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Case = styled.div`
    position: relative;
    width: 70%;
    height: 100%;
    background-color: transparent;
    border: 3px solid black;
    border-radius: 10px;
    z-index: 5;
`

const CaseLine = styled.div`
    width: 99%;
    position: absolute;
    bottom: 25%;
    border: 2px solid black;
    z-index: 10;
`

const blinkGreen = keyframes`
    from {
        background-color: green;
    }
    to {
        background-color: transparent;
    }
`

const blinkYellow = keyframes`
    from {
        background-color: yellow;
    }
    to {
        background-color: transparent;
    }
`

const BlinkingLightGreen = styled.div`
    width: 7%;
    height: 5%;
    background-color: transparent;
    position: absolute;
    bottom: 10%;
    right: 20%;
    border: 1px solid green;
    border-radius: 5%;
    animation: ${blinkGreen} infinite;
    animation-duration: 1s;
`

const BlinkingLightYellow = styled.div`
    width: 7%;
    height: 5%;
    background-color: transparent;
    position: absolute;
    bottom: 10%;
    right: 30%;
    border: 1px solid yellow;
    border-radius: 5%;
    animation: ${blinkYellow} infinite;
    animation-duration: 1.5s;
`

const RightLeg = styled.div`
    position: absolute;
    background-color: grey;
    width: 10%;
    height: 100%;
    right: 0;
    bottom: 0;
    z-index: 110;
`

const forward = keyframes`
    0% {
        left: 6%;
    }
    100% {
        left: 2%;
    }
`

const moveBeltForward = css`
    animation: ${forward} infinite linear;
    animation-duration: 3s;
`

const Belt = styled.div<{ top: string; gameInProgress: boolean }>`
    position: absolute;
    background-color: transparent;
    border: 5px dashed black;
    width: 90%;
    top: ${({ top }) => top};
    left: 6%;
    z-index: 105;
    ${({ gameInProgress }) => gameInProgress && moveBeltForward}
`

const ConveyorBelt = ({
    gameInProgress,
    setGameInProgress,
}: {
    gameInProgress: boolean
    setGameInProgress: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const powerButtonClick = () => {
        setGameInProgress(true)
    }

    return (
        <ConveyorBeltContainer>
            <LeftLeg>
                <HDContainer>
                    <Case>
                        <PowerButton
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            onClick={powerButtonClick}
                            gameInProgress={gameInProgress}
                        >
                            <path d={power} />
                        </PowerButton>
                        <CaseLine />
                        <BlinkingLightGreen />
                        <BlinkingLightYellow />
                    </Case>
                </HDContainer>
            </LeftLeg>
            <RightLeg />
            <Belt top="15%" gameInProgress={gameInProgress} />
            <Belt top="80%" gameInProgress={gameInProgress} />
        </ConveyorBeltContainer>
    )
}

export default ConveyorBelt
