import React from 'react'
import styled from 'styled-components'

import { MiniItem, generateRandomColor } from '../utils'

const PileOfItemsContainer = styled.div`
    width: 16%;
    height: 15%;
    position: absolute;
    left: 2%;
    top: 20vh;
    display: flex;
    flex-direction: column-reverse;
`

const Row = styled.div`
    width: 100%;
    height: 6px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const PileOfItems = () => {
    const populateRow = (numberOfItems: number) => {
        const row = []
        for (let i = 0; i < numberOfItems; i++) {
            row.push(i)
        }
        return (
            <Row>
                {row.map(key => <MiniItem key={key} color={generateRandomColor()} />)}
            </Row>
        )
    }

    const populatePileOfItemsContainer = () => {
        const rowAccumulator = []
        for (let i = 41; i > 0; i-=2) {
            rowAccumulator.push(populateRow(i))
        }
        return (<>
            {rowAccumulator.map(row => row)}
        </>)
    }

    return (
        <PileOfItemsContainer>
            {populatePileOfItemsContainer()}
        </PileOfItemsContainer>
    )
}

export default PileOfItems
