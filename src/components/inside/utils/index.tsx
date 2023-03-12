import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { unmountComponentAtNode } from 'react-dom'

// cache
import {
    gameStateVar,
    gameScoreVar,
    difficultyVar,
    itemsVar,
    itemsRemovedCountVar,
} from '../../../cache'

// components
import Item from '../Item'
import {
    renderToStaticMarkup,
    renderToStaticNodeStream,
} from 'react-dom/server'

export const KEYCODES = {
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
}

export const COLORS = ['red', 'blue', 'green', 'yellow']

export const COLORS_TO_KEYCODES: { [index: string]: number } = {
    red: 40,
    yellow: 37,
    blue: 39,
    green: 38,
}

export const ANIMATION_TIMINGS: string[] = [
    '9s',
    '8s',
    '7s',
    '6s',
    '5s',
    '4s',
    '3s',
    '2s',
    '1s',
    '0.75s',
    '0.5s',
    '0.25s',
    '0.2s',
    '0.15s',
    '0.1s',
]

// styled components
export const TinyItem = styled.div<{ color: string }>`
    width: 10px;
    height: 10px;
    background-color: ${({ color }) => color};
    margin-right: 1px;
`

export const MiniItem = styled.div<{ color: string }>`
    width: 5px;
    height: 5px;
    background-color: ${({ color }) => color};
    margin-right: 1px;
    margin-top: 1px;
`

// types
export enum GAME_STATE_TYPES {
    NOT_STARTED = 'not_started',
    IN_PROGRESS = 'in_progress',
    OVER = 'over',
}

export interface IGame {
    id: number
    start: () => void
    resetCycle: () => void
    breakCycle: () => void
    clearState: () => void
    userInputIsCorrect: (userInput: number) => boolean
}

export interface ItemProps {
    color: string
    animation: string
}

// helper functions
export const isGameInProgress = (gameState: GAME_STATE_TYPES) => {
    return gameState === GAME_STATE_TYPES.IN_PROGRESS
}

export const isGameOver = (gameState: GAME_STATE_TYPES) => {
    return gameState === GAME_STATE_TYPES.OVER
}

export const incrementDifficulty = () => difficultyVar(difficultyVar() + 1)

export const incrementItemsRemovedCount = () =>
    itemsRemovedCountVar(itemsRemovedCountVar() + 1)

export const difficultyNeedsIncrement = () => {
    const itemsRemovedCount = itemsRemovedCountVar()
    const remainder = itemsRemovedCount % 10
    return remainder === 0
}

export const startGame = (gameInProgress: boolean) =>
    !gameInProgress && game.start()

export const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * 4)
    return COLORS[randomIndex]
}

export const convertAnimationTimingToMS = (difficulty: number) => {
    return 1250 * parseFloat(ANIMATION_TIMINGS[difficulty].split('s')[0])
}

const generateItemProps = (animation: string) => ({
    animation,
    color: generateRandomColor(),
})

const generateItemsForGameStart = () => {
    const initialItems = [
        generateItemProps(''),
        generateItemProps(''),
        generateItemProps('drop'),
    ]
    return initialItems
}

// game object
export const game: IGame = {
    id: 0,
    start: () => {
        game.clearState()
        itemsVar(generateItemsForGameStart())
        console.log('|----------Game Start-----------|')
        console.log('init items: ', itemsVar())
        const startTime = Date.now()
        gameStateVar(GAME_STATE_TYPES.IN_PROGRESS)
        game.id = setInterval(() => {
            const score = Date.now() - startTime
            gameScoreVar(score + itemsRemovedCountVar() * 1000)
        }, 10)
    },
    resetCycle: () => {
        incrementItemsRemovedCount()
        if (difficultyNeedsIncrement()) {
            incrementDifficulty()
        }

        const [itemInQueueLast, itemInQueueNext] = itemsVar()
        const removeMe = document.getElementById('in-play')
        if (!removeMe) {
            console.log('panic')
            return
        }
        removeMe.style.animation = 'none'
        void removeMe.offsetWidth
        removeMe.style.animation = ''

        itemsVar(
            [].concat([generateItemProps(''), itemInQueueLast, itemInQueueNext])
        )
    },
    breakCycle: () => {
        gameStateVar(GAME_STATE_TYPES.OVER)
        clearInterval(game.id)
        console.log('|________final score________| ', gameScoreVar())
        // save game score
    },
    clearState: () => {
        gameScoreVar(0)
        itemsRemovedCountVar(0)
        difficultyVar(0)
        gameStateVar(GAME_STATE_TYPES.IN_PROGRESS)
        itemsVar([])
    },
    userInputIsCorrect: (userInput: number): boolean => {
        console.log('userinputiscorrect itemsVar: ', itemsVar())
        if (itemsVar()[2] === undefined) return false
        const upperCaseItemColor = itemsVar()[2].color
        const correctKeycode = COLORS_TO_KEYCODES[upperCaseItemColor]
        return correctKeycode === userInput
    },
}
