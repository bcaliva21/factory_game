import { gql } from '@apollo/client'

export const GET_DIFFICULTY = gql`
	query GetDifficulty {
		difficulty @client
	}
`

export const GET_GAME_SCORE = gql`
	query GetGameScore {
		gameScore @client
	}
`

export const GET_GAME_SCORE_AND_GAME_STATE = gql`
	query GetGameScoreAndGameState {
		gameScore @client
		gameState @client
	}
`

export const GET_GAME_STATE = gql`
	query GetGameState {
		gameState @client
	}
`

export const GET_IS_INSIDE = gql`
    query GetIsInside {
        isInside @client
    }
`

export const GET_ITEMS_REMOVED_COUNT = gql`
	query GetItemsRemovedCount {
		getItemsRemovedCount @client
	}
`

export const GET_GAME_STATE_AND_IS_INSIDE = gql`
	query GetGameStateAndIsInside {
		isInside @client
		gameState @client
	}
`

