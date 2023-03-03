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
            }
        }
    }
});

// init values
const isInsideVarIntialValue: boolean = false

// getters/setters (note these ARE NOT reactive, use './queries' for access to reactive variables)
export const isInsideVar: ReactiveVar<boolean> = makeVar<boolean>(isInsideVarIntialValue)
