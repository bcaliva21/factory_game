import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { renderToStaticMarkup } from 'react-dom/server'

// cache
import { GET_GAME_STATE } from '../../../cache/queries'
import { gameStateVar, gameScoreVar } from '../../../cache'

// constants
import { COLORS_TO_KEYCODES, COLORS } from '../../constants'

// components
import Item from '../Item'

// styled components
export const TinyItem = styled.div<{ color: string; }>`
    width: 10px;
    height: 10px;
    background-color: ${({ color }) => color};
    margin-right: 1px;
`

export const MiniItem = styled.div<{ color: string; }>`
    width: 5px;
    height: 5px;
    background-color: ${({ color }) => color};
    margin-right: 1px;
`

// types
export enum GAME_STATE_TYPES {
	NOT_STARTED = 'not_started',
	IN_PROGRESS = 'in_progress',
	OVER = 'over',
}

export interface IGame {
	id: number,
	start: () => void,
	resetCycle: (item: (HTMLElement | null)) => void,
	breakCycle: () => void,
	userInputIsCorrect: (item: (HTMLElement | null), userInput: number) => boolean ,
}

const ANIMATION_TIMINGS: string[] = ['9s', '8s', '7s', '6s', '5s', '4s', '3s', '2s', '1s', '0.75s', '0.5s', '0.25s', '0.2s', '0.15s', '0.1s']

// helper functions
export const isGameInProgress = (gameState: GAME_STATE_TYPES) => {
	return gameState === GAME_STATE_TYPES.IN_PROGRESS
}
export const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * 4)
    return COLORS[randomIndex]
}

export const createDivAndGenerateNewItem = () => {
    const div = document.createElement('div')
    const itemAsHTML = renderToStaticMarkup(
        <Item color={generateRandomColor()} animation={'drop'} id={'in-play'} />
    )

    div.innerHTML = itemAsHTML

    return div
}

// game object
export const game: IGame = {
	id: 0,
    start: () => {
        console.log('|----------Game Start-----------|')
        const startTime = Date.now()
		gameStateVar(GAME_STATE_TYPES.IN_PROGRESS)
		game.id = setInterval(() => {
            const score = Date.now() - startTime
            // console.log('score: ', score)
			gameScoreVar(score)
        }, 10)
    },
    resetCycle: (item: (HTMLElement | null)) => {
        // add a function to cycle through itemsInQueue

        const dropContainer = document.getElementById('drop-container')
        const div = createDivAndGenerateNewItem()

        item?.remove()
        dropContainer?.append(div)
    },
    breakCycle: () => {
		gameStateVar(GAME_STATE_TYPES.OVER)
		clearInterval(game.id)
		console.log('final score: ', game.score)
		// save game score
	},
    userInputIsCorrect: (item: (HTMLElement | null), userInput: number): boolean => {
        if (item === null) return false
        const upperCaseItemColor = item.style.stroke
        const correctKeycode = COLORS_TO_KEYCODES[upperCaseItemColor]
        return correctKeycode === userInput
    },
}
