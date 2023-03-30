import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { useQuery, useMutation } from '@apollo/client'

// cache
import {
    GET_INSIDE_VARIABLES,
    UPDATE_HIGH_SCORE_MUTATION,
} from '../../cache/queries'
import { isInsideVar } from '../../cache/'

// helpers
import {
    game,
    isGameInProgress,
    isGameOver,
    startGame,
    convertAnimationTimingToMS,
} from './utils'
import { useUser, useUserHighScore } from '../hooks'

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
    background: rgb(136, 136, 136);
`

const Midground = styled.div`
    position: absolute;
    top: 30%;
    width: 100%;
    height: 30%;
    background: linear-gradient(
        180deg,
        rgba(60, 60, 60, 1) 0%,
        rgba(85, 85, 85, 1) 25%,
        rgba(102, 102, 102, 1) 51%,
        rgba(119, 119, 119, 1) 75%,
        rgba(136, 136, 136, 1) 100%
    );
`

const Background = styled.div`
    position: absolute;
    top: 10vh;
    width: 100%;
    height: 20%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(17, 17, 17, 1) 25%,
        rgba(34, 34, 34, 1) 51%,
        rgba(51, 51, 51, 1) 75%,
        rgba(68, 68, 68, 1) 100%
    );
`

const Backdrop = styled.div`
    width: 100%;
    height: 80%;
    position: absolute;
    top: 10%;
    // background-color: #3d3d3d;
    background-color: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: center;
`

const GameoverModal = styled.div<{ gameIsOver: boolean }>`
    width: 30%;
    height: 30%;
    opacity: 0.75;
    background-color: black;
    color: white;
    border: 2px solid white;
    position: relative;
    display: ${({ gameIsOver }) => (gameIsOver ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5px 0;
`

const ModalContainer = styled.div`
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: start;
    justify-content: center;
    z-index: 100;
`

const ResetButton = styled.div`
    font-size: 20px;
    width: 20%;
    height: 50%;
    text-align: center;
    text-justify: center;
    &:hover {
        color: green;
        cursor: pointer;
    }
    padding-top: 5px;
`

const PersonalHighscore = styled.div`
    width: 100%;
    text-align: center;
`

const NewHighScorer = styled.div`
    width: 100%;
    text-align: center;
`

const Inside = () => {
    const { user } = useUser()
    const { setUserHighScore, userHighScore } = useUserHighScore()
    const [intervalId, setIntervalId] = useState<
        ReturnType<typeof setTimeout> | undefined
    >(undefined)
    const { data, loading, error } = useQuery(GET_INSIDE_VARIABLES)

    if (error) console.log('We need to...')
    if (loading) console.log('load')

    const difficulty = data?.difficulty
    const gameState = data?.gameState
    const isInside = data?.isInside
    const items = data?.items
    const gameScore = data?.gameScore
    const topScores = data?.users.slice(0, 3).map((user: any) => user.highScore)
    const normalizedHighScore = Number(userHighScore)

    const gameInProgress: boolean = isGameInProgress(gameState)
    const gameIsOver: boolean = isGameOver(gameState)
    const resetClick = () => startGame(gameInProgress)
    const handleClose = () => isInsideVar(!isInside)
    const timeUntilGameOver = convertAnimationTimingToMS(difficulty || 0)

    const [updateUserHighScore, { data: updateUserData }] = useMutation(
        UPDATE_HIGH_SCORE_MUTATION,
        {
            onCompleted: ({ updateHighScore }) => {
                setUserHighScore(updateHighScore.highScore)
            },
        }
    )

    const killTimingInterval = () => clearTimeout(intervalId)
    const handleKeydownEvent = useCallback((event: KeyboardEvent): void => {
        const userInput = event.key
        if (game.userInputIsCorrect(userInput)) {
            game.resetCycle()
        } else {
            if (intervalId) killTimingInterval()
            const newScore = game.breakCycle(normalizedHighScore)
            if (newScore === normalizedHighScore) return

            updateUserHighScore({
                variables: { id: Number(user), highScore: newScore },
            })
        }
    }, [])

    useEffect(() => {
        if (intervalId) killTimingInterval()

        if (gameInProgress) {
            const id = setTimeout(() => {
                const newScore = game.breakCycle(normalizedHighScore)
                if (newScore === normalizedHighScore) return

                updateUserHighScore({
                    variables: { id: Number(user), highScore: newScore },
                })
            }, timeUntilGameOver)

            setIntervalId(id)
        }
    }, [items])

    useEffect(() => {
        if (gameInProgress) {
            window.addEventListener('keydown', handleKeydownEvent, true)
        }

        return () => {
            window.removeEventListener('keydown', handleKeydownEvent, true)
        }
    }, [gameInProgress])

    // const isTopScorer = () => {
    //     if (topScores?.length > 0) {
    //         for (const [,score] of Object.entries(topScores)) {
    //             if (gameScore > score) {
    //                 return true
    //             }
    //         }
    //     }
    //     return false
    // }

    return (
        <>
            <Container>
                <ModalContainer>
                    <GameoverModal gameIsOver={gameIsOver}>
                        You Lose
                        <ResetButton onClick={resetClick}>Reset</ResetButton>
                    </GameoverModal>
                </ModalContainer>
                <Backdrop>
                    <Foreground>
                        <ConveyorBelt />
                    </Foreground>
                    <Midground></Midground>
                    <Background>
                        <ExitDoor handleClose={handleClose} />
                        <PileOfItems left={'25%'} />
                        <PileOfItems left={'70%'} />
                        <Piping />
                    </Background>
                    <Windows />
                    <Incinerator />
                    <Collector />
                    <ForkLift />
                    <Scaffolding top={'15%'} left={'20%'} />
                    <Scaffolding top={'15%'} left={'0'} />
                    <Scaffolding top={'15%'} left={'40%'} />
                    <CeilingPipe />
                    <DropArea>
                        {gameInProgress && (
                            <Item
                                color={items[2].color}
                                animation={'drop'}
                                id={'in-play'}
                            />
                        )}
                    </DropArea>
                </Backdrop>
            </Container>
        </>
    )
}

export default Inside
