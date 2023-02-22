import React, { createContext, useContext, useReducer, Dispatch } from 'react'

interface AppState {
    inside: boolean;
    dispatch: Dispatch<any>;
}

const initialState = {
    inside: false,
    dispatch: (() => undefined) as Dispatch<any>,
}

export const AppContext = createContext(initialState)

export const AppDispatchContext = createContext((() => undefined) as Dispatch<any>)

export function useAppState() {
    return useContext(AppContext)
}

export function useAppDispatch() {
    return useContext(AppDispatchContext)
}

const appReducer = (state: AppState, action: any) => {
    switch(action.type) {
        case 'ENTER': {
            return {
                ...state, 
                inside: true,
            }
        }
        case 'LEAVE': {
            return {
                ...state,
                inside: false,
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export const AppProvider = ({ children }: { children?: React.ReactNode }) => {
    const [state, dispatch] = useReducer(
        appReducer,
        initialState,
    )

    return (
        <AppContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                { children }
            </AppDispatchContext.Provider>
        </AppContext.Provider>
  )
}
