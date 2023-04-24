import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client'
import { GAME_STATE_TYPES, ItemProps } from '../components/utils'

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                accessPage: {
                    read() {
                        return accessPageVar()
                    },
                },
                difficulty: {
                    read() {
                        return difficultyVar()
                    },
                },
                gameScore: {
                    read() {
                        return gameScoreVar()
                    },
                },
                gameState: {
                    read() {
                        return gameStateVar()
                    },
                },
                isInside: {
                    read() {
                        return isInsideVar()
                    },
                },
                items: {
                    read() {
                        return itemsVar()
                    },
                },
                itemsRemovedCount: {
                    read() {
                        return itemsRemovedCountVar()
                    },
                },
            },
        },
    },
})

// init values
const accessPageVarInitialValue = false
const gameScoreVarInitialValue = 0
const difficultyVarInitialValue = 0
const gameStateVarInitialValue = GAME_STATE_TYPES.NOT_STARTED
const isInsideVarIntialValue = false
const itemsRemovedCountVarInitialValue = 0
const itemsVarInitialValue: ItemProps[] = []

// helpers
export const accessPageVar: ReactiveVar<boolean> = makeVar<boolean>(
    accessPageVarInitialValue
)
export const difficultyVar: ReactiveVar<number> = makeVar<number>(
    difficultyVarInitialValue
)
export const gameStateVar: ReactiveVar<GAME_STATE_TYPES> =
    makeVar<GAME_STATE_TYPES>(gameStateVarInitialValue)
export const gameScoreVar: ReactiveVar<number> = makeVar<number>(
    gameScoreVarInitialValue
)
export const isInsideVar: ReactiveVar<boolean> = makeVar<boolean>(
    isInsideVarIntialValue
)
export const itemsRemovedCountVar: ReactiveVar<number> = makeVar<number>(
    itemsRemovedCountVarInitialValue
)
export const itemsVar: ReactiveVar<ItemProps[]> =
    makeVar<ItemProps[]>(itemsVarInitialValue)

