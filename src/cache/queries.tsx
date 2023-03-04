import { gql } from '@apollo/client'

export const GET_IS_INSIDE = gql`
    query GetIsInside {
        isInside @client
    }
`