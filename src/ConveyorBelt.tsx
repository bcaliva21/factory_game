import React from 'react'
import styled, { keyframes } from 'styled-components'

const ConveyorBeltContainer = styled.div`
    position: absolute;
    background-color: yellow;
    width: 100%;
    height: 30%;
    bottom: 0;
`

const LeftLeg = styled.div`
    position: absolute;
    background-color: grey;
    width: 10%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: 110;
`

const RightLeg = styled.div`
    position: absolute;
    background-color: grey;
    width: 10%;
    height: 100%;
    right: 0;
    bottom: 0;
    z-index: 110;
`

const forward = keyframes`
    0% {
        left: 6%;
    }
    100% {
        left: 2%;
    }
`

const backward = keyframes`
    0% {
        left: 2%;
    }
    100% {
        left: 6%;
    }
`

const TopBelt = styled.div`
    position: absolute;
    background-color: transparent;
    border: 5px dashed black;
    width: 90%;
    top: 15%;
    left: 6%;
    z-index: 105;
    animation: ${forward} infinite linear;
    animation-duration: 3s;
`

const BottomBelt = styled.div`
    position: absolute;
    background-color: transparent;
    border: 5px dashed black;
    width: 90%;
    bottom: 15%;
    left: 2%;
    z-index: 105;
    animation: ${backward} infinite linear;
    animation-duration: 3s;
`

const ConveyorBelt = () => {
    return (
        <ConveyorBeltContainer>
            <LeftLeg />
            <RightLeg />
            <TopBelt />
            <BottomBelt />
        </ConveyorBeltContainer>
    )
}

export default ConveyorBelt
