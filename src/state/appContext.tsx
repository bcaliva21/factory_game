import React, { createContext, useContext, useReducer, Dispatch } from 'react'

import { AppState, AppActions } from './appInterfaces'
import { ACTIONS } from './constants'

const initialState = {
    inside: false,
    dispatch: (() => undefined) as Dispatch<any>,
}

export const AppContext = createContext(initialState)

export const AppDispatchContext = createContext(
    (() => undefined) as Dispatch<any>
)

export function useAppState() {
    return useContext(AppContext)
}

export function useAppDispatch() {
    return useContext(AppDispatchContext)
}

const logger = (type: string) => console.log('DISPATCH ACTION: ', type)

const appReducer = (state: AppState, action: AppActions) => {
    switch (action.type) {
        case ACTIONS.ENTER: {
            logger(ACTIONS.ENTER)
            return {
                ...state,
                inside: true,
            }
        }
        case ACTIONS.LEAVE: {
            logger(ACTIONS.LEAVE) 
            return {
                ...state,
                inside: false,
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}

export const AppProvider = ({ children }: { children?: React.ReactNode }) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    return (
        <AppContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    )
}
