import React from 'react'
import styled, { keyframes } from 'styled-components'

const EnvironmentContainer = styled.div`
    width: 80%;
    height: 100%;
    background-color: white;
    position: absolute;
    z-index: -2;
    display: flex;
    flex-direction: column;
`

const SkyContainer = styled.div`
    width: 100%;
    height: 50%;
    background-color: #87cefa;
    position: relative;
    opacity: 0.85;
`

const GroundContainer = styled.div`
    width: 100%;
    height: 50%;
    background-color: #5c7515;
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

const Environment = () => {

    return (
        <EnvironmentContainer>
            <SkyContainer>
                <Sun>
                    <SunRayBtm />
                    <SunRayTop />
                    <SunRayRgt />
                    <SunRayLft />
                    <SunRayBtmLft />
                    <SunRayTopRgt />
                    <SunRayBtmRgt />
                    <SunRayTopLft />
                </Sun>
            </SkyContainer>
            <GroundContainer />
        </EnvironmentContainer>
    )
}

export default Environment
