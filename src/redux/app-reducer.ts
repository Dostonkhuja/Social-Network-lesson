import {getAuthUserData} from "./auth-reducer";
import {InferActionsTypes} from "./redux-store";

let initialState = {
    initialized: false
}

export type InitialStateType =  typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state:InitialStateType = initialState, action:ActionsType):InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCSESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export let actions = {
    initializedSuccsess : () => ({type: 'SN/APP/INITIALIZED_SUCCSESS'})
}

export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccsess())
        })
}

export default appReducer;