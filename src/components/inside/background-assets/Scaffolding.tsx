import React, { useMemo } from 'react'
import styled from 'styled-components'

import { TinyItem, generateRandomColor } from '../utils'

const ScaffoldingContainer = styled.div<{ top: string; left: string }>`
    width: 10%;
    height: 40%;
    background-color: transparent;
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    z-index: 10;
`

const HorizontalBar = styled.div<{ bottom: string }>`
    width: 80%;
    border: 2px solid black;
    position: absolute;
    bottom: ${({ bottom }) => bottom};
    left: 10%;
`

const TinyHorizontalBar = styled.div<{ bottom: string }>`
    width: 15%;
    border: 1px solid black;
    position: absolute;
    left: 15%;
    bottom: ${({ bottom }) => bottom};
`

const VerticalBar = styled.div<{ left: string }>`
    height: 90%;
    border: 1px solid black;
    position: absolute;
    left: ${({ left }) => left};
    bottom: 0;
`

const DiagBarLeft = styled.div<{ bottom: string }>`
    width: 50%;
    border: 1px solid black;
    position: absolute;
    bottom: ${({ bottom }) => bottom};
    left: 25%;
    transform: rotate(40deg);
`

const DiagBarRight = styled.div<{ bottom: string }>`
    width: 50%;
    border: 1px solid black;
    position: absolute;
    bottom: ${({ bottom }) => bottom};
    left: 25%;
    transform: rotate(-40deg);
`

const RowOnScaffolding = styled.div`
    width: 100%;
    height: 11px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const ItemsContainer = styled.div<{ bottom: string }>`
    width: 40%;
    height: 20%;
    position: absolute;
    bottom: ${({ bottom }) => bottom};
    left: 31%;
    display: flex;
    flex-direction: column-reverse;
`

const Scaffolding = ({ top, left }: { top: string; left: string }) => {
    const renderLadderRungs = () => {
        const rungs = []
        for (let i = 4; i < 43; i++) {
            rungs.push(<TinyHorizontalBar key={i} bottom={`${i * 2}%`} />)
        }
        return <>{rungs.map((rung) => rung)}</>
    }

    const populateRow = () => {
        const row = []
        for (let i = 0; i < 6; i++) {
            row.push(i)
        }
        return (
            <RowOnScaffolding>
                {row.map((item) => (
                    <TinyItem key={item} color={generateRandomColor()} />
                ))}
            </RowOnScaffolding>
        )
    }

	const rows = useMemo(() => {
		const repeat = (times: number) => {
			const rows = []
			for (let i = 1; i < times; i+=1) {
				rows.push(populateRow())	
			}
			return rows 
		}

		return (
			<>
	            <ItemsContainer bottom={'6%'}>
			{repeat(5)}
           </ItemsContainer>
            <ItemsContainer bottom={'26%'}>
			{repeat(5)}
           </ItemsContainer>
            <ItemsContainer bottom={'46%'}>
			{repeat(5)}
           </ItemsContainer>
            <ItemsContainer bottom={'66%'}>
			{repeat(5)}
           </ItemsContainer>
			<ItemsContainer bottom={'86%'}>
                {populateRow()}
                {populateRow()}
           </ItemsContainer>
			</>
		)
	}, [])

    return (
        <ScaffoldingContainer top={top} left={left}>
		{renderLadderRungs()}
		{rows}
            <HorizontalBar bottom={'0'} />
            <RowOnScaffolding />
            <HorizontalBar bottom={'5%'} />
            <DiagBarLeft bottom={'15%'} />
            <DiagBarRight bottom={'35%'} />
            <DiagBarLeft bottom={'55%'} />
            <DiagBarRight bottom={'75%'} />
            <VerticalBar left={'15%'} />
            <VerticalBar left={'30%'} />
            <VerticalBar left={'85%'} />
            <VerticalBar left={'70%'} />
            <HorizontalBar bottom={'25%'} />
            <HorizontalBar bottom={'45%'} />
            <HorizontalBar bottom={'65%'} />
            <HorizontalBar bottom={'85%'} />
        </ScaffoldingContainer>
    )
}

export default Scaffolding
