import React from 'react'
import styled from 'styled-components'

const DriverContainer = styled.div`
    height: 100%;
    width: 70%;
    position: relative;
    background-color: lightgrey;
`

const DriverHead = styled.div`
    position: absolute;
    top: 20%;
    right: 20%;
    border-radius: 50%;
    background-color: black;
    width: 50%;
    height: 30%;
`

const DriverBody = styled.div`
    position: absolute;
    top: 55%;
    right: 25%;
    border-radius: 30%;
    background-color: black;
    height: 50%;
    width: 40%;
`

const DriverArm = styled.div`
    position: absolute;
    bottom: 20%;
    right: 40%;
    border-radius: 30%;
    background-color: black;
    width: 50%;
    height: 15%;
`

const Driver = () => (
    <DriverContainer>
        <DriverHead />
        <DriverBody />
        <DriverArm />
    </DriverContainer>
)

export default Driver
