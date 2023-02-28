import React from 'react'
import styled from 'styled-components'

// components
import Item from './Item'

const PipeContainer = styled.div`
    position: absolute;
    height: calc(80vh / 2);
    width: calc(100vw / 8);
    right: calc(80vw / 10);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
`

const PipeSection = styled.div`
    position: relative;
    background-color: grey;
    height: calc(calc(80vh / 2) / 6);
    width: calc(100vw / 16);
    z-index: 6;
    border: solid black 1px;
    border-top: solid silver 10px;
`

const FunnelSection = styled.div`
    position: absolute;
    background-color: grey;
    height: calc(100vw / 20);
    width: calc(100vw / 20);
    bottom: 30%;
    transform: rotate(45deg);
    z-index: 6;
    border: solid silver 2px;
`

const Cover = styled.div`
    position: absolute;
    background-color: silver;
    width: calc(100vw / 11);
    height: calc(100vh / 12);
    bottom: 20%;
    z-index: 8;
    border-top: solid silver 10px;
`
const CoverHole = styled.div`
    position: relative;
    background-color: black;
    width: calc(100vw / 16);
    height: calc(100vh / 16);
    margin: auto;
`

const PipeWindow = styled.div`
    position: relative;
    width: calc(100vh / 24);
    height: calc(calc(80vh / 2) / 9);
    border-radius: 6%;
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
