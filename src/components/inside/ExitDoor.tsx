import React from 'react'
import styled, { css } from 'styled-components'

const ExitDoorContainer = styled.div`
    width: calc(100vw/ 16);
    height: calc(100vh/ 8);
    position: absolute;
    left: 5%;
    top: 30vh;
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
    height: 86%;
    position: absolute;
    top: 7%;
    left: 5%;
    background-color: #901000;
`

const RightDoor = styled.div`
    width: 45%;
    height: 86%;
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

const OutsideMiddle = styled.div`
    width: 10%;
    height: 68%;
    background-color: skyblue;
    position: absolute;
    left: 40%;
    z-index: 100;
    display: none;
`

const OutsideTop = styled.div`
    position: absolute;
    top: 11%;
    left: 4%;
    border-right: calc(100vw / 82) solid transparent;
    border-left: calc(100vw / 100) solid skyblue;
    border-bottom: calc(100vw / 475) solid skyblue;
    border-top: calc(100vw / 475) solid transparent;
    transform: rotate(180deg);
    z-index: 100;
    display: none;
`

const OutsideBot = styled.div`
    position: absolute;
    bottom: 16%;
    left: 4%;
    border-right: calc(100vw / 82) solid transparent;
    border-left: calc(100vw / 100) solid skyblue;
    border-bottom: calc(100vw / 450) solid skyblue;
    border-top: calc(100vw / 450) solid transparent;
    transform: scaleX(-1);
    z-index: 100;
    display: none;
`

const DoorFrame = styled.div`
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 70%;
    height: 60%;
    border: 2px solid black;
    border-bottom: none;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;

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
        ${OutsideTop} {
            display: block;
        }
        ${OutsideMiddle} {
            display: block;
        }
        ${OutsideBot} {
            display: block;
        }
    }
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
    top: 40%;~
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
    height: 86%;
    border: 2px solid black;
    ${({ right }) => right && adjustRight}
    ${({ left }) => left && adjustLeft}
    z-index: 10;
`

const HorizontalTop = styled.div`
    position: absolute;
    top: 3%;
    width: 84%;
    border: 3px solid black;
`

const HorizontalBot = styled.div`
    position: absolute;
    bottom: -4%;
    width: 106%;
    border: 4px solid black;
`

const ExitDoor = ({ handleClose }: { handleClose: () => void }) => {

    return (
        <ExitDoorContainer>
            <DoorFrame onClick={handleClose}>
                <OutsideMiddle />
                <OutsideTop />
                <OutsideBot />
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
        </ExitDoorContainer>
    )
}

export default ExitDoor