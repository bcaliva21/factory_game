import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { renderToStaticMarkup } from 'react-dom/server'

// cache
import { GET_GAME_IN_PROGRESS } from '../../../cache/queries'
import { gameInProgressVar } from '../../../cache/'

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

// helper functions
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
export const game = {
    score: 0,
    start: () => {
        console.log('|----------Game Start-----------|')
        const startTime = Date.now()
        gameInProgressVar(true)

        setInterval(() => {
            const score = Date.now() - startTime
            console.log('score: ', score)
            game.score = score
        }, 10)
    },
    over: () => {
        gameInProgressVar(false)
        // save game.score
    },
    resetCycle: (item: (HTMLElement | null)) => {
        // add a function to cycle through itemsInQueue

        const dropContainer = document.getElementById('drop-container')
        const div = createDivAndGenerateNewItem()

        item?.remove()
        dropContainer?.append(div)
    },
    breakCycle: () => { },
    userInputIsCorrect: (item: (HTMLElement | null), userInput: number): boolean => {
        if (item === null) return false
        const upperCaseItemColor = item.style.stroke
        const correctKeycode = COLORS_TO_KEYCODES[upperCaseItemColor]
        return correctKeycode === userInput
    },
}
