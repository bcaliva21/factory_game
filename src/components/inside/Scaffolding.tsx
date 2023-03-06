import React from 'react'
import styled from 'styled-components'

const ScaffoldingContainer = styled.div`
    width: 10%;
    height: 40%;
    background-color: transparent;
    position: absolute;
    top: 15%;
    left: 40%;
`

const HorizontalBar = styled.div<{ bottom: string; }>`
    width: 80%;
    border: 2px solid black;
    position: absolute;
    bottom: ${({ bottom }) => bottom };
    left: 10%;
`

const TinyHorizontalBar = styled.div<{ bottom: string; }>`
    width: 15%;
    border: 1px solid black;
    position: absolute;
    left: 15%;
    bottom: ${({ bottom }) => bottom };
`

const VerticalBar = styled.div<{ left: string; }>`
    height: 90%;
    border: 1px solid black;
    position: absolute;
    left: ${({ left }) => left };
    bottom: 0;
`

const DiagBarLeft = styled.div<{ bottom: string; }>`
    width: 50%;
    border: 1px solid black;
    position: absolute;
    bottom: ${({ bottom }) => bottom };
    left: 25%;
    transform: rotate(40deg);
`

const DiagBarRight = styled.div<{ bottom: string; }>`
    width: 50%;
    border: 1px solid black;
    position: absolute;
    bottom: ${({ bottom }) => bottom };
    left: 25%;
    transform: rotate(-40deg);
`

const Scaffolding = () => {

    const renderLadderRungs = () => {
        const rungs = []
        for (let i = 4; i < 43; i++) {
            rungs.push(<TinyHorizontalBar key={i} bottom={`${i * 2}%`} />)
        }
        return (
            <>{rungs.map(rung => rung)}</>
        )
    }

    return (
        <ScaffoldingContainer>
            {renderLadderRungs()}
            <HorizontalBar bottom={'0'}/>
            <HorizontalBar bottom={'5%'}/>
            <DiagBarLeft  bottom={'15%'}/>
            <DiagBarRight bottom={'35%'} />
            <DiagBarLeft  bottom={'55%'}/>
            <DiagBarRight bottom={'75%'} />
            <VerticalBar left={'15%'} />
            <VerticalBar left={'30%'} />
            <VerticalBar left={'85%'} />
            <VerticalBar left={'70%'} />
            <HorizontalBar bottom={'25%'}/>
            <HorizontalBar bottom={'45%'}/>
            <HorizontalBar bottom={'65%'}/>
            <HorizontalBar bottom={'85%'}/>
        </ScaffoldingContainer>
    )
}

export default Scaffolding
