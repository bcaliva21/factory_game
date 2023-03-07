import React from 'react'
import styled from 'styled-components'

// components
import IncineratorDoor from './IncineratorDoor'

const IncineratorContainer = styled.div`
    background-color: #901000;
    width: 20%;
    height: 45%;
    position: absolute;
    top: 11%;
    right: 30%;
    display: flex;
    align-items: end;
    justify-content: center;
    // border-top-right-radius: 20%;
    // border-top-left-radius: 20%;
`

const IncineratorRoofDecor = styled.div`
    position: absolute;
    top: -5%;
    width: 120%;
    height: 20%;
    background-color: black;
    border: grey solid 1px;
    z-index: 1;
`

const ExhaustPipeRight = styled.div`
    position: absolute;
    top: -60%;
    right: 20%;
    height: 70%;
    width: 25%;
    background-color: #ebebeb;
    z-index: 0;
`

const ExhaustPipeLeft = styled.div`
    position: absolute;
    top: -60%;
    left: 20%;
    height: 70%;
    width: 25%;
    background-color: #ebebeb;
    z-index: 0;
`

const Incinerator = () => {

    return (
        <IncineratorContainer>
            <IncineratorRoofDecor />
            <ExhaustPipeRight />
            <ExhaustPipeLeft />
            <IncineratorDoor />
        </IncineratorContainer>
    )
}

export default Incinerator
