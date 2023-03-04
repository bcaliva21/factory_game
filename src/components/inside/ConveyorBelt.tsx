import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import power from '../../assets/power-btn'

const ConveyorBeltContainer = styled.div`
    position: absolute;
    background-color: #000a13;
    width: 100%;
    height: 30%;
    bottom: 0;
`

const radiatePower = keyframes`
    0%, 100% {
        fill: black;
        stroke: black;
        stoke-width: 10px;
    }
    50% {
        fill: #64a500;
        stroke: black;
        stoke-width: 10px;
    }
`

const PowerButton = styled.svg<{ gameInProgress: boolean }>`
    position: absolute;
    top: 8%;
    left: 24%;
    width: 50%;
    height: 50%;
    animation: ${radiatePower} infinite linear;
    animation-duration: 2s;
    &: hover {
        cursor: pointer;
    }
`

const LeftLeg = styled.div`
    position: absolute;
    background-color: #001f3a;
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

const glowCase = keyframes`
    0%, 100% {
        background-color: #ebf5ff;
    }
    50% {
        background-color: #ffe34d;
    }  
`

const Case = styled.div`
    position: relative;
    width: 70%;
    height: 100%;
    background-color: #ebf5ff;
    border: 3px solid black;
    border-radius: 10px;
    z-index: 5;
    animation: ${glowCase} infinite linear;
    animation-duration: 2s;
`

const CaseLine = styled.div`
    width: 98%;
    position: absolute;
    bottom: 25%;
    border: 3px solid black;
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

const blinkRed = keyframes`
    from {
        background-color: red;
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
    border: 1px solid #001f3a;
    border-radius: 5%;
    // animation: ${blinkGreen} infinite;
    // animation-duration: 1s;
`

const BlinkingLightYellow = styled.div`
    width: 7%;
    height: 5%;
    background-color: transparent;
    position: absolute;
    bottom: 10%;
    right: 30%;
    border: 1px solid #001f3a;
    border-radius: 5%;
    // animation: ${blinkYellow} infinite;
    // animation-duration: 1.5s;
`

const BlinkingLightRed = styled.div`
    width: 7%;
    height: 5%;
    background-color: transparent;
    position: absolute;
    bottom: 10%;
    right: 9%;
    border: 1px solid #001f3a;
    border-radius: 5%;
    // animation: ${blinkRed} infinite;
    // animation-duration: 1.5s;
`

const RightLeg = styled.div`
    position: absolute;
    background-color: #001f3a;
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
    border: 5px dashed #000a13;
    width: 90%;
    top: ${({ top }) => top};
    left: 6%;
    z-index: 1;
    ${({ gameInProgress }) => gameInProgress && moveBeltForward}
`

const BeltContainer = styled.div`
    position: absolute;
    top: 15%;
    height: 70%;
    width: 100%;
    background-color: #feffff;
`

const TrickyDiv = styled.div`
    position: absolute;
    top: 0;
    height: 15%;
    width: 100%;
    background-color: #000a13;
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
            <TrickyDiv />
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
                        <BlinkingLightRed />
                    </Case>
                </HDContainer>
            </LeftLeg>
            <RightLeg />
            <BeltContainer>
                <Belt top="15%" gameInProgress={gameInProgress} />
                <Belt top="80%" gameInProgress={gameInProgress} />
            </BeltContainer>
        </ConveyorBeltContainer>
    )
}

export default ConveyorBelt
