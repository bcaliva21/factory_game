import React from 'react'
import styled from 'styled-components'

import { TinyItem, generateRandomColor } from '../utils'

const PileOfItemsContainer = styled.div`
    width: 8%;
    height: 15%;
    position: absolute;
    left: 11.5%;
    top: 31vh;
    display: flex;
    flex-direction: column-reverse;
`

const Row = styled.div`
    width: 100%;
    height: 11px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const PileOfItems = () => {
    const populateBottomRow = () => {
        const row = []
        for (let i = 0; i < 9; i++) {
            row.push(i)
        }
        return (
            <Row>
                {row.map(key => <TinyItem key={key} color={generateRandomColor()} />)}
            </Row>
        )
    }

    const populateNext = () => {
        const row = []
        for (let i = 0; i < 7; i++) {
            row.push(i)
        }
        return (
            <Row>
                {row.map(key => <TinyItem key={key} color={generateRandomColor()} />)}
            </Row>
        )
    }

    const populateMiddle = () => {
        const row = []
        for (let i = 0; i < 5; i++) {
            row.push(i)
        }
        return (
            <Row>
                {row.map(key => <TinyItem key={key} color={generateRandomColor()} />)}
            </Row>
        )
    }

    const populateNextToLast = () => {
        const row = []
        for (let i = 0; i < 3; i++) {
            row.push(i)
        }
        return (
            <Row>
                {row.map(key => <TinyItem key={key} color={generateRandomColor()} />)}
            </Row>
        )
    }

    const populateLast = () => {
        const row = []
        for (let i = 0; i < 1; i++) {
            row.push(i)
        }
        return (
            <Row>
                {row.map(key => <TinyItem key={key} color={generateRandomColor()} />)}
            </Row>
        )
    }

    return (
        <PileOfItemsContainer>
            {populateBottomRow()}
            {populateNext()}
            {populateMiddle()}
            {populateNextToLast()}
            {populateLast()}
        </PileOfItemsContainer>
    )
}

export default PileOfItems
