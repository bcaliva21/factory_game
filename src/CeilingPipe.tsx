import React from 'react'
import styled from 'styled-components'

const PipeContainer = styled.div`
    position: absolute;
    height: 400px;
    width: 250px;
    right: 175px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PipeSection = styled.div`
    position: relative;
    background-color: grey;
    height: 90px;
    width: 100px;
    z-index: 6;
    border: solid black 1px;
    border-top: solid silver 10px;
`

const FunnelSection = styled.div`
    position: absolute;
    background-color: grey;
    height: 105px;
    width: 105px;
    bottom: 70px;
    transform: rotate(45deg);
    z-index: 7;
    border: solid silver 2px;
`

const Cover = styled.div`
    position: absolute;
    background-color: black;
    width: 155px;
    height: 90px;
    bottom: 35px;
    z-index: 8;
    border-top: solid silver 7px;
`

const CeilingPipe = () => {
    return (
        <PipeContainer>
            <PipeSection />
            <PipeSection />
            <PipeSection />
            <FunnelSection />
            <Cover />
        </PipeContainer>
    )
}

export default CeilingPipe
