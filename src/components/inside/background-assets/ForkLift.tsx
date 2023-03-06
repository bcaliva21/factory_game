import React from 'react'
import styled, { keyframes } from 'styled-components'

import { TinyItem, generateRandomColor } from '../utils/'

const travel = keyframes`
    0% {
        transform: scaleX(1);
        right: -10%;
    }
    50% {
        transform: scaleX(1);
        right: 35%;
    }
    51% {
        transform: scaleX(-1);
        right: 35%;
    }
    100% {
        transform: scaleX(-1);
        right: -10%;
    }
`

const ForkLiftContainer = styled.div`
    width: 10%;
    height: 20%;
    position: absolute;
    top: 35%;
    right: -10%;
    display: flex;
    align-items: end;
    justify-content: center;
    animation: ${travel} infinite linear;
    animation-duration: 10s;
`

const ForkLiftBody = styled.div`
    width: 40%;
    height: 28%;
    border-radius: 5%;
    background-color: #901000;
    margin-bottom: 1%;
    position: relative;
`

const ForkLiftCab = styled.div`
    position: absolute;
    top: -60%;
    left: 10%;
    height: 100%;
    width: 40%;
    background-color: gold;
    border-radius: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LiftComponent = styled.div`
    width: 60%;
    height: 180%;
    position: absolute;
    top: -80%;
    left: -60%;
`


const CargoContainer = styled.div`
    width: 70%;
    height: 60%;
    position: absolute;
    bottom: 10%;
    right: 20%;
    border-bottom: 3px solid tan;
    display: flex;
    flex-direction: column-reverse;
    justify-content: end;
`

const CargoRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 11px;
`

const LiftToBodyConnector = styled.div`
    width:  10%;
    border: 2px solid black;
    position: absolute;
    bottom: 15%;
    right: 0;
`

const LiftVerticalSection = styled.div`
    height: 50%;
    border: 2px solid black;
    position: absolute;
    bottom: 5%;
    right: 10%;
`

const LiftHorizontalSeciton = styled.div`
    width: 70%;
    border: 2px solid black;
    position: absolute;
    bottom: 5%;
    right: 10%;
`

const CabWindow = styled.div`
    width: 80%;
    height: 60%;
    background-color: transparent;
    display: flex;
    align-items: end;
    justify-content: end;
`

const DriverContainer = styled.div`
    height: 100%;
    width: 70%;
    position: relative;
    background-color: lightgrey;
`

const DriverHead = styled.div`
    position: absolute;
    top: 20%;
    right: 20%;
    border-radius: 50%;
    background-color: black;
    width: 50%;
    height: 30%;
`

const DriverBody = styled.div`
    position: absolute;
    top: 55%;
    right: 25%;
    border-radius: 30%;
    background-color: black;
    height: 50%;
    width: 40%;
`

const DriverArm = styled.div`
    position: absolute;
    bottom: 20%;
    right: 40%;
    border-radius: 30%;
    background-color: black;
    width: 50%;
    height: 15%;
`

const SteeringWheelContainer = styled.div`
    height: 100%;
    width: 30%;
    position: relative;
    background-color: lightgrey;
    z-index: 10;
`

const SteeringWheel = styled.div`
    width: 100%;
    border: 1px solid black;
    transform: rotate(45deg);
    position: absolute;
    bottom: 20%;
    right: -80%;
`

const BodyToWheel = styled.div`
    width: 100%;
    border: 1px solid black;
    transform: rotate(-50deg);
    position: absolute;
    bottom: 10%;
    right: -65%;
`

const CoverTopFront = styled.div`
    position: absolute;
    top: 0;
    height: 40%;
    width: 10%;
    background-color: lightgrey;
    border-radius: 5%;
`

const WheelHole = styled.div<{ left: string; }>`
    position: absolute;
    bottom: -20%;
    left: ${({ left }) => left};
    height: 45%;
    width: 30%;
    background-color: lightgrey;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ForkLiftWheel = styled.div`
    width: 80%;
    height: 80%;
    background-color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const HubCap = styled.div`
    width: 50%;
    height: 50%;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ForkLift = () => {

    const populateRow = () => {
        const row = []
        for (let i = 0; i < 3; i++) {
            row.push(i)
        }
        return (
            <CargoRow>
                {row.map(item => <TinyItem key={item} color={generateRandomColor()} />)}
            </CargoRow>
        )
    }

    return (
        <ForkLiftContainer>
            <ForkLiftBody>
                <LiftComponent>
                    <CargoContainer>
                        {populateRow()}
                        {populateRow()}
                        {populateRow()}
                        {populateRow()}
                    </CargoContainer>
                    <LiftToBodyConnector />
                        <LiftVerticalSection />
                        <LiftHorizontalSeciton />
                </LiftComponent>
                <CoverTopFront />
                <ForkLiftCab>
                    <CabWindow>
                        <SteeringWheelContainer>
                            <SteeringWheel />
                            <BodyToWheel />
                        </SteeringWheelContainer>
                        <DriverContainer>
                            <DriverHead />
                            <DriverBody />
                            <DriverArm />
                        </DriverContainer>
                    </CabWindow>
                </ForkLiftCab>
                <WheelHole left={'10%'}>
                    <ForkLiftWheel>
                        <HubCap />
                    </ForkLiftWheel>
                </WheelHole>
                <WheelHole left={'60%'}>
                    <ForkLiftWheel>
                        <HubCap />
                    </ForkLiftWheel>
                </WheelHole>
            </ForkLiftBody>
        </ForkLiftContainer>
    )
}

export default ForkLift
