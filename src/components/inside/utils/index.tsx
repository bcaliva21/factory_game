import styled from 'styled-components'
import { renderToStaticMarkup } from 'react-dom/server'
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

// game object
export const game = {
    init: () => { },
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

export const createDivAndGenerateNewItem = () => {
    const div = document.createElement('div')
    const itemAsHTML = renderToStaticMarkup(
        <Item color={generateRandomColor()} animation={'drop'} id={'in-play'} />
    )

    div.innerHTML = itemAsHTML

    return div
}
