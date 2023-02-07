import React from 'react'
import styled from 'styled-components'

const FactoryContainer = styled.div`
    width: 80%;
    height: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FactoryRoofSection = styled.div`
    border-right: 115px solid transparent;
    border-left: 115px solid red;
    border-bottom: 40px solid red;
    border-top: 40px solid transparent;
    display: inline-block;
    transform: translateY(-80px);
`

const WindowContainer = styled.div`
    width: 100%;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const FactoryWindow = styled.div`
    background-color: skyblue;
    height: 100%;
    width: 5%;
`

const FactoryRoofStackOne = styled.div`
    position: absolute;
    top: 12%;
    right: 33%;
    width: 5%;
    height: 25%;
    z-index: 0;
    background-color: beige;
`

const FactoryRoofStackTwo = styled.div`
    position: absolute;
    top: 12%;
    right: 39%;
    width: 5%;
    height: 25%;
    z-index: 0;
    background-color: beige;
`

const FactoryBody = styled.div`
    margin: auto;
    background-color: beige;
    width: 60%;
    height: 40%;
    z-index: 10;
`

const Factory = () => {
    return (
    <FactoryContainer>
        <FactoryRoofStackOne />
        <FactoryRoofStackTwo />
        <FactoryBody>
            <FactoryRoofSection />
            <FactoryRoofSection />
            <FactoryRoofSection />
            <FactoryRoofSection />
            <WindowContainer>
                <FactoryWindow />
                <FactoryWindow />
                <FactoryWindow />
                <FactoryWindow />
            </WindowContainer>
        </FactoryBody>
    </FactoryContainer>
    )
}

export default Factory
