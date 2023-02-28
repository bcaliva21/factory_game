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

const HDContainer = styled.div`
    position: relative;
    margin-top: 25%;
    background-color: transparent;
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Case = styled.div`
    position: relative;
    width: 50%;
    height: 50%;
    background-color: transparent;
    border: 3px solid black;
    border-radius: 10px;
    z-index: 5;
`

const CaseLine = styled.div`
    width: 99%;
    position: absolute;
    bottom: 25%;
    border: 2px solid black;
    z-index: 10;
`

const blinkGreen = keyframes`
    from {
        background-color: green;
    }
    to {
        background-color: transparent;
    }
`
    
const BlinkingLightGreen = styled.div`
    width: 5%;
    height: 5%;
    background-color: transparent;
    position: absolute;
    bottom: 10%;
    right: 20%;
    border: 1px solid green;
    border-radius: 5%;
    animation: ${blinkGreen} infinite;
    animation-duration: 1s;
`

const blinkYellow = keyframes`
    from {
        background-color: yellow;
    }
    to {
        background-color: transparent;
    }
`
    
const BlinkingLightYellow = styled.div`
    width: 5%;
    height: 5%;
    background-color: transparent;
    position: absolute;
    bottom: 10%;
    right: 30%;
    border: 1px solid yellow;
    border-radius: 5%;
    animation: ${blinkYellow} infinite;
    animation-duration: 1.50s;
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
    animation: ${forward} infinite linear;
    animation-duration: 3s;
`

const ConveyorBelt = () => {
    return (
        <ConveyorBeltContainer>
            <LeftLeg>
                <HDContainer>
                    <Case>
                        <CaseLine />
                        <BlinkingLightGreen />
                        <BlinkingLightYellow />
                    </Case>
                </HDContainer>
            </LeftLeg>
            <RightLeg />
            <TopBelt />
            <BottomBelt />
        </ConveyorBeltContainer>
    )
}

export default ConveyorBelt
