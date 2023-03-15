import React, { useMemo } from 'react'
import styled from 'styled-components'

import { MiniItem, generateRandomColor } from '../utils'

const PileOfItemsContainer = styled.div<{ left: string }>`
    width: 18%;
    height: 15%;
    position: absolute;
    left: ${({ left }) => left};
    bottom: 0;
    display: flex;
    flex-direction: column-reverse;
    z-index: 5;
`

const Row = styled.div`
    width: 100%;
    height: 6px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const PileOfItems = ({ left }: { left: string }) => {
    let keyMultiplier = 0
    const populateRow = (numberOfItems: number) => {
        const row = []
        for (let i = 0; i < numberOfItems; i++) {
            row.push(i)
        }
        keyMultiplier += 1

        return (
            <Row key={`row_${keyMultiplier}`}>
                {row.map((key) => (
                    <MiniItem
                        key={`miniItem_${key * keyMultiplier}`}
                        color={generateRandomColor()}
                    />
                ))}
            </Row>
        )
    }

    const pileOfItems = useMemo(() => {
        const rowAccumulator = []
        for (let i = 41; i > 0; i -= 2) {
            rowAccumulator.push(populateRow(i))
        }
        return <>{rowAccumulator.map((row) => row)}</>
    }, [])

    return (
        <PileOfItemsContainer left={left}>{pileOfItems}</PileOfItemsContainer>
    )
}

export default PileOfItems
