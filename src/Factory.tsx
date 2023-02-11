import React from 'react'
import styled, { keyframes } from 'styled-components'

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

const Door = styled.div`
    width: 25%;
    height: 36%;
    margin-left: 50%;
    background: rgb(203,203,203);
    background: linear-gradient(180deg, rgba(203,203,203,1) 1%, rgba(159,159,159,1) 52%, rgba(103,103,103,1) 100%);
    position: absolute;
    bottom: 0;
    border-right: 2px solid #ffd700;
    border-left: 2px solid #ffd700;
`

const FactoryWindow = styled.div`
    height: 100%;
    width: 10%;
    position: relative;
    background-color: skyblue;
    border: 2px solid #ffd700;
`

const Worker = styled.div`
    width: 100%;
    height: 100%;
`
const Head = styled.div`
    background-color: white;
    border-radius: 50%;
    width: 35%;
    height: 25%;
    position: relative;
    margin: auto;
    margin-top: 3%;
    border-top: calc(100vw / 125) solid yellow;
`

const HatRidge = styled.div`
    background-color: yellow;
    position: absolute;
    top: 0;
    left: -5%;
    width: 110%;
    height: 20%;
`

const Torso = styled.div`
    width: 40%;
    height: 35%;
    margin: auto;
    position: relative;
    background-color: #901000;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    z-index: 10;
`

const TorsoPocket = styled.div`
    position: absolute;
    width: 20%;
    height: 30%;
    background-color: #ffd700;
    right: 15%;
    top: 25%;
    border-bottom-right-radius: 30%;
    border-bottom-left-radius: 30%;
`

const LeftUpperArm = styled.div`
    width: 25%;
    height: 70%;
    transform: rotate(120deg);
    position: absolute;
    left: -25%;
    top: 5%;
    z-index: 5;
`

const wave = keyframes`
    0%, 100% {
        transform: rotate(10deg);
    }
    50% {
        transform: rotate(20deg);
    }
`

const LeftForeArm = styled.div`
    position: absolute;
    width: 25%;
    height: 70%;
    left: -40%;
    top: -32%;
    z-index: 5;
    transform: rotate(10deg);
    animation: ${wave} infinite ease-in-out;
    animation-duration: 6s;
`

const ForeArm = styled.div`
    width: 100%;
    height: 70%;
    position: absolute;
    background-color: #902001;
    bottom: 0;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
`

const Shoulder = styled.div`
    width: 100%;
    height: 35%;
    position: absolute;
    top: 0;
    border-radius: 50%;
    background-color: #902001;
`

const Arm = styled.div`
    width: 100%;
    height: 75%;
    position: absolute;
    top: 10%;
    background-color: #902001;
`

const Cover = styled.div`
    width: 25%;
    height: 35%;
    position: absolute;
    top: 30%;
    z-index: 100;
    border-top-left-radius: 50%;
    background-color: #901001;
`

const JointUpper = styled.div`
    width: 100%;
    height: 35%;
    position: absolute;
    top: 70%;
    background-color: #902001;
    border-radius: 50%;
`

const JointFore = styled.div`
    width: 100%;
    height: 36%;
    position: absolute;
    top: 65%;
    background-color: #902001;
    border-radius: 50%;
`

const Hand = styled.div`
    width: 100%;
    height: 35%;
    position: absolute;
    top: 5%;
    background-color: navy;
    border-radius: 50%;
`
const Pants = styled.div`
    width: 40%;
    height: 10%;
    margin: auto;
    position: relative;
    background-color: navy;
    border-top: 2px solid black;
`

const ClothingSplit = styled.div`
    position: absolute;
    width: 2%;
    height: 100%;
    background-color: white;
    left: 50%;
    border-top-right-radius: 50%;
`

const ClothingButton = styled.div<{ top: string }>`
    position: absolute;
    width: 5%;
    height: 5%;
    background-color: white;
    left: 35%;
    top: ${({ top }) => top && top};
    border-radius: 50%;
`

const PantsPocketLeft = styled.div`
    position: absolute;
    width: 20%;
    height: 50%;
    top: 10%;
    left: 3%;
    background-color: blue;
    border-bottom-right-radius: 50%;
`

const PantsPocketRight = styled.div`
    position: absolute;
    width: 20%;
    height: 50%;
    top: 10%;
    right: 3%;
    background-color: blue;
    border-bottom-left-radius: 50%;
`

const FactoryRoofStackOne = styled.div`
    position: absolute;
    top: -20vh;
    right: 7vw;
    width: 5vw;
    height: 20vh;
    background-color:  #ebebeb;
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
    font-family: system-ui;
    font-weight: bold;
    background-color: #901000;
    border: medium inset #ffd700;
    font-size: larger;
    padding: 0.5% 1.5%;
    top: 20.5vh;
    left: 22vw;
`

const Factory = () => {
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
                        <Worker>
                            <Head>
                                <HatRidge />
                            </Head>
                            <Torso>
                                <Cover />
                                <LeftUpperArm>
                                    <JointUpper />
                                    <Arm />
                                    <Shoulder />
                                </LeftUpperArm>
                                <LeftForeArm>
                                    <Hand />
                                    <JointFore />
                                    <ForeArm />
                                </LeftForeArm>
                                <ClothingSplit />
                                <TorsoPocket />
                                <ClothingButton top='30%' />
                                <ClothingButton top='45%' />
                                <ClothingButton top='60%' />
                            </Torso>
                            <Pants>
                                <ClothingButton top='30%' />
                                <ClothingSplit />
                                <PantsPocketLeft />
                                <PantsPocketRight />
                            </Pants>
                        </Worker>
                    </FactoryWindow>
                    <FactoryWindow />
                    <FactoryWindow />
                    <FactoryWindow />
                </WindowContainer>
                <Door />
            </FactoryBody>
        </FactoryContainer>
    )
}

export default Factory
