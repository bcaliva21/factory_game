import React from 'react'
import styled, { keyframes } from 'styled-components'

const firewave = keyframes`
	0%, 100% {
		border-left: 11px solid maroon;
		border-top: 15px solid maroon;
	}
	50% {
		border-left: 15px solid maroon;
		border-top: 11px solid maroon;
	}
`

const innerFirewave = keyframes`
	0%, 100% {
		border-top-left-radius: 0;
	    border-top-right-radius: 11px;
	    border-bottom-right-radius: 15px;
	    border-bottom-left-radius: 15px;
	}
	50% {
		border-top-left-radius: 0;
	    border-top-right-radius: 15px;
	    border-bottom-right-radius: 11px;
	    border-bottom-left-radius: 11px;
	{
`

const DecorContainer = styled.div`
    width: 100%;
    height: 45%;
    background-color: transparent;
    position: absolute;
    bottom: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const FireContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
`

const FireWindow = styled.div`
    background-color: white;
    width: 45%;
    height: 80%;
    display: flex;
    align-items: end;
    justify-content: center;
`

const Fire = styled.div<{ size: string }>`
    transform: rotate(45deg);
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-top-left-radius: 0;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-left: 11px solid red;
    border-top: 15px solid red;
    overflow: hidden;
    background-color: orange;
    margin-bottom: 5px;

    animation: ${firewave} infinite linear;
    animation-duration: 5s;
    &:after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 15px;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        border-top-left-radius: 0;
        border-top-right-radius: 11px;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
        background-color: white;
        animation: ${innerFirewave} infinite linear;
        animation-duration: 4s;
    }
`
const HighScoreContainer = styled.div`
    width: 40%;
    height: 30%;
    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.25),
        -6px -6px 8px 0 rgba(145, 20, 0, 1);
    background: linear-gradient(
        -45deg,
        rgba(0, 0, 0, 0.22),
        rgba(100, 100, 100, 0.25)
    );
    border: 1px outset #901000;
    border-radius: 5%;
`

const NamePlate = styled.div`
    width: 100%;
    height: 30%;
    font-size: 14px;
    color: #420700;
    text-transform: uppercase;
    text-align: center;
    text-justify: center;
`

const ScorePlate = styled.div`
    width: 100%;
    height: 50%;
    font-size: 14px;
    color: #420700;
    text-transform: uppercase;
    text-align: center;
    text-justify: center;
`

const IncineratorDecor = () => {
    return (
        <DecorContainer>
            <FireContainer>
                <FireWindow>
                    <Fire size={'30px'} />
                    <Fire size={'30px'} />
                    <Fire size={'30px'} />
                </FireWindow>
            </FireContainer>
            <HighScoreContainer>
                <NamePlate>Bradley</NamePlate>
                <ScorePlate>1000000</ScorePlate>
            </HighScoreContainer>
        </DecorContainer>
    )
}

export default IncineratorDecor
