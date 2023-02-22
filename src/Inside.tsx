import React from 'react'
import styled, { keyframes } from 'styled-components'

// components
import ConveyorBelt from './ConveyorBelt'

// state
import { useAppDispatch, useAppState } from './state/appContext'

interface InsideProps {
    isInside: boolean
    setIsInside: Function
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    color: white;
    background-color: #b0d9ff;
    display: default;
`

const Close = styled.button`
    position: absolute;
    top: 5%;
    right: 5%;
    transition: 0.5s ease-in-out;
    border: none;
    padding: 5px 10px;

    &:hover {
        cursor: pointer;
        background-color: red;
        transform: scale(1.2);
    }
`

const Backdrop = styled.div`
    width: 80%;
    height: 80%;
    position: absolute;
    top: 10%;
    left: 10%;
    background-color: #000a13;
`

const WarningLight = styled.div<{ left: string }>`
    width: 2%;
    height: 3%;
    position: absolute;
    top: 0;
    left: ${({left}) => left};
    background-color: red;
    border-top: 10px solid grey;
    border-right: 20px solid #000a13;
    border-bottom: 10px solid #000a13;
    border-left: 20px solid #000a13;
`

const BeamLeft = styled.div`
    width: 47%;
    height: 100%;
    position: absolute;
    top: 1%;
    left: 1px;
    background: rgb(255,0,0);
    background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,250,0,1) 52%, rgba(255,246,0,1) 100%);
`
    
const BeamRight = styled.div`
    width: 47%;
    height: 100%;
    position: absolute;
    top: 1%;
    right: 1px;
    background: rgb(255,0,0);
    background: linear-gradient(270deg, rgba(255,0,0,1) 0%, rgba(255,250,0,1) 52%, rgba(255,246,0,1) 100%);
`

const Inside = ({}) => {
    const dispatch = useAppDispatch()
    const handleClose = () => dispatch({
        type: 'LEAVE',
    })

    return (
        <Container>
        <Backdrop>
            <Close onClick={handleClose}>close</Close>
            <ConveyorBelt />
        </Backdrop>
        </Container>
    )
}

export default Inside
