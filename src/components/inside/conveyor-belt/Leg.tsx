import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { useQuery } from '@apollo/client'

// cache
import { GET_GAME_IN_PROGRESS } from '../../../cache/queries'
import { gameInProgressVar } from '../../../cache/'

import power from '../../../assets/power-btn'

// animations
const glowFillAndStroke = keyframes`
    0%, 100% {
        fill: black;
        stroke: black;
        stoke-width: 10px;
    }
    50% {
        fill: #ffe34d;
        stroke: #ffe34d;
        stoke-width: 10px;
    }
`

const makePowerGlow = css`
    animation: ${glowFillAndStroke} infinite linear;
    animation-duration: 2s;
` 

const glowBorder = keyframes`
    0%, 100% {
        border: 2px solid black;
    }
    50% {
        border: 2px solid #ffe34d;
    }  
`

const makeBorderGlow = css`
    animation: ${glowBorder} infinite linear;
    animation-duration: 2s;
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
    background-color: black;
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
    background-color: black;
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
    background-color: black;
    position: absolute;
    bottom: 10%;
    right: 9%;
    border: 1px solid #001f3a;
    border-radius: 5%;
    // animation: ${blinkRed} infinite;
    // animation-duration: 1.5s;
`

const LeftLeg = styled.div`
    position: absolute;
    background-color: grey;
    width: 10%;
    height: 140%;
    left: 0;
    bottom: -10%;
    z-index: 110;
`

const RightLeg = styled.div`
    position: absolute;
    background-color: grey;
    width: 10%;
    height: 120%;
    right: 0;
    bottom: -7%;
    z-index: 110;
`

const Foot = styled.div`
    width: 120%;
    height: 10%;
    background-color: #6c6c6c;
    position: absolute;
    bottom: -5%;
    left: -10%;
`

const ControlsContainer = styled.div`
    position: absolute;
    top: 5%;
    left: -20%;
    background-color: #282828;
    width: 140%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PowerContainer = styled.div<{ gameInProgress: boolean }>`
    width: 50%;
    height: 60%;
    background-color: #6c6c6c;
    border: 2px solid ${({ gameInProgress }) => gameInProgress ? '#004b00' : 'black' };
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ gameInProgress }) => !gameInProgress && makeBorderGlow }
`

const PowerButton = styled.svg<{ gameInProgress: boolean }>`
    width: 70%;
    height: 70%;
    ${({ gameInProgress }) => !gameInProgress && makePowerGlow }
    stroke: ${({ gameInProgress }) => gameInProgress ? '#004b00' : 'black' };
    fill: ${({ gameInProgress }) => gameInProgress ? '#004b00' : 'black' };
    stoke-width: 10px;
    &: hover {
        cursor: pointer;
    }
`

const CaseLine = styled.div`
    width: 98%;
    position: absolute;
    bottom: 25%;
    border: 3px solid black;
`

const Leg = ({ side }: { side: string; }) => {
    const { data, loading, error } = useQuery(GET_GAME_IN_PROGRESS)

    if (error) console.log('oops...')
    if (loading) console.log('loading...')

    const gameInProgress = data.gameInProgress

    const powerButtonClick = () => {
        gameInProgressVar(true)
    }

    return (
        side === 'left'
            ? (
                <LeftLeg>
                    <Foot />
                    <ControlsContainer>
                        <PowerContainer gameInProgress={gameInProgress}>
                            <PowerButton
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                onClick={powerButtonClick}
                                gameInProgress={gameInProgress}
                            >
                                <path d={power} />
                            </PowerButton>
                        </PowerContainer>
                            {/* <CaseLine />
                            <BlinkingLightGreen />
                            <BlinkingLightYellow />
                            <BlinkingLightRed /> */}
                    </ControlsContainer>
                </LeftLeg>
            )
            : (
            <RightLeg>
                <Foot />
            </RightLeg>
            )
    )
}

export default Leg
