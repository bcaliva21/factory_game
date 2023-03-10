import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client"
import { GAME_STATE_TYPES } from "../components/inside/utils"

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
           }
        }
    }
})

// init values
const isInsideVarIntialValue = false
const gameStateVarInitialValue = GAME_STATE_TYPES.NOT_STARTED
const gameScoreVarInitialValue = 0

// helpers
export const isInsideVar: ReactiveVar<boolean> = makeVar<boolean>(isInsideVarIntialValue)
export const gameStateVar: ReactiveVar<GAME_STATE_TYPES> = makeVar<GAME_STATE_TYPES>(gameStateVarInitialValue)
export const gameScoreVar: ReactiveVar<number> = makeVar<number>(gameScoreVarInitialValue)

