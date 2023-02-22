import { Dispatch } from 'react'

export interface AppState {
    inside: boolean
    dispatch: Dispatch<(() => undefined)>
}

export interface AppActions {
    type: 'ENTER' | 'LEAVE'
}
