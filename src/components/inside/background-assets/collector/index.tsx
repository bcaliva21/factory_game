import React from 'react'
import styled from 'styled-components'

import { TinyItem, generateRandomColor } from '../../utils'

const CollectorContainer = styled.div`
    width: 18%;
    height: 35%;
    position: absolute;
    top: 21%;
    right: 1%;
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column-reverse;
    z-index: 10;
`

const CollectorBottomSection = styled.div`
    height: 60%;
    width: 100%;
    position: relative;
    background-color: navy;
    display: flex;
    align-items: end;
    justify-content: center;
`

const CollectorItemSection = styled.div`
    height: 30%;
    width: 84%;
    position: relative;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: end;
`

const ItemSectionGlass = styled.div`
    height: 35%;
    width: 84%;
    position: absolute;
    top: 5%;
    background-color: skyblue;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    opacity: 0.5;
    z-index: 50;
`

const ItemCollectorRow = styled.div`
    display: flex;
    flex-direction: row;
    height: 11px;
    widht: 100%;
    align-items: center;
    justify-content: center;
`

const BuildingStripe = styled.div`
    width: 102%;
    height: 2%;
    background-color: slategrey;
    position: absolute;
    top: 45%;
`

const BuildingStripeTwo = styled.div`
    width: 102%;
    height: 2%;
    background-color: slategrey;
    position: absolute;
    top: 48%;
`

const Collector = () => {
    let keyMultiplier: number = 0
    const populateRow = (n: number) => {
        const row: number[] = []
        for (let i = 0; i < n; i++) {
            row.push(i)
        }
        keyMultiplier += 1
        return (
            <ItemCollectorRow key={`collector-row_${keyMultiplier}`}>
                {row.map((item) => (
                    <TinyItem
                        color={generateRandomColor()}
                        key={`${item}-item`}
                    />
                ))}
            </ItemCollectorRow>
        )
    }

    const populateContainer = () => {
        return [
            populateRow(7),
            populateRow(11),
            populateRow(18),
            populateRow(19),
            populateRow(20),
            populateRow(20),
            populateRow(21),
        ]
    }

    return (
        <CollectorContainer>
            <CollectorBottomSection>
           </CollectorBottomSection>
            <BuildingStripe />
            <BuildingStripeTwo />
            <ItemSectionGlass />
            <CollectorItemSection>{populateContainer()}</CollectorItemSection>
        </CollectorContainer>
    )
}

export default Collector
