import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'

const EnvironmentContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
`

const DaySkyContainer = styled.div`
    width: 100%;
    height: 50%;
    background-color: #87cefa;
    position: relative;
    opacity: 0.85;
`

const NightSkyContainer = styled.div`
    width: 100%;
    height: 50%;
    background-color: #000080;
    position: relative;
    opacity: 0.85;
`

const GroundContainer = styled.div<{ time: boolean }>`
    width: 100%;
    height: 50%;
    background-color: ${({ time }) => (time ? '#5c7515' : '#0e1103')};
    opacity: 0.9;
`

const Sun = styled.div`
    width: 8vw;
    height: 8vw;
    background-color: yellow;
    position: absolute;
    border-radius: 50%;
    top: 4vw;
    left: 4vw;
    &:hover {
        cursor: pointer;
    }
`

const Moon = styled.div`
    width: 8vw;
    height: 8vw;
    background-color: #ffffcc;
    position: absolute;
    border-radius: 50%;
    top: 4vw;
    left: 4vw;
    &:hover {
        cursor: pointer;
    }
`

const MoonDarkSpot = styled.div`
    width: 7vw;
    height: 7vw;
    background-color: #000080;
    position: absolute;
    border-radius: 50%;
    top: 0vw;
    left: 2vw;
    &:hover {
        cursor: pointer;
    }
`

const CloudContainer = styled.div`
    width: 12vw;
    height: 12vw;
    background-color: transparent;
    position: absolute;
    z-index; 100;
`

const CloudBlobLft = styled.div`
    width: 1.5vw;
    height: 2vh;
    position: absolute;
    border-radius: 50%;
    top: 6vh;
    left: 4vw;
    background-color: white;
`

const CloudBlobRgt = styled.div`
    width: 1.5vw;
    height: 2vh;
    position: absolute;
    border-radius: 50%;
    top: 6vh;
    left: 5vw;
    background-color: white;
`

const CloudBlobTopLft = styled.div`
    width: 1vw;
    height: 1vh;
    position: absolute;
    border-radius: 50%;
    top: 5.15vh;
    left: 4.25vw;
    background-color: white;
`

const CloudBlobTopRgt = styled.div`
    width: 1vw;
    height: 1vh;
    position: absolute;
    border-radius: 50%;
    top: 5.4vh;
    left: 4.7vw;
    background-color: white;
`

const CloudBlobBtm = styled.div`
    width: 1.5vw;
    height: 2vh;
    position: absolute;
    border-radius: 50%;
    top: 7vh;
    left: 4.5vw;
    background-color: white;
`

const CloudBlobBtmRgt = styled.div`
    width: 1.5vw;
    height: 1.5vh;
    position: absolute;
    border-radius: 50%;
    top: 7.4vh;
    left: 5.2vw;
    background-color: white;
`

const pulseVert = keyframes`
    0%, 100% {
        transform: scale(0.5);
    }
    50% {
        transform: scale(1);
    }
`

const pulseHori = keyframes`
    0%, 100% {
        transform: scale(1) rotate(90deg);
    }
    50% {
        transform: scale(0.5) rotate(90deg);
    }
`

const pulse45 = keyframes`
    0%, 100% {
        transform: scale(0.5) rotate(45deg);
    }
    50% {
        transform: scale(1) rotate(45deg);
    }
`

const pulseNeg45 = keyframes`
    0%, 100% {
        transform: scale(0.5) rotate(-45deg);
    }
    50% {
        transform: scale(1) rotate(-45deg);
    }
`

const SunRayBtm = styled.div`
    width: 0.2vw;
    height: 1.5vw;
    background-color: yellow;
    position: absolute;
    top: 8.5vw;
    left: 4vw;
    border-radius: 25%;
    animation: ${pulseVert} infinite ease-in-out;
    animation-duration: 12s;
    animation-delay: 1.2s;
`

const SunRayTop = styled.div`
    width: 0.2vw;
    height: 1.5vw;
    background-color: yellow;
    position: absolute;
    top: -2vw;
    left: 4vw;
    border-radius: 25%;
    animation: ${pulseVert} infinite ease-in-out;
    animation-duration: 12s;
    animation-delay: 1s;
`

const SunRayRgt = styled.div`
    width: 0.2vw;
    height: 1.5vw;
    background-color: yellow;
    position: absolute;
    top: 3.5vw;
    left: 9.5vw;
    border-radius: 25%;
    transform: rotate(90deg);
    animation: ${pulseHori} infinite ease-in-out;
    animation-duration: 12s;
    animation-delay: 0.8s;
`

const SunRayLft = styled.div`
    width: 0.2vw;
    height: 1.5vw;
    background-color: yellow;
    position: absolute;
    top: 3.5vw;
    left: -1.5vw;
    border-radius: 25%;
    transform: rotate(90deg);
    animation: ${pulseHori} infinite ease-in-out;
    animation-duration: 12s;
    animation-delay: 0.12s;
`

const SunRayBtmLft = styled.div`
    width: 0.2vw;
    height: 1.5vw;
    background-color: yellow;
    position: absolute;
    top: 7vw;
    left: 0vw;
    transform: rotate(45deg);
    border-radius: 25%;
    animation: ${pulse45} infinite ease-in-out;
    animation-duration: 12s;
    animation-delay: 0.4s;
`

const SunRayTopRgt = styled.div`
    width: 0.2vw;
    height: 1.5vw;
    background-color: yellow;
    position: absolute;
    top: -0.5vw;
    left: 8vw;
    transform: rotate(45deg);
    border-radius: 25%;
    animation: ${pulse45} infinite ease-in-out;
    animation-duration: 12s;
    animation-delay: 0.2s;
`

const SunRayBtmRgt = styled.div`
    width: 0.2vw;
    height: 1.5vw;
    background-color: yellow;
    position: absolute;
    top: 7vw;
    left: 8vw;
    transform: rotate(-45deg);
    border-radius: 25%;
    animation: ${pulseNeg45} infinite ease-in-out;
    animation-duration: 12s;
    animation-delay: 1.4s;
`

const SunRayTopLft = styled.div`
    width: 0.2vw;
    height: 1.5vw;
    background-color: yellow;
    position: absolute;
    top: -0.5vw;
    left: 0vw;
    transform: rotate(-45deg);
    border-radius: 25%;
    animation: ${pulseNeg45} infinite ease-in-out;
    animation-duration: 12s;
    animation-delay: 1.6s;
`

enum TimeOfDay {
    DAY = 'day',
    NIGHT = 'night',
}

const Environment = () => {
    const [time, setTime] = useState<TimeOfDay>(TimeOfDay.DAY)

    const flipTime = () =>
        time === TimeOfDay.DAY
            ? setTime(TimeOfDay.NIGHT)
            : setTime(TimeOfDay.DAY)

    const renderEnvironment = () => {
        if (time === TimeOfDay.DAY) {
            return (
                <DaySkyContainer>
                    <Sun onClick={flipTime}>
                        <SunRayBtm />
                        <SunRayTop />
                        <SunRayRgt />
                        <SunRayLft />
                        <SunRayBtmLft />
                        <SunRayTopRgt />
                        <SunRayBtmRgt />
                        <SunRayTopLft />
                    </Sun>
                </DaySkyContainer>
            )
        } else {
            return (
                <NightSkyContainer>
                    <Moon onClick={flipTime}>
                        <MoonDarkSpot />
                        <CloudContainer>
                            <CloudBlobLft />
                            <CloudBlobRgt />
                            <CloudBlobBtm />
                            <CloudBlobTopLft />
                            <CloudBlobTopRgt />
                            <CloudBlobBtmRgt />
                        </CloudContainer>
                    </Moon>
                </NightSkyContainer>
            )
        }
    }

    return (
        <EnvironmentContainer>
            {renderEnvironment()}
            <GroundContainer time={TimeOfDay.DAY === time} />
        </EnvironmentContainer>
    )
}

export default Environment
