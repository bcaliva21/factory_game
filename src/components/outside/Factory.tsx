import react, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Worker from './Worker'
import { Inside } from '../inside'

const FactoryContainer = styled.div`
    width: 70%;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`

const FactoryRoofSection = styled.div`
    position: relative;
    border-right: calc(100vw / 16.75) solid transparent;
    border-left: calc(100vw / 16.75) solid #901000;
    border-bottom: calc(100vw / 36) solid #901000;
    border-top: calc(100vw / 36) solid transparent;
    display: inline-block;
    transform: translateY(calc(100vw / -18));
    z-index: 5;
`

const WindowContainer = styled.div`
    position: absolute;
    top: 25%;
    width: 100%;
    height: 18%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const DoorText = styled.div`
    width: 50%;
    height 30%;
    background-color: transparent;
    color: transparent;
    position: absolute;
    top: 25%;
    left: calc(100vw / 30);
    transition: 0.5s ease-in-out;
`

const Door = styled.div`
    width: 25%;
    height: 36%;
    margin-left: 50%;
    background: rgb(203, 203, 203);
    background: linear-gradient(
        180deg,
        rgba(89, 89, 89, 1) 1%,
        rgba(51, 51, 51, 1) 52%,
        rgba(13, 13, 13, 1) 100%
    );
    position: absolute;
    bottom: 0;
    border-right: 2px solid #ffd700;
    border-left: 2px solid #ffd700;
    transition: 0.5s ease-in-out;

    &:hover {
        cursor: pointer;
        opacity: 0.75;
        ${DoorText} {
            display: block;
            transform: scale(1.2);
            color: #ffd700;
        }
    }
`

const FactoryWindow = styled.div`
    height: 100%;
    width: 10%;
    position: relative;
    background-color: skyblue;
    border: 2px solid #ffd700;
`

const FactoryRoofStackOne = styled.div`
    position: absolute;
    top: -20vh;
    right: 7vw;
    width: 5vw;
    height: 20vh;
    background-color: #ebebeb;
`

const FactoryRoofStackTwo = styled.div`
    position: absolute;
    top: -20vh;
    right: 14vw;
    width: 5vw;
    height: 20vh;
    background-color: #ebebeb;
`

const FactoryBody = styled.div`
    margin: auto;
    margin-top: 25%;
    background-color: #ebebeb;
    height: 40%;
    position: relative;
`

const grow = keyframes`
    from {
        transform: scale(0.25);
        top: -2.5vh;
        left: 1vw;
        opacity: 0.75;
    }
    to {
        transform: scale(1.25);
        top: -9vh;
        left: 0.75vw;
        opacity: 0.25;
    }
`

const DramaticSmoke = styled.div`
    height: 4vh;
    width: 6vh;
    position: absolute;
    background-color: lightgray;
    border-radius: 50%;
    z-index: 1;
    transform: rotate(30deg);
    animation: ${grow} infinite ease-in-out;
    animation-duration: 6s;
`

const SlowestSmoke = styled.div`
    height: 4vh;
    width: 6vh;
    position: absolute;
    background-color: lightgray;
    border-radius: 50%;
    z-index: 1;
    transform: rotate(-30deg);
    animation: ${grow} infinite ease-in-out;
    animation-duration: 5s;
`

const SlowSmoke = styled.div`
    height: 4vh;
    width: 6vh;
    position: absolute;
    background-color: lightgray;
    border-radius: 50%;
    z-index: 1;
    transform: rotate(-50deg);
    animation: ${grow} infinite ease-in-out;
    animation-duration: 4s;
`

const NoDelaySmoke = styled.div`
    height: 4vh;
    width: 6vh;
    position: absolute;
    background-color: lightgray;
    border-radius: 50%;
    z-index: 1;
    transform: rotate(50deg);
    animation: ${grow} infinite ease-in-out;
    animation-duration: 3s;
`

const HalfSecDelaySmoke = styled.div`
    height: 4vh;
    width: 6vh;
    position: absolute;
    background-color: lightgray;
    border-radius: 50%;
    z-index: 1;
    transform: rotate(60deg);
    animation: ${grow} infinite ease-in-out;
    animation-duration: 3s;
    animation-delay: 0.5s;
`

const OneSecDelaySmoke = styled.div`
    height: 4vh;
    width: 6vh;
    position: absolute;
    background-color: lightgray;
    border-radius: 50%;
    z-index: 1;
    transform: rotate(-60deg);
    animation: ${grow} infinite ease-in-out;
    animation-duration: 3s;
    animation-delay: 1s;
`

const Placard = styled.div`
    position: absolute;
    color: #ffd700;
    background-color: #901000;
    border: medium inset #ffd700;
    font-size: larger;
    padding: 0.5% 1.5%;
    top: 20.5vh;
    left: 22vw;
`

const Factory = () => {
    const [isInside, setIsInside] = useState(false)

    const handleDoorClick = () => setIsInside(!isInside)

    return (
        <FactoryContainer>
            <FactoryBody>
                <Placard>Bradley's Component Factory</Placard>
                <FactoryRoofStackOne>
                    <DramaticSmoke />
                    <SlowestSmoke />
                    <SlowSmoke />
                    <NoDelaySmoke />
                    <HalfSecDelaySmoke />
                    <OneSecDelaySmoke />
                </FactoryRoofStackOne>
                <FactoryRoofStackTwo>
                    <DramaticSmoke />
                    <SlowestSmoke />
                    <SlowSmoke />
                    <NoDelaySmoke />
                    <HalfSecDelaySmoke />
                    <OneSecDelaySmoke />
                </FactoryRoofStackTwo>
                <FactoryRoofSection />
                <FactoryRoofSection />
                <FactoryRoofSection />
                <FactoryRoofSection />
                <WindowContainer>
                    <FactoryWindow>
                        <Worker />
                    </FactoryWindow>
                    <FactoryWindow />
                    <FactoryWindow />
                    <FactoryWindow />
                </WindowContainer>
                <Door onClick={handleDoorClick}>
                    <DoorText>Enter</DoorText>
                </Door>
            </FactoryBody>
            <Inside isInside={isInside} setIsInside={setIsInside} />
        </FactoryContainer>
    )
}

export default Factory
