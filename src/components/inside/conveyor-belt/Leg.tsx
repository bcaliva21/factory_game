import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { useQuery } from '@apollo/client'

// cache
import { GET_GAME_IN_PROGRESS } from '../../../cache/queries'
import { gameInProgressVar } from '../../../cache/'

import power from '../../../assets/power-btn'

// animations
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

const glowCase = keyframes`
    0%, 100% {
        background-color: #ebf5ff;
    }
    50% {
        background-color: #ffe34d;
    }  
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
    height: 120%;
    left: 0;
    bottom: 0;
    z-index: 110;
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

const HDContainer = styled.div`
    position: absolute;
    top: 5%;
    left: -20%;
    background-color: red;
    width: 140%;
    height: 30%;
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
            )
            : <RightLeg />
    )
}

export default Leg
