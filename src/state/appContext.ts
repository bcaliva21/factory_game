import { createContext, useContext, useReducer } from 'react'

type Props = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

interface AppState {
    inside: boolean;
}

const initialState = {
    inside: false,
}

export const AppContext = createContext(initialState)

export const AppDispatchContext = createContext(null)

export function useAppState() {
    return useContext(AppContext)
}

export function useAppDispatch() {
    return useContext(AppDispatchContext)
}

const appReducer = (state: AppState, action: any) => {
    switch(action.type) {
        case 'enter': {
            return {...state, 
                inside: action.inside,
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export const AppProvider = ({ children }: Props) => {
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
