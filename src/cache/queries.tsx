import { gql } from '@apollo/client'

export const GET_IS_INSIDE = gql`
    query GetIsInside {
        isInside @client
    }
`

export const GET_GAME_STATE = gql`
	query GetGameState {
		gameState @client
	}
`

export const GET_IS_INSIDE_AND_GAME_STATE= gql`
	query GetGameStateAndIsInside {
		isInside @client
		gameState @client
	}
`

