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

// helpers
export const isInsideVar: ReactiveVar<boolean> = makeVar<boolean>(isInsideVarIntialValue)
