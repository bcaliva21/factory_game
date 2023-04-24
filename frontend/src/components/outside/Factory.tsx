import React from 'react'
import { useQuery } from '@apollo/client'
import styled, { keyframes } from 'styled-components'

// components
import Worker from './Worker'
import EnterDoor from './EnterDoor'
import Access from '../access'

// cache
import { GET_FACTORY_VARIABLES } from '../../graphql/queries'
import { isInsideVar, accessPageVar } from '../../graphql/cache'

import { useToken, useUser, useUserHighScore } from '../hooks'

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
    border-right: calc(100vw / 15.6) solid transparent;
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
    position: relative;
    height: 60%;
    width: 90%;
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
    top: 2.5vh;
    background-color: lightgray;
    border-radius: 50%;
    z-index: -1;
    transform: rotate(30deg);
    animation: ${grow} infinite ease-in-out;
    animation-duration: 6s;
`

const SlowestSmoke = styled.div`
    height: 4vh;
    width: 6vh;
    position: absolute;
    top: 2.5vh;
    background-color: lightgray;
    border-radius: 50%;
    z-index: -1;
    transform: rotate(-30deg);
    animation: ${grow} infinite ease-in-out;
    animation-duration: 5s;
`

const SlowSmoke = styled.div`
    height: 4vh;
    width: 6vh;
    position: absolute;
    top: 2.5vh;
    background-color: lightgray;
    border-radius: 50%;
    z-index: -1;
    transform: rotate(-50deg);
    animation: ${grow} infinite ease-in-out;
    animation-duration: 4s;
`

const NoDelaySmoke = styled.div`
    height: 4vh;
    width: 6vh;
    position: absolute;
    top: 2.5vh;
    background-color: lightgray;
    border-radius: 50%;
    z-index: -1;
    transform: rotate(50deg);
    animation: ${grow} infinite ease-in-out;
    animation-duration: 3s;
`

const HalfSecDelaySmoke = styled.div`
    height: 4vh;
    width: 6vh;
    position: absolute;
    top: 2.5vh;
    background-color: lightgray;
    border-radius: 50%;
    z-index: -1;
    transform: rotate(60deg);
    animation: ${grow} infinite ease-in-out;
    animation-duration: 3s;
    animation-delay: 0.5s;
`

const OneSecDelaySmoke = styled.div`
    height: 4vh;
    width: 6vh;
    position: absolute;
    top: 2.5vh;
    background-color: lightgray;
    border-radius: 50%;
    z-index: -1;
    transform: rotate(-60deg);
    animation: ${grow} infinite ease-in-out;
    animation-duration: 3s;
    animation-delay: 1s;
`

// const Placard = styled.div`
//     position: absolute;
//     color: #ffd700;
//     background-color: #901000;
//     border: medium inset #ffd700;
//     font-size: larger;
//     padding: 0.5% 1.5%;
//     bottom: 20.5vh;
//     right: 8vw;
// `

const Factory = () => {
    const { token, setToken } = useToken()
    const { setUser } = useUser()
    const { setUserHighScore } = useUserHighScore()
    const { data, loading, error } = useQuery(GET_FACTORY_VARIABLES)

    if (loading) console.log('what to do...')
    if (error) console.log('with these.')

    const isInside = data.isInside
    const accessPage = data.accessPage

    const handleDoorClick = () => isInsideVar(!isInside)
    const handleAccessClick = () => accessPageVar(!accessPage)

    return (
        <FactoryContainer>
            <FactoryBody>
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
                <FactoryRoofSection />
                {accessPage ? (
                    <>
                        <Access
                            setToken={setToken}
                            setUser={setUser}
                            setUserHighScore={setUserHighScore}
                        />
                    </>
                ) : (
                    <>
                        <WindowContainer>
                            <FactoryWindow />
                            <FactoryWindow>
                                <Worker />
                            </FactoryWindow>
                            <FactoryWindow />
                            <FactoryWindow />
                        </WindowContainer>
                        <EnterDoor
                            hasToken={!!token}
                            handleEnter={handleDoorClick}
                            handleAccess={handleAccessClick}
                        />
                    </>
                )}
            </FactoryBody>
        </FactoryContainer>
    )
}

export default Factory
