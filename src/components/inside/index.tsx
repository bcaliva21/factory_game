import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { useQuery } from '@apollo/client'

// cache
import { GET_GAME_STATE_AND_IS_INSIDE } from '../../cache/queries'
import { isInsideVar } from '../../cache/'

// helpers
import { game, isGameInProgress, isGameOver } from './utils'

// components
import ConveyorBelt from './conveyor-belt'
import CeilingPipe from './CeilingPipe'
import DropArea from './DropArea'
import Item from './Item'
import ExitDoor from './background-assets/doors/ExitDoor'
import Windows from './Windows'
import PileOfItems from './background-assets/PileOfItems'
import Scaffolding from './background-assets/Scaffolding'
import ForkLift from './background-assets/fork-lift'
import Incinerator from './background-assets/incinerator'
import Collector from './background-assets/collector'
import Piping from './background-assets/Piping'

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

const Foreground = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(136,136,136);
    background: linear-gradient(180deg, rgba(136,136,136,0.5004595588235294) 0%, rgba(153,153,153,0.6657256652661064) 25%, rgba(170,170,170,1) 51%, rgba(187,187,187,1) 75%, rgba(204,204,204,1) 100%);
`

const Midground = styled.div`
    position: absolute;
    top: 30%;
    width: 100%;
    height: 30%;
    background: rgb(68,68,68);
    background: linear-gradient(180deg, rgba(68,68,68,1) 0%, rgba(85,85,85,1) 25%, rgba(102,102,102,1) 51%, rgba(119,119,119,1) 75%, rgba(136,136,136,1) 100%);
`

const Background = styled.div`
    position: absolute;
    top: 10vh;
    width: 100%;
    height: 20%;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(17,17,17,1) 25%, rgba(34,34,34,1) 51%, rgba(51,51,51,1) 75%, rgba(68,68,68,1) 100%);
`

const Backdrop = styled.div`
    width: 100%;
    height: 80%;
    position: absolute;
    top: 10%;
    // background-color: #3d3d3d;
    background-color: lightgrey;
    display: flex;
    justify-content: center;
`

const GameoverModal = styled.div<{ gameIsOver: boolean; }>`
	width: 20%;
	height: 10%;
	opacity: 0.75;
	z-index: 1000;
	background-color: black;
	color: white;
	border: 2px solid white;
	position: absolute;
	bottom: 30%;
	right: 50%;
	display: ${({ gameIsOver }) => gameIsOver ? 'block' : 'none' };
`

const Inside = () => {
    const { data, loading, error } = useQuery(GET_GAME_STATE_AND_IS_INSIDE)

    if (error) console.log('We need to...')
    if (loading) console.log('think of what to do for these cases')

    const isInside = data.isInside
	const gameState = data.gameState

	const gameInProgress: boolean = isGameInProgress(gameState)
	const gameIsOver: boolean = isGameOver(gameState)

    useEffect(() => {
        if (gameInProgress) {
            window.addEventListener('keydown', (event) => {
                const userInput = event.keyCode
                const itemInPlay = document.getElementById('in-play')
    
                if (game.userInputIsCorrect(itemInPlay, userInput)) {
					game.resetCycle(itemInPlay)
					return
				} else {
					game.breakCycle()
				} 
            })
        }
    }, [gameInProgress])

    const handleClose = () => isInsideVar(!isInside)

    return (
		<>
			<GameoverModal gameIsOver={gameIsOver} >You Lose</GameoverModal>
			<Container>
				 <Backdrop>
                 <Foreground>
                    <ConveyorBelt />
                </Foreground>
                <Midground>

                </Midground>
                <Background>
                    <ExitDoor handleClose={handleClose}/>
                    <PileOfItems />
					<Piping />
                </Background>
                <Windows />
                <Incinerator />
                <Collector />
                <ForkLift />
                <Scaffolding top={'15%'} left={'30%'} />
                <Scaffolding top={'15%'} left={'40%'} />
                <CeilingPipe gameInProgress={gameInProgress} />
                <DropArea>
                    {gameInProgress && <Item color="green" animation="drop" id="in-play"/>}
                </DropArea>
				</Backdrop>
			</Container>
		</>

    )
}

export default Inside
