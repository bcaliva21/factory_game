import React from 'react'
import styled from 'styled-components'

const DecorContainer = styled.div`
	width: 100%;
	height: 30%;
	background-color: #901000;
	position: absolute;
	bottom: 30%;
	display: flex;
	align-items: center;
	justify-content: center;
`

const HighScoreContainer = styled.div`
	width: 40%;
	height: 40%;
    background: linear-gradient(-45deg, rgba(100,100,100,0.22), rgba(200,200,200,0.25));
    box-shadow: 6px 6px 8px 0 rgba(0, 0, 0, 0.25),
    -4px -4px 6px 0 rgba(200, 200, 200, 0.3);
	background: linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(200,200,200,0.25));
	border-radius: 10px;
`

const NamePlate = styled.div`
	width: 100%;
	height: 50%;
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
			<HighScoreContainer>
				<NamePlate>Bradley</NamePlate>
				<ScorePlate>1000000</ScorePlate>
			</HighScoreContainer>
		</DecorContainer>
	)
}

export default IncineratorDecor
