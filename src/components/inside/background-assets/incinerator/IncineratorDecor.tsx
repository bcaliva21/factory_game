import React from 'react'
import styled from 'styled-components'

const DecorContainer = styled.div`
	width: 100%;
	height: 30%;
	background-color: green;
	position: absolute;
	bottom: 30%;
`

const HighScoreContainer = styled.div`
	width: 25%;
	height: 20%;
`

const NamePlate = styled.div`
	width: 100%;
	height: 50%;
	font-size: 14px;
	color: black;
`

const ScorePlate = styled.div`
	width: 100%;
	height: 50%;
	font-size: 14px;
	color: black;
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
