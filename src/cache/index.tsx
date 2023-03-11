import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client"
import { argv0 } from "process"
import { GAME_STATE_TYPES } from "../components/inside/utils"

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
                    }
                },
				gameState: {
					read() {
						return gameStateVar()
					}
				},
				gameScore: {
					read() {
						return gameScoreVar()
					}
				},
				difficulty: {
					read() {
						return difficultyVar()
					}
				},
				itemsCorrectCount: {
					read() {
						return itemsCorrectCountVar()
					}
				},
           }
        }
    }
})

// init values
const isInsideVarIntialValue = false
const gameStateVarInitialValue = GAME_STATE_TYPES.NOT_STARTED
const gameScoreVarInitialValue = 0
const difficultyVarInitialValue = 0
const itemsCorrectCountVarInitialValue = 0

// helpers
export const isInsideVar: ReactiveVar<boolean> = makeVar<boolean>(isInsideVarIntialValue)
export const gameStateVar: ReactiveVar<GAME_STATE_TYPES> = makeVar<GAME_STATE_TYPES>(gameStateVarInitialValue)
export const gameScoreVar: ReactiveVar<number> = makeVar<number>(gameScoreVarInitialValue)
export const difficultyVar: ReactiveVar<number> = makeVar<number>(difficultyVarInitialValue)
export const itemsCorrectCountVar: ReactiveVar<number> = makeVar<number>(itemsCorrectCountVarInitialValue)

