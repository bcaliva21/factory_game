import React from 'react'
import styled, { css } from 'styled-components'
import useSound from 'use-sound'
import doorSound from '../../assets/door_open.mp3'


const EnterDoorContainer = styled.div`
    width: calc(100vw / 8);
    height: calc(100vh / 4.5);
    position: absolute;
    bottom: 1.5%;
    right: 10vw;
`

const LeftDoor = styled.div`
    width: 45%;
    height: 85%;
    position: absolute;
    top: 7%;
    left: 5%;
    display: none;
    background-color: #901000;
`

const LeftDoorMask = styled.div`
    width: 45%;
    height: 85%;
    position: absolute;
    top: 7%;
    left: 5%;
    background-color: #901000;
`

const RightDoor = styled.div`
    width: 45%;
    height: 85%;
    position: absolute;
    top: 7%;
    right: 5%;
    background-color: #901000;
`

const LeftDoorVerticalLine = styled.div`
    height: 80%;
    width: 0;
    border: 1px solid black;
    position: absolute;
    top: 10%;
    right: 20%;
    display: none;
`

const KnobContainer = styled.div`
    height: 20%;
    width: 15%;
    position: absolute;
    top: 40%;
    left: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    display: block;
`

const InsideMiddle = styled.div`
    width: 10%;
    height: 90%;
    background-color: black;
    position: absolute;
    left: 40%;
    z-index: 40;
    display: none;
`

const openDoor = css`
    &:hover {
        cursor: pointer;
        ${LeftDoor} {
            display: block;
        }
        ${KnobContainer} {
            display: none;
        }
        ${LeftDoorVerticalLine} {
            display: block;
        }
        ${InsideMiddle} {
            display: block;
        }
    }
`

const DoorFrame = styled.div<{ hasAuth: boolean }>`
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 100%;
    height: 80%;
    border: 2px solid black;
    border-bottom: none;
    background-color: #ffd700;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ hasAuth }) => hasAuth && openDoor}
`

const KnobCase = styled.div`
    width: 40%;
    height: 80%;
    background-color: black;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Knob = styled.div`
    width: 90%;
    height: 40%;
    background-color: white;
    z-index: 15;
    border-radius: 50%;
`

const OpenKnobContainer = styled.div`
    height: 20%;
    width: 15%;
    position: absolute;
    top: 40%;
    right: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const OpenKnobCase = styled.div`
    width: 40%;
    height: 80%;
    background-color: black;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`

const OpenKnob = styled.div`
    width: 90%;
    height: 40%;
    background-color: white;
    z-index: 15;
    border-radius: 50%;
`

const adjustRight = css`
    position: absolute;
    top: 3%;
    right: 3%;
`

const adjustLeft = css`
    position: absolute;
    top: 3%;
    left: 3%;
`

const VerticalLine = styled.div<{ right?: string; left?: string }>`
    height: 90%;
    border: 2px solid black;
    ${({ right }) => right && adjustRight}
    ${({ left }) => left && adjustLeft}
    z-index: 50;
`

const HorizontalTop = styled.div`
    position: absolute;
    top: 3%;
    width: 90%;
    border: 3px solid black;
`

const HorizontalBot = styled.div`
    position: absolute;
    bottom: -4%;
    width: 106%;
    border: 8px solid black;
`

const DoorBarLock = styled.div<{ hasAuth: boolean }>`
    position: absolute;
    top: 40%;
    height: 40px;
    width: 114%;
    background-color: black;
    z-index: 100;
    display: ${({ hasAuth }) => (hasAuth ? 'none' : 'flex')};
    align-items: center;
    justify-content: center;
`

const DoorToBuildingAttachmentLeft = styled.div`
    height: 160%;
    width: 10px;
    background-color: #901000;
    position: absolute;
    left: -4%;
    top: -30%;
`

const DoorToBuildingAttachmentRight = styled.div`
    height: 160%;
    width: 10px;
    background-color: #901000;
    position: absolute;
    right: -4%;
    top: -30%;
`

const DoorButton = styled.button`
    &:hover {
        cursor: pointer;
    }
    color: white;
    background-color: black;
    font-size: 16px;
    font-weight: bold;
    border: none;
    z-index: 102;
`

const EnterDoor = ({
    handleEnter,
    handleAccess,
    hasToken,
}: {
    hasToken: boolean
    handleEnter: () => void
    handleAccess: () => void
}) => {
    const [playSound] = useSound(doorSound)
    return (
        <EnterDoorContainer>
            <DoorFrame
                hasAuth={hasToken}
                onClick={() => {
                    playSound()
                    hasToken && handleEnter()
                }}
            >
                <DoorBarLock hasAuth={hasToken}>
                    <DoorButton
                        onClick={(e) => {
                            handleAccess()
                        }}
                    >
                        Login/Register
                    </DoorButton>

                    <DoorToBuildingAttachmentLeft />
                    <DoorToBuildingAttachmentRight />
                </DoorBarLock>
                <InsideMiddle />
                <LeftDoorMask />
                <LeftDoor>
                    <LeftDoorVerticalLine />
                    <OpenKnobContainer>
                        <OpenKnobCase>
                            <OpenKnob />
                        </OpenKnobCase>
                    </OpenKnobContainer>
                </LeftDoor>
                <RightDoor />
                <KnobContainer>
                    <KnobCase>
                        <Knob />
                    </KnobCase>
                </KnobContainer>
                <VerticalLine />
                <VerticalLine right={'right'} />
                <VerticalLine left={'left'} />
                <HorizontalTop />
                <HorizontalBot />
            </DoorFrame>
        </EnterDoorContainer>
    )
}

export default EnterDoor
