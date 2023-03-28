import { gql } from '@apollo/client'

export const GET_FACTORY_VARIABLES = gql`
    query GetFactoryVariables {
        isInside @client
        accessPage @client
    }
`
export const GET_DIFFICULTY = gql`
    query GetDifficulty {
        difficulty @client
    }
`

export const GET_DIFFICULTY_GAME_STATE_IS_INSIDE_AND_ITEMS = gql`
    query GetDifficultyGameStateIsInsideAndItems {
        difficulty @client
        isInside @client
        items @client
        gameState @client
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

export const GET_HIGH_SCORES_AND_NAMES = gql`
    query GetHighScoresAndNames {
        users {
            highScore
            name
        }
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

export const REGISTER_MUTATION = gql`
    mutation Register($email: String!, $name: String!, $password: String!) {
        register(email: $email, name: $name, password: $password) {
            token
            id
        }
    }
`
export const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user(email: $email) {
                id
            }
        }
    }
`

export const UPDATE_HIGH_SCORE_MUTATION = gql`
    mutation UpdateHighScore($id: Int!, $highScore: Int!) {
        updateHighScore(id: $id, highScore: $highScore) {
            user
        }
    }
`
