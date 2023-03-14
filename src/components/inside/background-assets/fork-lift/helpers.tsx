import styled from 'styled-components'
import { renderToStaticMarkup } from 'react-dom/server'

import { TinyItem, generateRandomColor } from '../../utils/'

export const CargoRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 11px;
`

export const CargoContainer = styled.div`
    width: 70%;
    height: 60%;
    position: absolute;
    bottom: 10%;
    right: 20%;
    border-bottom: 3px solid tan;
    display: flex;
    flex-direction: column-reverse;
    justify-content: end;
`

export const populateRow = () => {
    const row: number[] = []
    for (let i = 0; i < 3; i++) {
        row.push(i)
    }
    return (
        <CargoRow>
            {row.map((item) => (
                <TinyItem key={item} color={generateRandomColor()} />
            ))}
        </CargoRow>
    )
}

export const removeCargo = () => {
    const cargo = document.getElementById('cargo-container')
    cargo?.remove()
}

export const setRemoveCargoTimeout = () => {
    setTimeout(() => {
        setInterval(() => {
            removeCargo()
        }, 20000)
        removeCargo()
    }, 10000)
}

export const appendCargo = () => {
    const liftComponent = document.getElementById('lift-component')
    const CargoContainerAsHTML = renderToStaticMarkup(
        <CargoContainer id={'cargo-container'}>
            {populateRow()}
            {populateRow()}
            {populateRow()}
            {populateRow()}
        </CargoContainer>
    )
    const div = document.createElement('div')
    div.innerHTML = CargoContainerAsHTML
    liftComponent?.append(div)
}

export const setAppendCargoTimeout = () => {
    setTimeout(() => {
        appendCargo()
        setInterval(() => {
            appendCargo()
        }, 20000)
    }, 20000)
}
