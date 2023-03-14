import { gql } from '@apollo/client'

export const TEST_QUERY = gql`
	query TestQuery {
		users {
			email
			highScore
			id
			name
		}
	}
`

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

export const GET_ITEMS = gql`
	query GetItems {
		items @client
	}
`

export const GET_ITEMS_REMOVED_COUNT = gql`
	query GetItemsRemovedCount {
		getItemsRemovedCount @client
	}
`

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const GET_GAME_STATE_IS_INSIDE_AND_ITEMS = gql`
	query GetGameStateIsInsideAndItems {
		isInside @client
		items @client
		gameState @client
		users {
			email
			highScore
			id
			name
		}
	}
`

