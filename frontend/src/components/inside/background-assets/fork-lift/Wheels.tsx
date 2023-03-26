import React from 'react'
import styled from 'styled-components'

const WheelHole = styled.div<{ left: string }>`
    position: absolute;
    bottom: -20%;
    left: ${({ left }) => left};
    height: 45%;
    width: 30%;
    background: rgb(68, 68, 68);
    background: linear-gradient(
        180deg,
        rgba(68, 68, 68, 1) 0%,
        rgba(85, 85, 85, 1) 25%,
        rgba(102, 102, 102, 1) 51%,
        rgba(119, 119, 119, 1) 75%,
        rgba(136, 136, 136, 1) 100%
    );
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

const Wheels = () => (
    <>
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
    </>
)

export default Wheels
