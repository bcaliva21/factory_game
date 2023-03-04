import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useQuery } from '@apollo/client'

// cache
import { GET_IS_INSIDE_AND_GAME_IN_PROGRESS } from '../../cache/queries'
import { isInsideVar, gameInProgressVar } from '../../cache/'

// components
import ConveyorBelt from './conveyor-belt/'
import CeilingPipe from './CeilingPipe'
import DropArea from './DropArea'
import Item from './Item'

import close from '../../assets/close'

const radiate = keyframes`
    0%, 100% {
        fill: black;
    }
    50% {
        fill: red;
        stroke: black;
    }
`

const Banner = styled.div`
    width: 100%;
    height: 20%;
    background-color: white;
    position: absolute;
    top: 0;
`

const Container = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    color: white;
    background-color: #b0d9ff;
    border-top-left-radius: 5%; 
    border-top-right-radius: 5%;
    background-color: #3d3d3d;
`

const CeilingDesign = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 10%;
    background-color: yellow;
`

const Close = styled.svg`
    height: 20%;
    align-items: center;
    justify-content: center;
    position: absolute;
    fill: black;
    top: 10%;
    right: 1%;

    &:hover {
        cursor: pointer;
        animation: ${radiate} infinite linear;
        animation-duration: 2s;
    }
`

const Backdrop = styled.div`
    width: 100%;
    height: 80%;
    position: absolute;
    top: 10%;
    // background-color: #3d3d3d;
    background-color: red;
    display: flex;
    justify-content: center;
`

// const WarningLight = styled.div<{ left: string }>`
//     width: 2%;
//     height: 3%;
//     position: absolute;
//     top: 0;
//     left: ${({ left }) => left};
//     background-color: red;
//     border-top: 10px solid grey;
//     border-right: 20px solid #000a13;
//     border-bottom: 10px solid #000a13;
//     border-left: 20px solid #000a13;
// `

// const BeamLeft = styled.div`
//     width: 47%;
//     height: 100%;
//     position: absolute;
//     top: 1%;
//     left: 1px;
//     background: rgb(255, 0, 0);
//     background: linear-gradient(
//         90deg,
//         rgba(255, 0, 0, 1) 0%,
//         rgba(255, 250, 0, 1) 52%,
//         rgba(255, 246, 0, 1) 100%
//     );
// `

// const BeamRight = styled.div`
//     width: 47%;
//     height: 100%;
//     position: absolute;
//     top: 1%;
//     right: 1px;
//     background: rgb(255, 0, 0);
//     background: linear-gradient(
//         270deg,
//         rgba(255, 0, 0, 1) 0%,
//         rgba(255, 250, 0, 1) 52%,
//         rgba(255, 246, 0, 1) 100%
//     );
// `

const Inside = () => {
    const { data, loading, error } = useQuery(GET_IS_INSIDE_AND_GAME_IN_PROGRESS)

    if (error) console.log('We need to...')
    if (loading) console.log('think of what to do for these cases')

    const isInside = data.isInside
    const gameInProgress = data.gameInProgress

    const handleClose = () => isInsideVar(!isInside)

    return (
        <Container>
            <CeilingDesign />
            <Backdrop>
                <Banner>
                    <Close
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        onClick={handleClose}
                    >
                        <path d={close} />
                    </Close>
                </Banner>
                <CeilingPipe gameInProgress={gameInProgress} />
                <DropArea>
                    {gameInProgress && <Item color="green" animation="drop" />}
                </DropArea>
                <ConveyorBelt />
            </Backdrop>
        </Container>
    )
}

export default Inside
