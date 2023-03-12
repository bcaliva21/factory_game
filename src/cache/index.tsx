import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client'
import { GAME_STATE_TYPES, ItemProps } from '../components/inside/utils'

// add a difficulty variable that is tied to the ANIMATION_TIMINGS array
//     difficulty: number
//
//     if a component needs to use a timing based on difficulty
//     they can use it like so: ANIMATION_TIMINGS[difficulty]

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isInside: {
                    read() {
                        return isInsideVar()
                    },
                },
                gameState: {
                    read() {
                        return gameStateVar()
                    },
                },
                gameScore: {
                    read() {
                        return gameScoreVar()
                    },
                },
                difficulty: {
                    read() {
                        return difficultyVar()
                    },
                },
                itemsRemovedCount: {
                    read() {
                        return itemsRemovedCountVar()
                    },
                },
                items: {
                    read() {
                        return itemsVar()
                    },
                },
            },
        },
    },
})

// init values
const isInsideVarIntialValue = false
const gameStateVarInitialValue = GAME_STATE_TYPES.NOT_STARTED
const gameScoreVarInitialValue = 0
const difficultyVarInitialValue = 0
const itemsRemovedCountVarInitialValue = 0
const itemsVarInitialValue: ItemProps[] = []

// helpers
export const isInsideVar: ReactiveVar<boolean> = makeVar<boolean>(
    isInsideVarIntialValue
)
export const gameStateVar: ReactiveVar<GAME_STATE_TYPES> =
    makeVar<GAME_STATE_TYPES>(gameStateVarInitialValue)
export const gameScoreVar: ReactiveVar<number> = makeVar<number>(
    gameScoreVarInitialValue
)
export const difficultyVar: ReactiveVar<number> = makeVar<number>(
    difficultyVarInitialValue
)
export const itemsRemovedCountVar: ReactiveVar<number> = makeVar<number>(
    itemsRemovedCountVarInitialValue
)
export const itemsVar: ReactiveVar<ItemProps[]> =
    makeVar<ItemProps[]>(itemsVarInitialValue)
