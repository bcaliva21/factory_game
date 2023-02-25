import React from 'react'
import styled from 'styled-components'

// components
import Item from './Item'

// helpers
// import ITEM_ANIMATIONS from './animations/item-animations'

const PipeContainer = styled.div`
    position: absolute;
    height: calc(100vw / 4);
    width: calc(100vw / 8);
    right: calc(80vw / 24);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: red;
`

const PipeSection = styled.div`
    position: relative;
    background-color: grey;
    height: calc(100vw / 18);
    width: calc(100vw / 16);
    z-index: 6;
    border: solid black 1px;
    border-top: solid silver 10px;
`

const FunnelSection = styled.div`
    position: absolute;
    background-color: grey;
    height: calc(100vw / 16);
    width: calc(100vw / 16);
    bottom: calc(100vw / 20);
    transform: rotate(45deg);
    z-index: 6;
    border: solid silver 2px;
`

const Cover = styled.div`
    position: absolute;
    background-color: silver;
    width: calc(100vw / 10);
    height: calc(100vw / 16);
    bottom: calc(100vw / 40);
    z-index: 8;
    border-top: solid silver 10px;
`
const CoverHole = styled.div`
    position: relative;
    background-color: black;
    width: calc(100vw / 16);
    height: calc(100vw / 20);
    margin: auto;
`

const PipeWindow = styled.div`
    position: relative;
    width: calc(100vw / 24);
    height: calc(100vw / 24);
    border-radius: 5%;
    border: solid black 1px;
    background-color: lightblue;
    margin: auto;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CeilingPipe = () => {
    return (
        <PipeContainer>
            <PipeSection>
                <PipeWindow>
                    <Item color="red" animation={''} />
                </PipeWindow>
            </PipeSection>
            <PipeSection>
                <PipeWindow>
                    <Item color="blue" animation={''} />
                </PipeWindow>
            </PipeSection>
            <PipeSection />
            <FunnelSection />
            <Cover>
                <CoverHole />
            </Cover>
        </PipeContainer>
    )
}

export default CeilingPipe
