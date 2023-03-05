import React from 'react'
import styled, { css } from 'styled-components'

const ExitDoorContainer = styled.div`
    width: calc(100vw/ 8);
    height: calc(100vh/ 4);
    position: absolute;
    left: 0;
    top: 30vh;
`

const DoorFrame = styled.div`
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 60%;
    border: 2px solid black;
    border-bottom: none;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        background-color: white;
    }
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
    border: 1px solid black;
    ${({ right }) => right && adjustRight}
    ${({ left }) => left && adjustLeft}
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

const ExitDoor = ({ handleClose }: { handleClose: () => void }) => {

    return (
        <ExitDoorContainer>
            <DoorFrame onClick={handleClose}>
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