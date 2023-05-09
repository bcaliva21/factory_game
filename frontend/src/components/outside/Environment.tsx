import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

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

const sunrise = keyframes`
    0% {
        box-shadow: none;
    }
`

const rays = keyframes`
    0% {
        box-shadow: 
        0 0 0 0 #FFDE0080,
        0 0 0 20px #FFDE0080,
        0 0 0 40px #FFDE0040,
        0 0 0 60px #FFDE0020,
        0 0 0 80px #FFDE0010,
        0 0 40px 100px #FFDE0010;
    }
    100% {
        box-shadow: 
        0 0 0 20px #FFDE0080,
        0 0 0 40px #FFDE0040,
        0 0 0 60px #FFDE0020,
        0 0 0 80px #FFDE0010,
        0 0 0 100px #FFDE0000,
        0 0 40px 100px #FFDE0010;
    }
`

const Sun = styled.div`
    width: 160px;
    height: 160px;
    background-color: yellow;
    position: absolute;
    border-radius: 50%;
    top: 4vw;
    left: 4vw;
    &:hover {
        cursor: pointer;
    }
    background-color: #ffde00;
    border-radius: 50%;
    box-shadow: 0 0 0 20px #ffde0080, 0 0 0 40px #ffde0040, 0 0 0 60px #ffde0020,
        0 0 0 80px #ffde0010, 0 0 0 100px #ffde0000, 0 0 40px 100px #ffde0010;
    animation: ${sunrise} 2s infinite linear forwards,
        ${rays} 2s 2s infinite linear;
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
                    <Sun onClick={flipTime} />
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
