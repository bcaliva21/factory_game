import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client"

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isInside: {
                    read() {
                        return isInsideVar()
                    }
                },
                gameInProgress: {
                    read() {
                        return gameInProgressVar()
                    }
                }
            }
        }
    }
})

// init values
const isInsideVarIntialValue = false
const gameInProgressVarInitialValue = false

// helpers
export const isInsideVar: ReactiveVar<boolean> = makeVar<boolean>(isInsideVarIntialValue)
export const gameInProgressVar: ReactiveVar<boolean> = makeVar<boolean>(gameInProgressVarInitialValue)
