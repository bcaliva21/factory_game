import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { useQuery } from '@apollo/client'

// cache
import { GET_GAME_IN_PROGRESS } from '../../../cache/queries'
import { gameInProgressVar } from '../../../cache'

import power from '../../assets/power-btn'

import Leg from './Leg'

const ConveyorBeltContainer = styled.div`
    position: absolute;
    background-color: #3d3d3d;
    width: 100%;
    height: 30%;
    bottom: 0;
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

const BeltContainer = styled.div`
    position: absolute;
    top: 15%;

    height: 70%;
    width: 100%;
`

const Belt = styled.div<{ top: string; gameInProgress: boolean }>`
    position: absolute;
    border: 5px dashed #000a13;
    width: 90%;
    top: ${({ top }) => top};
    left: 6%;
    z-index: 1;
    background-color: grey;
    ${({ gameInProgress }) => gameInProgress && moveBeltForward}
`

const WheelsContainer = styled.div`
    width: 100%;
    height: 20%;
    position: absolute;
    top: 60%;
`

const rotate = keyframes`
    0% {
    }
    100% {
        transform: rotate(-360deg);
    }
`

const rotateWheel = css`
    animation: ${rotate} infinite linear;
    animation-duration: 2s;
`

const Wheel = styled.div<{ gameInProgress: boolean; right: string; }>`
    width: calc(100vh / 40);
    height: calc(100vh / 40);
    position: absolute;
    top: 8%;
    right: ${({ right }) => right};
    background-color: grey;
    border: 2px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    ${({ gameInProgress }) => gameInProgress && rotateWheel}
`

const Spoke = styled.div`
    height: 50%;
    width: 0;
    border: 1px solid black;
`

const ConveyorBelt = () => {
    const { data, loading, error } = useQuery(GET_GAME_IN_PROGRESS)

    if (error) console.log('oops...')
    if (loading) console.log('loading...')

    const gameInProgress = data.gameInProgress

    const populateRightPositions = () => {
        const positions: string[] = []
        const multiplier: number = 7
        for (let i = 1; i < 15; i++) {
            positions.push(`${i * multiplier}%`)
        }
        return positions
    }

    const RIGHT_POSITIONS = populateRightPositions()

    return (
        <ConveyorBeltContainer>
            <BeltContainer>
                <Leg side="right"/>
                <Leg side="left"/>
                <Belt top="55%" gameInProgress={gameInProgress} />
                <WheelsContainer>
                    {RIGHT_POSITIONS.map(position => (
                    <Wheel gameInProgress={gameInProgress} right={position}>
                        <Spoke />
                    </Wheel>
                    ))}
                </WheelsContainer>
                <Belt top="80%" gameInProgress={gameInProgress} />
            </BeltContainer>
        </ConveyorBeltContainer>
    )
}

export default ConveyorBelt
